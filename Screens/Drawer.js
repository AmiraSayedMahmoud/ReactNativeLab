import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import CartScreen from './CartScreen';
import NotificationsScreen from './NotificationsScreen';


const Drawer = () => {
    const Drawer = createDrawerNavigator();
  return (
 
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    <Drawer.Screen name="Product" component={ProductScreen}/>
    <Drawer.Screen name="Cart" component={CartScreen}/>
  </Drawer.Navigator>

  )
}

export default Drawer