import { View, Text,Image, FlatList } from 'react-native'
import React,{useState} from 'react'

export default function ProductDetailsScreen(props) {
    const [prdDetails,setPrdDetails]=useState(props.route.params.item);
  return (
    
    <View>
    <View style={{width:'100%',height:200,marginTop:20}}>
        <Image source={{uri:prdDetails.thumbnail}} style={{width:'100%',height:200,borderRadius:10,position:'relative',top:0}}/>
        </View>
    <Text style={{fontSize:40,color:'#330033',marginTop:20}}>{JSON.stringify(prdDetails.brand)}</Text>
    <Text style={{fontSize:20,color:'#330033',marginTop:5}}>{JSON.stringify(prdDetails.title)}</Text>
    <Text style={{fontSize:15,color:'#330033',marginTop:5}}>{JSON.stringify(prdDetails.description)}</Text>
    <Text style={{fontSize:30,color:'red',marginTop:5,marginLeft:0}}><Text style={{fontWeight:'bold'}}>Price: </Text>{JSON.stringify(prdDetails.price)}</Text>
    <Text style={{fontSize:30,color:'red',marginTop:5}}><Text style={{fontWeight:'bold'}}>Dicount: </Text>{JSON.stringify(prdDetails.discountPercentage)}</Text>
    <Text style={{fontSize:20,color:'#330033',marginTop:5,marginStart:0}}><Text style={{fontWeight:'bold'}}>Rate: </Text>{JSON.stringify(prdDetails.rating)}</Text>
   
   
  </View>

  )
}