import { StyleSheet, Text, View } from 'react-native';
import LogoutButton from '../components/ui/LogoutButton.js';


function Test() {

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Test!</Text>
      <Text>Min anden side!</Text>
      <LogoutButton />
    </View>
  );
}

export default Test;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});