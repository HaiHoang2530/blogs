import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {styleSignUp} from './css';

import {Firebase} from '../../firebase';
export default function SingUp({navigation}) {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [refPassword, setRefPassword] = useState ('');

  const HanldeSigUp = () => {
    if (name === '' || email === '' || password === '' || refPassword === '') {
      alert ('vui long nhap Thong tin!');
    } else if (password.length < 6) {
      alert ('mat khau phai lon hon 6 ky tu');
    } else if (password != refPassword) {
      alert ('refPassword sai vui long nhap lai');
    } else {
      Firebase.auth ()
        .createUserWithEmailAndPassword (email, password)
        .then (userData => {
          userData.user.updateProfile ({displayName: name});
          setName ('');
          setEmail ('');
          setPassword ('');
          setRefPassword ('');
          navigation.navigate ('login');
        })
        .catch (function (error) {
          alert ('Tai khoan da dung dang ky!');
        });
    }
  };
  return (
    <KeyboardAvoidingView
      style={styleSignUp.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styleSignUp.inner}>
          <View style={styleSignUp.viewImag}>
            <Image
              style={styleSignUp.image}
              source={require ('../../assets/images/logo.png')}
            />
          </View>
          <View style={styleSignUp.viewForm}>
            <TextInput
              placeholder="name"
              style={styleSignUp.textInput}
              placeholderTextColor="#808080"
              value={name}
              onChangeText={text => setName (text)}
            />
            <TextInput
              placeholder="email"
              style={styleSignUp.textInput}
              placeholderTextColor="#808080"
              value={email}
              onChangeText={text => setEmail (text)}
            />
            <TextInput
              placeholder="password"
              style={styleSignUp.textInput}
              maxLength={15}
              placeholderTextColor="#808080"
              value={password}
              onChangeText={text => setPassword (text)}
              secureTextEntry={true}
            />
            <TextInput
              placeholder="refPassword"
              style={styleSignUp.textInput}
              maxLength={15}
              placeholderTextColor="#808080"
              value={refPassword}
              onChangeText={text => setRefPassword (text)}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styleSignUp.touchOpacity}
              onPress={() => HanldeSigUp ()}
            >
              <Text>Create An Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
