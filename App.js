import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import { useState } from 'react';
import AccountItem from './components/AccountItem.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAccount from './components/NewAccount.js';
export default function App() {

  
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Homepage}
        />
        <Stack.Screen
        name='NewAccount'
        component={NewAccount}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const Homepage = ({navigation, route}) => {

  const [accounts, setAccounts] = useState([{ text: "Budget"}, { text: "Fælles"}, { text: "Opsparing"}])

   return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text>Sebastians bank app</Text>
      </View>
      <View style={styles.accountsBox}>
      <FlatList
          style={styles.list}
          data={accounts}
          renderItem={(itemData) => {
            return (
              <AccountItem
                text={itemData.item.text}
              />
            );
          }}
        />
      </View>
      <View style={styles.createAccount}>
        <Text onPress={() => navigation.navigate('NewAccount')}>opret ny konto</Text>
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
