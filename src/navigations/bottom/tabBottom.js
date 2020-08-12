import React from 'react';
import {
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import {Home, Friend, Profile} from '../../screens';

const TabBottomMater = createMaterialBottomTabNavigator ();

export default function TabBottom () {
  return (
    <TabBottomMater.Navigator>
      <TabBottomMater.Screen name="home" component={Home} />
      <TabBottomMater.Screen name="friend" component={Friend} />
      <TabBottomMater.Screen name="profile" component={Profile} />
    </TabBottomMater.Navigator>
  );
}
