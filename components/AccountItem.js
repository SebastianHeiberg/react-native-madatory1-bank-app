import { StyleSheet, Pressable, View, Text} from 'react-native'


function AccountItem(props) {
    return (
      <Pressable>
        <View style={styles.account}>
          <Text>{props.text} </Text>
          <Text>saldo: 1 kr.</Text>
        </View>
      </Pressable>
    );
  }

  export default AccountItem;


const styles = StyleSheet.create({
account: {
    padding: 5,
    margin: 5,
    borderBottomWidth: 3,
    borderColor: 'black',
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
   }
})