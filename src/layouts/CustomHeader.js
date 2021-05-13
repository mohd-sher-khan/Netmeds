import React from "react"
import { Text, View,Image, TextInput } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomHeader =()=>{
    return(
        <>
        <View style={{backgroundColor:"#21D8DC",height:100}}>
        <View style={{flexDirection:"row",}}>
        <View style={{marginTop:20,marginLeft:20}}>
            <Image source={require("../assests/img/logo.png")}
                style={{height:20,width:130,borderRadius:10,}}
            />
        </View>
        <View style={{alignSelf:"flex-end",flexDirection:"row",marginLeft:80}}>
        <Text style={{marginRight:25}}><MaterialIcons name="local-offer" size={23} color="#fff"/></Text>
            <Text style={{marginRight:25}}><AntDesign name="shoppingcart" size={23} color="#fff" /></Text>
            <Text style={{marginRight:25}}><Ionicons name="notifications-outline" size={23} color="#fff"/></Text>
        </View>
        </View>

        <View style={{marginTop:18,flexDirection:"row"}}>
        <TextInput 
        placeholder="Search for medicine & health products..."
        style={{backgroundColor:"white",height:35,borderRadius:10,paddingLeft:15,width:"95%",marginHorizontal:10}}/>
           <Text style={{left:-40,marginTop:8,}}><AntDesign name="search1" size={17} color="grey"/></Text>
        </View>

        </View>
        </>
    )
}

export default CustomHeader;