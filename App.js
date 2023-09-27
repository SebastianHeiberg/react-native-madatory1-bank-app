// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList, } from 'react-native';
// import { useState } from 'react';
// import AccountItem from './components/AccountItem.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAccount from './components/NewAccount.js';
import { Homepage } from './components/Homepage.js';



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
        component={NewAccount}
        options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}


