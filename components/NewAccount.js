import { collection, addDoc } from 'firebase/firestore';
import { Text, View, TextInput, StyleSheet} from 'react-native';
import { database } from '../firebase';
import { useState } from 'react';


const NewAccount = ({navigation, route}) => {

  const [account, setAccount] = useState("")
  const [balance, setBalance] = useState("")


  async function addToDatabase() {
if(balance && account) {
    try{
    await addDoc(collection(database, "bank"), {
      account, balance
    })
    navigation.navigate('Home')
  } catch (err) {
    console.log("fejl i db :",err)
  }
   } 
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputFields}>
          <Text style={styles.field}>Navn på kontoen</Text>
          <TextInput style={styles.inputText} onChangeText={ (txt) => setAccount(txt) } placeholder='Fx. børneopsparing'/>
          <Text style={styles.field}>Saldo på kontoen</Text>
          <TextInput style={styles.inputText} onChangeText={ (txt) => setBalance(txt) } placeholder='Antal i kr.'/>
          <View style={styles.submitView}>
          <Text style={styles.submitText} onPress={() => addToDatabase()}> Opret konto </Text>
          <Text style={styles.returnText} onPress={() => navigation.navigate('Home')}> Til forsiden </Text>
          </View>
        </View>
      </View>
    </View>
  );
};



export default NewAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'start',
    width: '80%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',


  },
  inputFields :{
    flex:1,
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'start',
    borderBlockColor: "black",
    width: '100%'
  },
  field: {
    padding: 5,
    margin: 10,
    borderBottomWidth: 3,
    borderColor: 'black',
    backgroundColor: 'lightblue',
    width: '90%',
    borderRadius: 10


  },
  inputText: {
    margin: 10,
    padding: 4,
    width:'90%',
    borderWidth: 1,
    borderBlockColor: 'black'
  },
  submitText : {
    borderWidth: 1,
    borderBlockColor: 'black',
    backgroundColor: 'lightblue',
    fontSize: '16px',
    fontFamily: 'bold',
    borderRadius: 10,
    padding: 4

  },
  submitView: {
    flex:1,
    justifyContent: 'start',
    width: '90%',
    margin: 10,
    alignItems: 'center'    
  },
  returnText : {
    borderWidth: 1,
    borderBlockColor: 'black',
    backgroundColor: 'lightblue',
    fontSize: '16px',
    fontFamily: 'bold',
    padding: 4,
    marginTop: 20,
    borderRadius: 10
  }

})