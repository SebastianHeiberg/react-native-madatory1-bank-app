import { StyleSheet, Pressable, View, Text} from 'react-native'

function AccountItem(props) {
    return (
      <Pressable onPress={() => props.navigation.navigate('DetailView', {account: props.account, balance: props.balance, id: props.id})}>
        <View style={styles.account}>
          <Text>{props.account} </Text>
          <Text>saldo: {props.balance} kr.</Text>
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
    flexDirection: 'row',
    borderRadius: 10
   }
})