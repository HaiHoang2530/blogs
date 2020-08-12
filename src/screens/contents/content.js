import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Firebase} from '../../firebase';

export default function Content ({navigation}) {
  const route = useRoute ();
  const [content, setContent] = useState ('');
  const name = route.params;

  const AddContent = () => {
    if (content.trim () === '') {
      alert ('vui long nhap content');
    } else {
      Firebase.database ()
        .ref ('Contentss')
        .push ({
          name: name,
          content: content,
        })
        .catch (err => console.log (err));
    }
    navigation.navigate('tabbottom');
    setContent ('');
  };
  return (
    <View style={styContent.container}>
      <View style={styContent.form}>
        <View style={styContent.viewImage}>
          <Image
            source={require ('../../assets/images/person.png')}
            style={styContent.image}
          />
          <Text style={{color: '#01D475'}}>{route.params}</Text>
        </View>
        <View style={styContent.viewTT}>
          <View style={{flex: 1}}>
            <TextInput
              style={styContent.textInputC}
              numberOfLines={12}
              placeholder="content"
              placeholderTextColor="#808080"
              multiline={true}
              textAlignVertical="top"
              value={content}
              onChangeText={text => setContent (text)}
            />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styContent.touch}
              onPress={() => AddContent ()}
            >
              <Text style={styContent.text}>add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
}
const styContent = StyleSheet.create ({
  form: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#808080',
    margin: 32,
  },
  image: {
    height: 100,
    width: 100,
  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTT: {
    flex: 2,
    margin: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#050405',
  },
  textInputC: {
    borderWidth: 1,
    borderColor: '#808080',
    color: '#fff',
  },
  touch: {
    height: 30,
    backgroundColor: '#01D475',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  text: {
    color: '#fff',
  },
});
