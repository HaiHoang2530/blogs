import React from 'react';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import {Home, Friend, Profile} from '../../screens';
import {useRoute} from '@react-navigation/native';
const TabBottomMater = createMaterialBottomTabNavigator ();

export default function TabBottom () {
  const route = useRoute ();
  const userName = route.params;
  console.log('rrrr:'+ userName);
  return (
    <TabBottomMater.Navigator
    initialRouteName="home"
    >
      <TabBottomMater.Screen name="home" component={Home} initialParams={{userName:userName}} />
      <TabBottomMater.Screen name="friend" component={Friend} />
      <TabBottomMater.Screen name="profile" component={Profile} />
    </TabBottomMater.Navigator>
  );
}
