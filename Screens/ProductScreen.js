import { View, Text, Image,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addCart } from '../Redux/Slices/CartSlice';


const Product = (props) => {
  const dispatch=useDispatch();
  const [products,setProducts]=useState([]);
  useEffect(()=>
  {

    axios.get("https://dummyjson.com/products").then((res)=>
    {
      console.log(res);

      setProducts(res.data.products.slice(0,50));
    })
  },[])
  async function add(item)
  {
    // var arr=await AsyncStorage.getItem("cart");
    // if(!arr)
    // {
    //   var arr=[];
    //   arr.push(item);
    //   await AsyncStorage.setItem("cart",JSON.stringify(arr));
    // }
    // else
    // {
    //   arr=JSON.parse(arr);
    //   arr.push(item);
    //   await AsyncStorage.setItem("cart",JSON.stringify(arr));
    //   }
    dispatch(addCart({...item,qunatity:1}));
    }
  return (
    <View style={styles.container}>

    <FlatList
    numColumns={2}
    data={products}
    keyExtractor={(item,index)=>index}
    renderItem={({item})=><View style={styles.card}>
      
      <TouchableOpacity onPress={()=>props.navigation.navigate("Details",{item})}>
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
        <Text style={{fontSize:25,fontWeight:"bold",color:"#330033"}}>{item.price}</Text>
        <TouchableOpacity onPress={()=>add(item)}><Ionicons name="heart-outline" color="red" size={30}/></TouchableOpacity>
        </View>
      </TouchableOpacity>
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
export default Product