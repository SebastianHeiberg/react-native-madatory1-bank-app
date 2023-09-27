import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useState } from 'react';
import AccountItem from './AccountItem.js';
import { StatusBar } from 'expo-status-bar';
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore';
import { database } from '../firebase';


const Homepage = ({navigation, route}) => {

    const [values, loading, error] = useCollection(collection(database, "bank" ))
    const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))
    console.log(data)
     return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          <Text>Sebastians bank app</Text>
        </View>
        <View style={styles.accountsBox}>
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
                />
              );
            }}
          />
        </View>
        <View style={styles.createAccount}>
          <Text onPress={() => navigation.navigate('NewAccount')}>opret ny konto</Text>
          <Text style={{marginTop: 3}}>Dine profil oplysninger</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default Homepage

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
      flex: 1,
      borderTopWidth: 5,
      borderColor: 'black',
      margin: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: 'white',
     }   
  });
  