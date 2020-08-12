import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Item ({item}) {
  return (
    <View style={styleItem.container}>
      <View style={styleItem.view1}>
  <Text style={styleItem.textname}>{item.name}</Text>
      </View>
      <View style={styleItem.view2}>
        <Text style={styleItem.touchab}>{item.content}</Text>
      </View>
      <TouchableOpacity style={styleItem.buttonTT}>
          <Text style={styleItem.textTT}>Comment</Text>
        </TouchableOpacity>

    </View>
  );
}
const styleItem = StyleSheet.create ({
  container: {
    height: 200,
    margin: 8,
    justifyContent:'flex-end'
  },
  view1:{
      flex:1,
      backgroundColor:"#808080",
      justifyContent:'center',
      alignItems:'center',
      borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  view2:{
      flex:4,
      backgroundColor:'#01D475'
  },
  textname: {
    height: 40,
    fontSize: 30,
  },
  buttonTT: {
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textTT:{
      fontSize:20,

  }
});
