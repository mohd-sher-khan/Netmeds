import { useNavigation } from "@react-navigation/core";
import React,{useState,useRef} from "react"
import { Text, TextInput, View,TouchableOpacity,Image} from "react-native"
import PhoneInput from "react-native-phone-number-input"; 
import AntDesign from 'react-native-vector-icons/AntDesign';  

const Login =()=>{
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
   
    const nav=useNavigation();

    return(
        <>
        <View>
        <View style={{alignSelf:"flex-end",margin:10}}>
            <Text>SKIP</Text>
        </View>
        <View style={{marginLeft:20}}>
            <Text style={{fontSize:22,fontWeight:"bold"}}>Sign in / Sign up</Text>
            <Text style={{marginTop:15,color:"#736265",width:270}}>Sign up or Sign in to access your orders,special offers,health tips and more!</Text>
        </View>

        <View style={{marginTop:30}}>
        <Text style={{marginLeft:20,marginBottom:10,color:"#12BFC2",fontWeight:"bold",fontSize:13}}>MOBILE NUMBER</Text>
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="second"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={{
              height:40,
              width:"90%",
              alignSelf:"center",
              backgroundColor:"#f6f6f6",
            }}
            textContainerStyle={{
              borderColor: "black",
              height:40,
              paddingTop:0,
             borderLeftWidth:2,
             borderBottomWidth:0.3,
            }}
            textInputStyle={{padding:0,}}
            withDarkTheme
          />
        </View>
            <View style={{width:"90%",alignSelf:"center",marginTop:50,}}>
                <Text 
                style={{backgroundColor:"#12BFC2",textAlign:"center",padding:15,borderRadius:5,fontWeight:"bold",color:"white",fontSize:15}}
                onPress={()=>nav.navigate("Home")}
                >USE OTP</Text>
            </View>
            <View style={{marginTop:30,alignSelf:"center"}}>
                <Text style={{color:"grey",}}>-- OR --</Text>
            </View>

            <View style={{width:"90%",alignSelf:"center",marginTop:30,borderWidth:1,borderColor:"#12BFC2"}}>
                <Text style={{backgroundColor:"white",textAlign:"center",padding:15,color:"#12BFC2",fontSize:15}}
                onPress={()=>nav.navigate("Home")}
                >USE PASSWORD</Text>
            </View>

            <View>
                
            <TouchableOpacity >
          <View style={{alignSelf:"center",flexDirection:"row",marginTop:20,backgroundColor:"#ebeef4",borderWidth:1,width:320,borderRadius:10,paddingLeft:60,padding:11,borderColor:"white"}}>
          <Image 
            source={require('../assests/img/google1.png')}
            style={{width:22,height:22,marginTop:5}}/>
          <Text style={{marginTop:5,color:"#14466b"}}> Continue with Google</Text>
       </View>
       </TouchableOpacity>
          
          <TouchableOpacity >
          <View style={{alignSelf:"center",flexDirection:"row",marginTop:20,backgroundColor:"#ebeef4",borderWidth:1,width:320,borderRadius:10,paddingLeft:60,padding:11,borderColor:"white"}}>
          <Image 
            source={require('../assests/img/facebook.png')}
            style={{width:22,height:22,marginTop:5}}/>
          <Text style={{marginTop:5,color:"#14466b"}}> Continue with Facebook</Text>
       </View>
       </TouchableOpacity>

            </View>



        </View>
        </>
    )
}

export default Login;