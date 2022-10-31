import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/LoginScreen';
import Product from './Screens/ProductScreen';
import Drawer from './Screens/Drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import { counterContext } from './Config/CounterContext';
import { useState } from 'react';
  import { store } from './Redux/Store';
import {Provider} from 'react-redux'

export default function App() {
  const [count,setCount]=useState(0);
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
  <counterContext.Provider value={{count,setCount}}>
   <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Drawer}/>
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
      </Stack.Navigator>
   </NavigationContainer>
   </counterContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
