import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {styComment} from './css';
import {useRoute} from '@react-navigation/native';
import {Firebase} from '../../firebase';
import Item from './item';
export default function Comment () {
  const [send, setSend] = useState ();
  const [comment ,setComment]= useState();
  const [userName,setUserName] = useState();
  useEffect (() => {
    HandleShowComment();
    getUserName();
  }, [send]);
  const route = useRoute ();
  const HandleComment = () => {
    if(send === ''){
      console.log('nhap');
    }
    else{
      const newPush = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`);
    newPush.child ('comments').push ({comment: send,user:userName});
    }
    setSend ('');
  };
  const getUserName = () =>{
    Firebase.auth().onAuthStateChanged((user)=>{
      setUserName(user.displayName);
    })
  }
  const HandleShowComment = () =>{
    const newPush = Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${route.params.postID}`);
      newPush.child('comments').once('value',value=>{
        const values = value.val();
        const obj = Object.values(values);
        setComment(obj.reverse());
        
      })
  }
  return (
    <View style={styComment.container}>
      <View style={styComment.contens}>
        <Text style={styComment.textName}>{route.params.name}</Text>
        <Text style={styComment.conten}>{route.params.content}</Text>
      </View>
      <View style={styComment.comment}>
        <FlatList 
        data={comment}
        renderItem={({item})=><Item
        item={item}
        />
      }
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
    </View>
  );
}
