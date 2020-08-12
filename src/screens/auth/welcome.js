import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {StyleWelCome} from './css';
export default function Welcome({navigation}) {
  return (
    <View style={StyleWelCome.container}>
      <View style={StyleWelCome.viewImg}>
        <Image
          style={StyleWelCome.image}
          source={require ('../../assets/images/logo.png')}
        />
      </View>
      <View style={StyleWelCome.viewButton}>
        <TouchableHighlight
          style={StyleWelCome.touchableTT}
          underlayColor="#808080"
          activeOpacity={0.5}
          onPress={() => navigation.navigate ('login')}
        >
          <Text>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={StyleWelCome.touchableTT}
          underlayColor="#808080"
          activeOpacity={0.5}
          onPress={() => navigation.navigate ('sign')}
        >
          <Text>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
