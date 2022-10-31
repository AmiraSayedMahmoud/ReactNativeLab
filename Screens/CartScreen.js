import { View, Text,Image,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateCart} from '../Redux/Slices/CartSlice'

const Cart = () => {
  // const[cart,setCart]=useState([]);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
// useEffect(()=>{
  
//     getStorage()
// },[])

    async function getStorage()
    {
        
         var arr=await AsyncStorage.getItem("cart");
         console.log(arr);
         arr=JSON.parse(arr);

        setCart([...arr]);
    }
  function Increment(index){
    // const indexed = cart.findIndex((x) => x.id === item.id)

    // cart[indexed].stock = cart[indexed].stock + 1
    
    // console.log(cart[indexed].stock )
    // setCart([...cart])
    dispatch(updateCart(index));

    }
    // function Decrement(item){
    //   const indexed = cart.findIndex((x) => x.id === item.id)
  
    //   cart[indexed].stock = cart[indexed].stock - 1
      
    //   console.log(cart[indexed].stock )
    //   setCart([...cart])
  
    //   }
  return (
    <View style={styles.container}>

    <FlatList
    numColumns={2}
    data={cart}
  
    renderItem={({item,index})=><View style={styles.card}>
      
     
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'column',alignContent:'space-around',width:'50%',height:130}}>
      <Text style={{fontSize:20,color:'#330033',marginTop:10}}>{item.brand}</Text>
      <Text style={{fontSize:15,color:'#330033',marginTop:10}}>{item.title}</Text>
      </View>
      <View style={{width:'40%',height:130}}>
        <Image source={{uri:item.thumbnail}} style={{width:'100%',height:130,borderRadius:10,position:'relative',top:0}}/>
        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-around",alignItems:'center',height:70}}>
        <TouchableOpacity onPress={()=>Increment(index)}><Ionicons name="heart-sharp" color="red" size={30}/></TouchableOpacity>
        {/* <Text style={{fontSize:25,fontWeight:"bold",color:"#330033"}}>{item.stock}</Text>
        <TouchableOpacity onPress={()=>Decrement(item)}><Ionicons name="ios-remove-circle-outline" color="#330033" size={30}/></TouchableOpacity> */}
        </View>
     
    </View>}
    />
  
  </View>
  )
}
const styles = StyleSheet.create({
  container:
  {
      backgroundColor:'white',
     flex:1,
     alignItems:"center"
     
  },
  card:
  { 
    width:175,
    height:200,
    backgroundColor:'#ffccff',
    margin:5,
    marginVertical:25,
    borderRadius:30
  },

})

export default Cart