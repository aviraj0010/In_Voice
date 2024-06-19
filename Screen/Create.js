import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert, TouchableOpacity, BackHandler } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
// import React, { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import dateFormat from 'dateformat';
import { PdfCode } from './PdfCode';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function Create() {

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("HoldOn","Exit App?",[
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         {text: "OK", onPress: () => BackHandler.exitApp()}
    //       ]);
    //       return true;
    //     };
        
    //     const backHandler = BackHandler.removeEventListener(
    //       "hardwareBackPress",
    //     //   backAction
    //     );
    //     return () => backHandler.remove();
    //   },[]);

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => false)
    //     return () => backHandler.remove()
    //   }, [])

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //       // Return true to disable the default back button behavior
    //       return true;
    //     });
    
    //     return () => {
    //       // Remove the event listener when the component is unmounted
    //       backHandler.remove();
    //     };
    //   }, []);

    

      


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [Product, setProduct] = useState("T-Shirt");
    const [Qunatity, setQunatity] = useState("");
    const now = new Date();
    const [Invoice, setInvoice] = useState(dateFormat(now,"ddmmyyhhMss"));
    const [Total, setTotal] = useState("");
    const [RecieveBalance, setRecieveBalance] = useState("");
    const [PaymentType, setPaymentType] = useState('Credit');
    const [RemainingBalance, setRemainingBalance] = useState('Paid');
    const [selectedPrinter, setselectedPrinter] = useState("");

    const PrintToPdf = async () =>{
        let html = PdfCode(name,
            address,
            mobile,
            Qunatity,
            Invoice,
            Product,
            Total,
            RecieveBalance,
            PaymentType,
            RemainingBalance);

            try {
                const {uri} = await Print.printToFileAsync({html});
                console.log("File Saved to",uri);
                await shareAsync(uri,{UTI: '.pdf',
                mimeType: 'application/pdf'});

            set_Name('');
            setInvoice(dateFormat(now, "ddmmyyhhMss"));
            setTotal('');
            setQuantity('');
            SetReceivedBalance('');
            SetAddress('');
            Setmobile('');
            setRemainingBalance('')
            } catch (error) {
                Alert.alert("Something Goes Wrong")
            }

    }
    
    // useEffect = () => {
    //     const backAction= () => {
    //         this.props.navigation.goBack();
    //     }
    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //       );
    //       return () => backHandler.remove();
    // }
    
    // useEffect(() => {
    //     const navigation = useNavigation();
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //       console.log('hardwareBackPress event triggered');
    //       // You don't need to return anything or return false to enable the default back button behavior
    //       navigation.goBack();
    //       return true;
    //     });
      
    //     return () => {
    //       console.log('Component unmounted, removing event listener');
    //       backHandler.remove();
    //     };
    //   }, []);


    // Stop Going Back To Login Screen
    const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Navigate to the previous screen
      navigation.goBack();
      // Return true to prevent the default back button behavior
      return true;
    });

    return () => {
      // Remove the event listener when the component is unmounted
      backHandler.remove();
    };
  }, [navigation]);
  
    return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.InputContainer}>
            <Text>Name</Text>
            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder='Full Name'
                style={styles.textInput}
            />
        </View>

        <View style={styles.InputContainer}>
            <Text>Address</Text>
            <TextInput
                value={address}
                onChangeText={text => setAddress(text)}
                placeholder='Address'
                style={styles.textInput}
            />
        </View>

        <View style={styles.InputContainer}>
            <Text>Mobile No</Text>
            <TextInput
                value={mobile}
                keyboardType="number-pad"
                onChangeText={Number => setMobile(Number)}
                placeholder='Mobile No'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Product</Text>
            <View style={styles.PickerContainer}>
            <Picker
            selectedValue={Product}
            style={styles.Picker}
            onValueChange={(item,index) => 
            setProduct(item)
            }
            >
            <Picker.Item label='T-Shirt' value="T-Shirt"/>
            <Picker.Item label='Shirt' value="Shirt"/>
            <Picker.Item label='Jeans' value="Jeans"/>
            <Picker.Item label='Shirt' value="Shirt"/>
            </Picker>
            </View>
        </View>
        <View style={styles.InputContainer}>
            <Text>Qunatity</Text>
            <TextInput
                value={Qunatity}
                keyboardType="number-pad"
                onChangeText={Number => setQunatity(Number)}
                placeholder='Qunatity'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Invoice</Text>
            <TextInput
                value={Invoice}
                // keyboardType="number-pad"
                onChangeText={Number => setInvoice(Number)}
                placeholder='Invoice No:'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>Total</Text>
            <TextInput
                value={Total}
                keyboardType="number-pad"
                onChangeText={Number => setTotal(Number)}
                placeholder='Total'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>RecieveBalance</Text>
            <TextInput
                value={RecieveBalance}
                keyboardType="number-pad"
                onChangeText={Number => setRecieveBalance(Number)}
                placeholder='RecieveBalance'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>PaymentType</Text>
            <TextInput
                value={PaymentType}
                // keyboardType="number-pad"
                onChangeText={Number => setPaymentType(Number)}
                placeholder='PaymentType'
                style={styles.textInput}
            />
        </View>
        <View style={styles.InputContainer}>
            <Text>RemainingBalance</Text>
            <TextInput
                value={RemainingBalance}
                keyboardType="number-pad"
                onChangeText={Number => setRemainingBalance(Number)}
                placeholder='RemainingBalance'
                style={styles.textInput}
            />
        </View>

        <View style={styles.InputContainer}>
            <Text>Product</Text>
            <View style={styles.PickerContainer}>
            <Picker
            selectedValue={Product}
            style={styles.Picker}
            onValueChange={(item,index) => 
            setProduct(item)
            }
            >
            <Picker.Item label='T-Shirt' value="T-Shirt"/>
            <Picker.Item label='Shirt' value="Shirt"/>
            <Picker.Item label='Jeans' value="Jeans"/>
            <Picker.Item label='Shirt' value="Shirt"/>
            </Picker>
            </View>
        </View>
            {/* <View style={styles.CreateInvoice}>
            <Button
            rounded="true"
            title="Create"
            onPress={PrintToPdf}
            /> */}
            <TouchableOpacity style={styles.CreateInvoice}
            onPress={PrintToPdf}>
                
                <Text style={styles.buttonOutlineText}>Create</Text>
            </TouchableOpacity>
            {/* </View> */}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F3F5F9',
        paddingTop:25,
        paddingBottom: 15
    },
    InputContainer: {
        marginTop: 35,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor:'#fff',
        borderRadius: 10,
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 12,
        elevation: 4,
    },
    textInput: {
        marginTop: 20,
        height: 40,
        // color:'#007AFF',
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 25,
        padding: 4,
        marginBottom: 6,
        paddingLeft: 10,
        fontSize: 15,

    },
    PickerContainer: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 25,
        height: 50
    },
    CreateInvoice:{
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor:'#007AFF',
    width:'90%',
    padding: 15,
    // borderRadius: 10,
    alignItems: 'center',
    marginLeft: 18,
    marginRight: 15,
    },
    buttonOutlineText:{
        color:'#fff',
        fontWeight:'800',
        fontSize:16,
    }
})