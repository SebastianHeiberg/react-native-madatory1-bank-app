import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import AccountItem from '../components/AccountItem.js';
import { StatusBar } from 'expo-status-bar';
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore';
import { database } from '../firebase.js';
import { useContext, useEffect } from 'react';
import { AuthContext } from "../store/myauth-Context.js";
import LogoutButton from '../components/LogoutButton.js';
import { ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function Homepage ({navigation, route}) {
  
  const authContext = useContext(AuthContext) 
  const [usercollection, setUsercollection] = useState(authContext.email)
  const [data, setData] = useState([]);
  const [values, loading, error] = useCollection(
    usercollection ? collection(database, usercollection) : null
  );


  useEffect(() => {
    console.log("useeffetct in homepage")
    console.log("email: " ,authContext.email)
    console.log("token : ", authContext.token)
    const newData = values?.docs.map((doc) => ({...doc.data(), id: doc.id}));
    setData(newData);
    console.log(newData)
  }, [values]);

     return (
      <View style={styles.container}>
        <LogoutButton/> 
        <View style={styles.topBox}>
          <Text>Sebastians bank app</Text>
        </View>
        <View style={styles.accountsBox}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Replace with your own loading indicator
        ) : (
          <FlatList
            style={styles.list}
            data={data}
            renderItem={(itemData) => {
              return (
                <AccountItem
                  account={itemData.item.account}
                  balance={itemData.item.balance}
                  id = {itemData.item.id}
                  navigation = {navigation}
                  collection = {usercollection}
                />
              );
            }}
          />
        )}
      </View>
        <View style={styles.createAccount}>
          <Text style={styles.linkItems} onPress={() => navigation.navigate('NewAccount', {usercollection})}>Opret ny konto</Text>
          <Text style={styles.linkItems} onPress={() => navigation.navigate('Profile', {usercollection})}>Dine profil oplysninger</Text>
          <Text style={styles.linkItems}>Nærmeste hæveautomat på kort</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
     topBox: {
      flex: 1,
      borderBottomWidth: 5,
      borderColor: 'black',
      margin: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: 'white'
     },
     accountsBox: {
      flex: 6,
      backgroundColor: 'white',
      alignItems: 'start',
      width: '80%',
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: 'black'
     },
     list: {
      width: '100%'
     },
     createAccount: {
      flex: 2,
      borderTopWidth: 5,
      borderColor: 'black',
      margin: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: 'white',
     },
     linkItems: {
      marginTop: 3,
      padding: 3,
      backgroundColor: 'lightblue',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5

     }   
  });
  