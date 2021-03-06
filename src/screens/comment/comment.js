import React, {useEffect, useState, createRef, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {styComment} from './css';
import {useRoute} from '@react-navigation/native';
import {Firebase} from '../../firebase';
import Item from './item';
import ItemReply from './itemReply';
import {Button} from 'react-native-paper';
export default function Comment () {
  const [send, setSend] = useState ();
  const [comment, setComment] = useState ();
  const [userName, setUserName] = useState ();
  const [modal, setModal] = useState (false);
  const [reply, setReply] = useState ();
  const [keyID, setKeyID] = useState ();
  const [commentReply, setCommentReply] = useState ();
  const [textReply, setTextReply] = useState ();
  const [showReply, setShowReply] = useState ();
  const [items, setItems] = useState ();
  useEffect (() => {
    HandleShowComment ();
    getUserName ();
  }, []);
  const route = useRoute ();
  const HandleComment = () => {
    if (send === '') {
      alert ('nhap comment!');
    } else {
      const newPush = Firebase.database ()
        .ref ('Contentss')
        .child (`Post/${route.params.postID}`);
      const push = newPush.child ('comments').push ();
      const keypush = push.key;
      push.set ({
        comment: send,
        user: userName,
        reply: '',
        like: 0,
        keyID: keypush,
      });
    }
    setSend ('');
    HandleShowComment ();
  };
  const getUserName = () => {
    Firebase.auth ().onAuthStateChanged (user => {
      setUserName (user.displayName);
    });
  };
  const HandleShowComment = () => {
    const newPush = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`);

    newPush.child ('comments').once ('value', value => {
      const values = value.val ();
      const obj = Object.values (values);
      setComment (obj.reverse ());
    });
  };
  const HandleReply = item => {
    setModal (true);
    setReply (item.user);
    setCommentReply (item.comment);
    setKeyID (item.keyID);
    HandleShowReply (item.keyID);
  };
  const HandleLike = id => {
    const refData = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`)
      .child (`comments/${id}`);
    refData.once ('value', value => {
      const number = value.val ().like;
      const numberPuls = number + 1;
      refData.update ({like: numberPuls});
    });
    HandleShowComment ();
  };
  const HeaderReply = () => {
    return (
      <View style={styComment.styleReply}>
        <Text style={styComment.texrNameheader}>{reply}</Text>
        <Text style={styComment.textCommentheader}>{commentReply}</Text>
      </View>
    );
  };
  const HandlePushRply = () => {
    const refData = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`)
      .child (`comments/${keyID}`);
    refData.child ('reply').push ({
      text: textReply,
      user: userName,
    });
    setTextReply ('');
    HandleShowReply (keyID);
    HandleShowComment ();
  };
  const HandleShowReply = keyID => {
    const ref = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`)
      .child (`comments/${keyID}`);
    ref.child ('reply').once ('value', value => {
      const values = value.val ();
      const obj = Object.values (values);
      setShowReply (obj.reverse ());
    });
  };

  return (
    <View style={styComment.container}>
      <View style={styComment.contens}>
        <Text style={styComment.textName}>{route.params.name}</Text>
        <Text style={styComment.conten}>{route.params.content}</Text>
      </View>
      <View style={styComment.comment}>
        <FlatList
          data={comment}
          renderItem={({item}) => (
            <Item
              item={item}
              HandleReply={HandleReply}
              HandleLike={HandleLike}
            />
          )}
          keyExtractor={(item, index) => index}
          inverted
        />
        <View style={styComment.play}>
          <TextInput
            style={styComment.textput}
            value={send}
            placeholder="comment"
            onChangeText={text => setSend (text)}
          />
          <TouchableOpacity
            style={styComment.img}
            onPress={() => HandleComment ()}
          >
            <Image source={require ('../../assets/images/playbliue.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modal}>
        <TouchableOpacity onPress={() => setModal (false)}>
          <View style={styComment.headerModal}>
            <Image source={require ('../../assets/images/back.png')} />
            <Text style={styComment.textModal}>Tra loi</Text>
          </View>
        </TouchableOpacity>
        <View style={{height: '80%'}}>
          <FlatList
            style={{height: '69%', backgroundColor: '#808080'}}
            ListFooterComponent={HeaderReply}
            data={showReply}
            renderItem={({item}) => <ItemReply item={item} />}
            keyExtractor={item => item.id}
            inverted
          />
          <View style={styComment.play1}>
            <TextInput
              style={styComment.textput}
              placeholder="comment"
              value={textReply}
              onChangeText={text => setTextReply (text)}
            />
            <TouchableOpacity
              style={styComment.img}
              onPress={() => HandlePushRply ()}
            >
              <Image source={require ('../../assets/images/playbliue.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
