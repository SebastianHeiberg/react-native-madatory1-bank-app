import { View, Text, StyleSheet, TextInput } from "react-native";
import axios from "axios";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { database } from "../firebase";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/myauth-Context";
import { useContext } from "react";

const Signup = ({ navigation, route }) => {
  
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const authContext = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false)


  
  async function Signup() {
    setIsAuthenticating(true)
    try {
      const token = createUser(enteredEmail, enteredPassword);
      authContext.AuthContext(token);
    } catch (err) {
      alert("fejl: " + err.response.data.error.errors[0].message);
      setIsAuthenticating(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.login}>
          <Text style={styles.title}> signup</Text>
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setEnteredEmail(newText)}
            placeholder="Your Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={(newText) => setEnteredPassword(newText)}
            placeholder="Your password"
          />
          <Text style={styles.button} onPress={() => Signup()}>sign up</Text>
          <Text style={styles.button} onPress={() => navigation.navigate("Login")}>
            Back to login
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    margin: 10,
  },

  title: {
    fontSize: 26,
    borderBottomWidth: 2,
    borderColor: "black",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "start",
    width: "80%",
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
});
