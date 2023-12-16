import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

async function authenticate(mode, email, password) {
    
const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`
    

const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
})

const token = response.data.idToken
AsyncStorage.setItem("token", token)
AsyncStorage.setItem("email", response.data.email)

return token
}

export function loginToAccount(email, password){
    return authenticate("signInWithPassword", email, password)
}

export function createUser(email, password){
    const token = authenticate("signUp", email, password)
    newcollection(token)
    return token
}

async function newcollection(token) {
    const collectionId = token;
    const documentId = "basis-konto";
    const value = {
      account: "basis-konto",
      balance: "0",
    };
    try {
      await setDoc(doc(database, collectionId, documentId), value);
    } catch (err) {
      console.log("Error adding document: ", err);
    }
  }
