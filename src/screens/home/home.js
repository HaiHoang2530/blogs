import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Modal} from 'react-native';
import Item from './item';
import {Firebase} from '../../firebase';
export default function Home({navigation}) {
  const [list, setList] = useState ();
  const [modal, setModal] = useState (false);
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
        navigation.navigate ('comment', values);
      });
  };
  const HandleModal = () => {
    setTimeout (() => {
      setModal (true);
    }, 1000);
  };
  return (
    <View style={styleHome.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Item
            item={item}
            HandleComment={HandleComment}
            HandleModal={HandleModal}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Modal visible={modal}>
        <Text onPress={() => setModal (false)}>next</Text>

      </Modal>
    </View>
  );
}
const styleHome = StyleSheet.create ({
  container: {
    flex: 1,
  },
  modal: {
    margin: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
