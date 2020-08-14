import React from 'react';
import {WelCome, Login, SignUp, Content,Comment} from '../../screens';
import {createStackNavigator} from '@react-navigation/stack';
import TabBottomMater from '../bottom/tabBottom';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const TabStack = createStackNavigator ();

export default function TabStackNavigation () {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="welcome"
        component={WelCome}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="sign"
        component={SignUp}
        options={{headerShown: false}}
      />
      <TabStack.Screen
        name="tabbottom"
        component={TabBottomMater}
        options={{
          header: ({scene, navigation}) => {
            return (
              <View style={styHeader.header}>
                <Image
                  source={require ('../../assets/images/person.png')}
                  style={styHeader.image}
                />
                <Text style={styHeader.text}>{scene.route.params}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate ('content',scene.route.params);
                  }}
                >
                  <Image
                    source={require ('../../assets/images/push.png')}
                    style={styHeader.push}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <TabStack.Screen name="content" component={Content} />
      <TabStack.Screen name="comment" component={Comment} />
    </TabStack.Navigator>
  );
}

const styHeader = StyleSheet.create ({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#050405',
    color: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  text: {
    color: '#ffffff',
    marginLeft: 10,
    width:200,
  },
  push: {
    marginLeft: 80,
  },
});
