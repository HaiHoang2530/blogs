import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Item from './item';
import {Firebase} from '../../firebase';

export default function Home () {
  const [list, setList] = useState ();
  useEffect (() => {
     GetListContent ();
  },[]);
  const GetListContent = () => {
    Firebase.database ().ref ('Contentss').on ('value', result => {
      const list = result.val ();
      const items = Object.values (list);
      console.log ('item:' + JSON.stringify (items));
      setList (items.reverse());
    });
  };
  return <FlatList 
  data={list}
  renderItem={({item})=><Item
  item={item}
  />}
  keyExtractor={(item)=>item.id}
  />;
}
const styleHome = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
