import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAccount from './components/NewAccount.js';
import Homepage from './components/Homepage.js';
import DetailView from './components/DetailView.js';
import Profile from '/components/Profile.js';
import Login from './components/login.js';

export default function App() {

const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}/>
        <Stack.Screen
        name='Home'
        component={Homepage}
        options={{ headerShown: false }}/>
        <Stack.Screen
        name='NewAccount'
        component={NewAccount}
        options={{ headerShown: false }}/>
        <Stack.Screen
        name='DetailView'
        component={DetailView}
        options={{ headerShown: false }}/>
        <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}/>


      </Stack.Navigator>
    </NavigationContainer>

  )
}


