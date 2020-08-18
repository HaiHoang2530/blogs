import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Item from './item';
import {Firebase} from '../../firebase';
export default function Home({navigation}) {
  const [list, setList] = useState ();
  useEffect (
    () => {
      GetListContent ();
    },
    [list]
  );
  const GetListContent = () => {
    Firebase.database ()
      .ref ('Contentss')
      .child ('Post')
      .once ('value', value => {
        const values = value.val ();
        const objects = Object.values (values);
        setList (objects.reverse ());
      });
  };
  const HandleComment = itemId => {
    Firebase.database ()
      .ref ('Contentss')
      .child (`Post/${itemId}`)
      .once ('value', value => {
        const values = value.val ();
        console.log(values)
        navigation.navigate ('comment', values);
      });
  };
  return (
    <FlatList
      data={list}
      renderItem={({item}) => (
        <Item item={item} HandleComment={HandleComment} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
const styleHome = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
