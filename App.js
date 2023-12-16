import { NavigationContainer } from '@react-navigation/native';
// import NewAccount from './components/NewAccount.js';
// import Homepage from './components/Homepage.js';
// import DetailView from './components/DetailView.js';
// import Profile from '/components/Profile.js';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import WelcomeScreen from './screens/WelcomeScreen.js';
import AuthContextProvider from './store/myauth-Context.js';
import { AuthContext } from './store/myauth-Context.js';
import Test from './screens/Test23.js';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator initialRouteName="test">
     <Stack.Screen name="Welcome" component={WelcomeScreen} />
     <Stack.Screen name="test" component={Test} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const myAuthcontext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!myAuthcontext.isAuthenticated &&<AuthStack />}
      {myAuthcontext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {


  function Root() {
    const [isReady, setIsReady] = useState(true);
    const authContext = useContext(AuthContext);

    useEffect(() => {
      
      async function getToken() {

      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authContext.authenticate(storedToken);
      }

    }

    getToken()

    setIsReady(false);

    }, []);

    if (isReady) {
      return <AppLoading />;
    }

    return <Navigation />;
  }

  return (
    <AuthContextProvider>
      <Root />
    </AuthContextProvider>
  );
}
  
  // return (
  //   <StatusContextProvider>
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Login'>
  //       <Stack.Screen
  //         name='Login'
  //         component={Login}
  //         options={{ headerShown: false }}/>
  //       <Stack.Screen
  //         name='Signup'
  //         component={Signup}
  //         options={{ headerShown: false }}/>
          // <Stack.Screen
          // name='Home'
          // component={Homepage}
          // options={{ headerShown: false }}/>
          // <Stack.Screen
          // name='NewAccount'
          // component={NewAccount}
          // options={{ headerShown: false }}/>
          // <Stack.Screen
          // name='DetailView'
          // component={DetailView}
          // options={{ headerShown: false }}/>
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </StatusContextProvider>
  // )



