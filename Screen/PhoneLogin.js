import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native'
import React from 'react'
import{ useState } from "react";


// import { auth } from "../firebase";
// import { auth } from "firebase/app";
// import auth  from '@react-native-firebase/auth';
// import { auth } from '../firebase';
import auth from '@react-native-firebase/auth';
// import Otp from './Otp';
// import "firebase/auth";
// console.log(auth);
// import "firebase/auth";

// import { TouchableOpacity } from 'react-native-web'



export default function PhoneLogin() {
    const [confirm, setConfirm] = useState(null);
    console.log('confirm : ', confirm)
    
    const  signInWithPhoneNumber = async(phoneNumber)=> {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
      }
    



  return (
    <View>
    {confirm ? (<Otp/>) : (
        <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    )}
    </View>
  )
}

const styles = StyleSheet.create({})