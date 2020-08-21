import React, {useEffect, useState} from 'react';
import Color from '../../theme/color';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

export default function Item({item, HandleReply, HandleLike,showReply}) {
  const data = [
    {
      name: 'haiahiashdisa',
      age: 12,
    },
    {
      name: 'haiaiashdisa',
      age: 1,
    },
    {
      name: 'haiahhdisa',
      age: 11,
    },
    {
      name: 'haiahhdisa',
      age: 11,
    },
    {
      name: 'haiahhdisa',
      age: 11,
    },
  ];
  const [show, setShow] = useState (false);
  return (
    <View style={styleItem.container}>
      <Text style={styleItem.texrName}>{item.user}</Text>
      <Text style={styleItem.textComment}>{item.comment}</Text>
      <View style={styleItem.viewRepli}>
        <TouchableOpacity
          style={styleItem.touchableReply}
          onPress={() => HandleLike (item.keyID)}
        >
          <Image
            source={require ('../../assets/images/like.png')}
            style={{height: 24, width: 24}}
          />
          <Text>{item.like} like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleItem.touchableReply}
          onPress={() => HandleReply (item.keyID)}
        >
          <Image
            source={require ('../../assets/images/topic.png')}
            style={{height: 24, width: 24}}
          />
          <Text> reply</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{height: 40, width: 40}}
        onPress={() => {
          if (show != true) {
            setShow (true);
          } else {
            setShow (false);
          }
        }}
      >
        <Text style={{fontSize: 20,color:"blue"}}>xem</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          showsVerticalScrollIndicator={show}
          data={showReply}
          renderItem={({item}) => {
            if (show) {
              return (
                <View style={styleItem.xem}>
                  <Text style={styleItem.texrName}>{item.user}</Text>
                  <Text style={styleItem.textComment}>{item.text}</Text>
                </View>
              );
            } else {
            }
          }}
        />
      </View>
    </View>
  );
}
const styleItem = StyleSheet.create ({
  container: {
    borderRadius: 20,
    backgroundColor: '#c8d5b9',
    margin: 8,
    paddingLeft: 20,
    paddingTop: 5,
  },
  texrName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textComment: {
    fontSize: 20,
  },
  viewRepli: {
    flexDirection: 'row',
  },
  touchableReply: {
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  xem:{
    borderRadius: 20,
    backgroundColor: '#808080',
    margin: 8,
    paddingLeft: 20,
    paddingTop: 5,
  }
});
