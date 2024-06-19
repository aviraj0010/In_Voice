import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { Touchable } from 'react-native'
import WebView from 'react-native-webview';
import BackAni from '../assets/bg_ani1'





export default function Home({navigation}) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("HoldOn","Exit App?",[
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {text: "OK", onPress: () => BackHandler.exitApp()}
      ]);
      return true;
    };
    
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  },[]);
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => backHandler.remove()
  // }, [])

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
  //     // You don't need to return anything or return false to enable the default back button behavior
  //   });

  //   return () => {
  //     // Remove the event listener when the component is unmounted
  //     backHandler.remove();
  //   };
  // }, []);
  return (
    
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={styles.text}>Home</Text> */}
      {/* <Image style={styles.img} source={require('../assets/logo.png')}/> */}
      

      <View style={styles.txtmain}>
        <Text style={styles.txt_h1}>In<Text style={{
          color:'#5C6BC0',
          letterSpacing:0.374,
          fontWeight:'400'
        }}>Voice</Text></Text>
      </View>
      {/* <Image style={styles.img_bg} source={require('../assets/bg.png')}/> */}
      <BackAni/>
      


      <Text style={styles.txt_hero}>Generate Your Invoice{"\n"}<Text style={{
        color:'#5C6BC0',
          letterSpacing:0.374,
          fontWeight:'800'
      }}>In One Click</Text></Text>

      <View style={{paddingTop: 75}}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Create')}
      style={styles.btn}>
        <Text
        style={{
            color:'#fff',
        }}>Create Invoice</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity 
      onPress={() => navigation.navigate('Login')}
      style={styles.btn}>
        <Text
        style={{
            color:'#fff',
        }}>Login</Text>
      </TouchableOpacity> */}
      </View>
      </ScrollView>

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff",
        paddingTop: 90,
    },
    text: {
        color:'#fff',
        fontSize: 40,
    },
    img: {
        height: 100,
        width: 100,

    },
    btn: {
      display: 'flex',
        backgroundColor: '#007AFF',
        height: 44,
        width: 311,
        paddingLeft: 16,
        paddingRight: 32,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
        borderRadius: 25,
        flexShrink: 0,
    },
    txtmain:{
      flex: 1,
height: 59,
justifyContent: 'center',
alignItems: 'center',
letterSpacing:0.374,
// flex-shrink: 0,
// align-self: stretch,
flexShrink: 0,
alignSelf: 'stretch'
    },
    txt_h1: {
      // color: 'var(--label-color-light-primary, #000)',
textAlign: 'center',
// font-family: 'Inter',
// font-size: 34,
// font-style: 'normal',
// font-weight: 800,
fontWeight: '800',
fontSize: 34,
lineHeight: 41, /* 120.588% */
letterSpacing: 0.374,

// fontSize: 34,
    },
    img_bg:{
      width: 300,
      height: 300,
      flexShrink: 0,
    },
    txt_hero:{
      textAlign:'center',
      fontWeight:'800',
      fontSize: 25,
      paddingTop: 25,
    },
})