import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const navigation = useNavigation()
    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    },[])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:',user.email);
        })
        .catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <Image style={styles.login_bg} source={require('../assets/login_bg1.png')}/>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={'#F58D1D'}
          value={email}
          onChangeText={text => SetEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#F58D1D'}
          value={password}
          onChangeText={text => SetPassword(text) }
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleLogin}
         style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <PhoneLogin/>
      </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: '80%',
  },
  input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,

  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 40,
  },
  button: {
    backgroundColor:'#F58D1D',
    width:'100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: '#fff',
    marginTop: 5,
    borderColor:'#F58D1D',
    borderWidth:2,
  },
  buttonOutlineText: {
    color:'#F58D1D',
    fontWeight:'800',
    fontSize:16
  },
  buttonText:{
    color:'#fff',
    fontWeight:'800',
    fontSize:16
  },
  login_bg:{
    width: 300,
      height: 300,
      flexShrink: 0,
  }
});
