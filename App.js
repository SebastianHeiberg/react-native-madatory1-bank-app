import { NavigationContainer } from '@react-navigation/native';
// import NewAccount from './components/NewAccount.js';
// import DetailView from './components/DetailView.js';
// import Profile from '/components/Profile.js';
import Homepage from './screens/Homepage.js';
import Signup from './screens/Signup.js';
import Login from './screens/Login.js';
import Test from './screens/Test2.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContextProvider, { AuthContext } from './store/myauth-Context.js';
import { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
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


  function RootComp() {
    const [isReady, setIsReady] = useState(true);
    const authContext = useContext(AuthContext);

    useEffect(() => {
      
      async function getToken() {

      const storedToken = await AsyncStorage.getItem("token");
      const storedEmail = await AsyncStorage.getItem("email");

      if (storedToken && storedEmail) {
        console.log("token and email found in async storage");
        console.log("email: ", storedEmail);
        authContext.authenticate(storedToken, storedEmail);
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
      <RootComp />
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
          // 
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



