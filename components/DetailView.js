import { Text, View, StyleSheet} from 'react-native'


const DetailView = ({route, navigation}) => {
    
    const balance = route.params.balance
    const account = route.params.account
    const id = route.params.id

    function deleteAccount () {
        console.log("This was deleted")
    }


     return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.topBox}>
                    <Text>{account}</Text>
                    <Text>Saldo: {balance} kr.</Text>   
                </View>
                <View style={styles.bigView}>
                        {/* TODO: Lave nogle rigtige poster der bliver gemt på databasen og opdaterer saldoen */}
                        <Text style={styles.expence}>Dato xx/xx/xx udgift: xx kr.</Text>
                        <Text style={styles.expence}>Dato xx/xx/xx udgift: xx kr.</Text>
                        <Text style={styles.expence}>Dato xx/xx/xx udgift: xx kr.</Text>
                        <Text style={styles.expence}>Dato xx/xx/xx udgift: xx kr.</Text>
                </View>
                <View style={styles.smallButtonView}>
                    <Text style={styles.submitNewExpenceText}> Ny udgift</Text>
                </View>
                <View style={styles.smallButtonView}>
                    <Text style={styles.returnHome} onPress={() => navigation.navigate('Home')}> Til forsiden</Text>
                </View>
                <View style={styles.smallButtonView}>
                    <Text style={styles.deleteAccount}> Slet kontoen</Text>
                </View>
            </View> 
        </View>     
    )
  }
  
  export default DetailView

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigView: {
        flex:9,
        width: '90%'
    }
    ,
    innerContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'start',
        width: '80%',
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
      },
      submitNewExpenceText : {
        borderWidth: 1,
        borderBlockColor: 'black',
        backgroundColor: 'lightblue',
        fontSize: '16px',
        fontFamily: 'bold',
        padding : 5,
        borderRadius: 20
      },
      deleteAccount : {
        borderWidth: 1,
        borderBlockColor: 'black',
        backgroundColor: 'red',
        fontSize: '16px',
        fontFamily: 'bold',
        padding: 5,
        borderRadius: 20
      },
      smallButtonView: {
        flex:1,
        justifyContent: 'center',
        width: '90%',
        margin: 5,
        alignItems: 'center',
      },
      topBox: {
        flex:1,
        justifyContent: 'center',
        width: '90%',
        margin: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between'

      },
      expence: {
        padding: 5,
        margin: 5,
        borderBottomWidth: 3,
        borderColor: 'black',
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 10
       },
       returnHome : {
        borderWidth: 1,
        borderBlockColor: 'black',
        backgroundColor: 'lightblue',
        fontSize: '16px',
        fontFamily: 'bold',
        padding: 5,
        borderRadius: 20
      }
  })