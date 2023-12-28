import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { doc, setDoc} from "firebase/firestore";
import { database } from "../firebase.js";

async function authenticate(mode, email, password) {
const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_KEY}`
    

const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
})
const token = await response.data.idToken
const newEmail = await response.data.email
await AsyncStorage.setItem("token", token)
await AsyncStorage.setItem("email", newEmail)
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
