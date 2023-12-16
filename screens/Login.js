import { View, Text, StyleSheet, TextInput } from "react-native"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../store/myauth-Context.js"
import { loginToAccount } from "../util/auth.js"


export default function Login ({navigation, route}) {

    const [enteredEmail, setEnteredEmail ] = useState("du@mail.dk")
    const [enteredPassword, setEnteredPassword ] = useState("123456")
    const authContext = useContext(AuthContext) 
    const [isAuthenticating, setIsAuthenticating] = useState(false)



    async function login() {
        setIsAuthenticating(true)
        try{
            const token = await loginToAccount(enteredEmail, enteredPassword)
            authContext.authenticate(token)
            
        }catch(err){
            alert("fejl: " + err.response.data.error.errors[0].message)
            setIsAuthenticating(false)
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
                        <Text style={styles.button} onPress={() => login()}>Login</Text>
                        <Text style={styles.button} onPress={() => navigation.navigate('Signup')}>Sign up</Text>

                </View>
            </View>
        </View>
        
    )
    }

    


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
    margin: 10,
    padding: 10
},
input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    margin: 10

},

title: {
    fontSize: 26,
    borderBottomWidth: 2,
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
  }, 
  button: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },

})