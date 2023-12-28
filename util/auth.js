import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { doc, setDoc} from "firebase/firestore";
import { database } from "../firebase.js";

async function authenticate(mode, email, password) {
console.log("authenticateing kald til server")
const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`
    

const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
})

console.log(response.data)
console.log("email fra response:", response.data.email)
const token = response.data.idToken
AsyncStorage.setItem("token", token)
AsyncStorage.setItem("email", email)

return token
}

export function loginToAccount(email, password){
    return authenticate("signInWithPassword", email, password)
}

export async function createUser(email, password){
    const token = await authenticate("signUp", email, password)
    await newcollection()
    return token
}

async function newcollection() {
    const email = await AsyncStorage.getItem("email");
    const collectionId = email;
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
