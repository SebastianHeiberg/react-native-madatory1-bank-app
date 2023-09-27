
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAccount from './components/NewAccount.js';
import Homepage from './components/Homepage.js';
import DetailView from './components/DetailView.js';

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
        <Stack.Screen
        name='DetailView'
        component={DetailView}
        options={{ title: 'Home' }}/>

      </Stack.Navigator>
    </NavigationContainer>

  )
}


