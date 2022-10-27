
import { View, Text, Button,TextInput,StyleSheet } from 'react-native';
import React from 'react'

const Login = (props) => {
    console.log(props)
    function goTo()
  {
    console.log(props)
   props.navigation.navigate("Main")
  }
  return (
    <View style={styles.con}>
      {/* <Text style={styles.txt}>Login</Text> */}
      <TextInput style={[styles.input,styles.in2]}  placeholder='enter your name'/>
      <TextInput style={[styles.input,styles.in2]}  placeholder='enter your password'/>
      <Button title='login' onPress={goTo}></Button>

    </View>
  )
}
const styles = StyleSheet.create({
    con:
    {
        margin:20,
        backgroundColor:"white"
    },
    txt:
    {
        fontSize:30,
        color:"blue",

    },
    input:
    {
      borderWidth:3,
      borderColor:"blue",
      borderRadius:15,
      padding:10,
      marginVertical:20,
    },
    in2:{
      backgroundColor:'white'
    }

})

export default Login