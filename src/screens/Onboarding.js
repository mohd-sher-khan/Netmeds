
import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
  } from 'react-native';
  import AppIntroSlider from 'react-native-app-intro-slider';
  import { useNavigation } from '@react-navigation/native';

  const slides = [
    {
      key: 's1',
      title: 'Online Medicine',
      text:"Buy Medicines Online – Doorstep Delivery",
      text2: ' online pharmacy to deliver to any location in India',
      image: {
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
      },
      backgroundColor: '#22bcb5',
      Text1:"LET'S GET STARTED"
    },
    {
      key: 's2',
      title: 'Best Doctor',
      text:"Consult Best Doctors Online 24x7 ",
      text2: ' Chat with top specialist doctors online across India anywhere',
      image: {
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
      },
      backgroundColor: 'orange',
      Text1:"LET'S GET STARTED"
    },
    {
      key: 's3',
      title: 'Lab Testing',
      text:"Book Lab Tests Online",
      text2: 'full body health checkup/packages',
      image: {
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
      },
      backgroundColor: '#f6437b',
      Text1:"LET'S GET STARTED"
      
    },
    
  
  ];

const Onboarding =()=>{
    const [showRealApp, setShowRealApp] = useState(false);
 const nav = useNavigation()

    const onDone = () => {
      setShowRealApp(true);
    };
    const onSkip = () => {
      setShowRealApp(true);
    };
 
  
    const RenderItem = ({item}) => {
      return (
          <>
      
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'space-around',
          
          }}>
          <Text style={styles.introTitleStyle}>
            {item.title}
          </Text>
          <Image
            style={styles.introImageStyle}
            source={item.image} />
           <Text style={styles.introTextStyle1}>
            {item.text}
          </Text>  
          <Text style={styles.introTextStyle}>
            {item.text2}
          </Text>
          <Text style={styles.Button}
          onPress={()=>nav.navigate("Login")}
          >{item.Text1}</Text>
        </View>
      </>
      );
    };
  
    return (
      <>

          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            showNextButton={false}
            showSkipButton={false}
            showDoneButton={false}
            onNext={onSkip}
            bottomButton
          />
      
      </>
    );
  };
  
  export default Onboarding;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: 200,
      height: 200,
    },
    introTextStyle1: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight:"bold",
        
      },
    introTextStyle: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      marginTop:-40
    },
    introTitleStyle: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
    Button:{
        fontSize:20,
        color:"white",
        backgroundColor:"green",
        padding:10,
        borderRadius:5,
        marginBottom:50
    }
  });
  
 

