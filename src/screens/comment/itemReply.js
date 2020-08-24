import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ItemReply({item}) {
  return (
    <View style={styltItemReply.Container}>
      <Text style={styltItemReply.texrName}>{item.user}</Text>
      <Text style={styltItemReply.textComment}>{item.text}</Text>
    </View>
  );
}
const styltItemReply = StyleSheet.create ({
  Container: {
    borderRadius: 20,
    backgroundColor: '#c8d5b9',
    margin: 32,
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
