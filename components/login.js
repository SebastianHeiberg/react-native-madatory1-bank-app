import { View, Text, StyleSheet, TextInput } from "react-native"
import axios from "axios"
import { useState } from "react"
import { setDoc, doc } from "firebase/firestore"
import { database } from "../firebase"

const Login = ({navigation, route}) => {

    const API_KEY = "AIzaSyCnsZ8MWAqNt9V1yKyBQZb5b4Hqkjx013A"
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    const urlSignup = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
    const [enteredEmail, setEnteredEmail ] = useState("")
    const [enteredPassword, setEnteredPassword ] = useState("")

    async function newcollection() {

        const collectionId = enteredEmail;
        const documentId = 'basis-konto';
        const value = { 
            account: 'basis-konto',
            balance: '0'
        }; 
        await setDoc(doc(database, collectionId, documentId), value); 
      }    

    async function login() {
        try{
            const response = await axios.post(url + API_KEY, {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            })
            
            navigation.navigate('Home',{enteredEmail})

        }catch(err){
            alert("fejl: " + err.response.data.error.errors[0].message)
        }
    }


    async function signup() {
        try{
            const response = await axios.post(urlSignup + API_KEY, {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            })
            newcollection()
        }catch(err){
            alert("fejl: " + err.response.data.error.errors[0].message)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.login}>
                        <Text style={styles.title}>Login page</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setEnteredEmail(newText) }
                            placeholder="Your Email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setEnteredPassword(newText) }
                            placeholder="Your password"
                        />
                        <Text onPress={() => login()}>Login</Text>            
                </View>
                <View style={styles.login}>
                        <Text style={styles.title}> signup</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setEnteredEmail(newText) }
                            placeholder="Your Email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(newText) => setEnteredPassword(newText) }
                            placeholder="Your password"
                        />
                        <Text onPress={() => signup()}>sign up</Text>
                </View>
            </View>
        </View>
        
    )
}

export default Login

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
},
login:{
    flex:1,
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center',
    margin: '20px',
    padding: '10px'
},
input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: '10px',
    fontSize: '18px',
    padding: '10px',
    margin: '10px'

},

title: {
    fontSize: '26px',
    borderBottomWidth: '2px',
    borderColor: 'black'
},
innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'start',
    width: '80%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  }

})