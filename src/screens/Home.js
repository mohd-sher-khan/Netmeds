import React from "react"
import { Image, ScrollView, Text, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home =()=>{
    
    return(
        <>
        <View>
        <View style={{flexDirection:'row',marginVertical:10,marginLeft:20}}>
        <Text><MaterialIcons name="location-pin" size={25} color="grey"/></Text>
            <Text style={{color:"grey"}}>  Deliver to: 250002</Text>
        </View>

        <View style={{backgroundColor:"#fff",}}>
        <View style={{marginTop:15,marginLeft:20}}>
        <Text style={{fontSize:17,fontWeight:"bold",}}>Netmeds Updates</Text>
        <Text style={{fontSize:12,width:330,color:'grey'}}>simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book.</Text>
        </View>
        <View style={{marginTop:30,}}>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={{marginRight:10,marginLeft:10}}>
                    <Image 
                        source={require("../assests/img/scr1.jpg")}
                        style={{height:140,width:280,borderRadius:10}}
                        
                    />
                </View>

                <View style={{marginRight:10}}>
                    <Image 
                        source={require("../assests/img/scr2.jpg")}
                        style={{height:140,width:280,borderRadius:10}}
                    />
                </View>

                <View style={{marginRight:10}}>
                    <Image 
                        source={require("../assests/img/scr3.jpg")}
                        style={{height:140,width:280,borderRadius:10}}
                    />
                </View>

                <View style={{marginRight:10}}>
                    <Image 
                        source={require("../assests/img/scr4.jpg")}
                        style={{height:140,width:280,borderRadius:10}}
                    />
                </View>

                <View style={{marginRight:10}}>
                    <Image 
                        source={require("../assests/img/scr5.jpg")}
                        style={{height:140,width:280,borderRadius:10}}
                    />
                </View>
            </ScrollView>
        </View>


        <View style={{marginTop:20,flexDirection:"row"}}>
        <View style={{marginLeft:10}}>
                    <Image 
                        source={require("../assests/img/sub1.jpg")}
                        style={{height:95,width:107,borderRadius:5}}
                        
                    />
                </View>
                <View style={{marginRight:10,marginLeft:10}}>
                    <Image 
                        source={require("../assests/img/sub2.jpg")}
                        style={{height:95,width:107,borderRadius:5}}
                        
                    />
                </View>
                <View style={{marginRight:10,}}>
                    <Image 
                        source={require("../assests/img/sub3.jpg")}
                        style={{height:95,width:107,borderRadius:5}}
                        
                    />
                </View>
        </View>
        </View>


        </View>
        </>
    )
}

export default Home;