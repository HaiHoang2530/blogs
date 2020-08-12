import React,{useState} from 'react';
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
import {styleLogin} from './css';
import {Firebase} from '../../firebase'
export default function Login({navigation}) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const HandleLogin = () =>{
   if(email.trim()==""&& password.trim()==""){
    alert('vui long nhap email!');
   }else{
    Firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>navigation.navigate('tabbottom',email))
    .catch(err =>console.log(err))
   }
  }
  return (
    <KeyboardAvoidingView
      style={styleLogin.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styleLogin.inner}>
          <View style={styleLogin.viewImag}>
            <Image
              style={styleLogin.image}
              source={require ('../../assets/images/logo.png')}
            />
          </View>
          <View style={styleLogin.viewForm}>
            <TextInput
              placeholder="email"
              style={styleLogin.textInput}
              placeholderTextColor="#808080"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              placeholder="password"
              style={styleLogin.textInput}
              maxLength={15}
              placeholderTextColor="#808080"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              style={styleLogin.touchOpacity}
              onPress={() => HandleLogin()}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
