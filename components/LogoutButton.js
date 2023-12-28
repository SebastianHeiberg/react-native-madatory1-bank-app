import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../store/myauth-Context.js';

export default function LogoutButton({}) {

  const authContext = useContext(AuthContext);

  return (
    <Pressable
      style={styles.button}
      onPress={authContext.logout}
    >
      <Text style={styles.buttonText}>Logout</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});