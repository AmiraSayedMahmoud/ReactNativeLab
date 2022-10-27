import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/LoginScreen';
import Product from './Screens/ProductScreen';
import Drawer from './Screens/Drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  // const Drawer = createDrawerNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Drawer}/>
        <Stack.Screen name="Details" component={ProductDetailsScreen} />
      </Stack.Navigator>
   </NavigationContainer>
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
