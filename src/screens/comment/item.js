import React from 'react';
import Color from '../../theme/color';
import {View, Text, StyleSheet} from 'react-native';

export default function Item({item}) {
  return (
    <View style={styleItem.container}>
      <Text style={styleItem.texrName}>{item.user}</Text>
      <Text style={styleItem.textComment}>{item.comment}</Text>
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
});
