import React, {useEffect, useState, Children} from 'react';
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
} from 'react-native';
import {styComment} from './css';
import {useRoute} from '@react-navigation/native';
import {Firebase} from '../../firebase';
import Item from './item';
import ItemReply from './itemReply';
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
  const [number, setNumber] = useState ();
  useEffect (
    () => {
      HandleShowComment ();
      getUserName ();
      //HandleShowReply();
    },
    [comment]
  );
  const route = useRoute ();
  const HandleComment = () => {
    if (send === '') {
      alert ('nhap comment!');
    } else {
      const newPush = Firebase.database ()
        .ref ('Contentss')
        .child (`Post/${route.params.postID}`);
      // newPush
      //   .child ('comments')
      //   .push ({comment: send, user: userName, reply: '', like: ''});
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
  const HandleReply = id => {
    setModal (true);
    const ref = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`)
      .child (`comments/${id}`);

    ref.once ('value', value => {
      const values = value.val ();
      setReply (values.user);
      setCommentReply (values.comment);
      setKeyID (values.keyID);
      // value.ref.child ('reply').once ('value', res => {
      //   const values = res.val ();
      //   const obj = Object.values (values);
      //   setShowReply (obj.reverse ());
      // });
      //HandleShowReply(values.keyID);
    });
    HandleShowReply(id);
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
    HandleShowReply(keyID)
  };
  const HandleShowReply = (keyID) => {
    const ref = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`)
      .child (`comments/${keyID}`);
      ref.child('reply').once('value',value=>{
        const values = value.val ();
        const obj = Object.values (values);
        setShowReply (obj.reverse ());
      })
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
          keyExtractor={item => item.id}
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
        <View style={{height: '88%'}}>
          <FlatList
            style={{height: '69%', backgroundColor: '#808080'}}
            ListHeaderComponent={HeaderReply}
            data={showReply}
            renderItem={({item}) => <ItemReply item={item} />}
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
