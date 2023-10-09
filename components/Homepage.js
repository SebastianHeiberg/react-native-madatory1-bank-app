import { StyleSheet, Text, View, FlatList, } from 'react-native';
import AccountItem from './AccountItem.js';
import { StatusBar } from 'expo-status-bar';
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore';
import { database } from '../firebase';


const Homepage = ({navigation, route}) => {

    const usercollection = route.params.enteredEmail
    const [values, loading, error] = useCollection(collection(database, usercollection))
    const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))

     return (
      <View style={styles.container}>
        <Button title="logout"/>
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
                  collection = {usercollection}
                />
              );
            }}
          />
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
  