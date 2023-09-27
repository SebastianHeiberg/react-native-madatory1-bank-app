import { StyleSheet, View, Text, Image} from 'react-native';


const Profile = ({navigation, route}) => {

    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image style={styles.profilePicture}/>
            <Text style={styles.choosePicture}>Vælg et nyt billede</Text>
            <Text style={styles.field}>Indehaver af kontoen</Text>
            <Text style={styles.outputText}>Sebastian Heiberg</Text>
            <Text style={styles.field}>Fødselsdato</Text>
            <Text style={styles.outputText}>xx.xx.xxxx</Text>
            <Text style={styles.field}>Adresse</Text>
            <text style={styles.outputText}>Strandvejen 1</text>
            <Text style={styles.field}>By</Text>
            <text style={styles.outputText}>Hellerup</text>
            <Text style={styles.returnText} onPress={() => navigation.navigate('Home')}> Til forsiden </Text>

        </View>
      </View>
    );
  };
  
  
  
  export default Profile;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileContainer: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'start',
      width: '80%',
      margin: 5,
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
    },
    field: {
        padding: 5,
        margin: 4,
        borderBottomWidth: 3,
        borderColor: 'black',
        backgroundColor: 'lightblue',
        width: '90%',
        borderRadius: 10
    },
    returnText : {
        borderWidth: 1,
        borderBlockColor: 'black',
        backgroundColor: 'lightblue',
        fontSize: '16px',
        fontFamily: 'bold',
        padding: 4,
        marginTop: 10,
        borderRadius: 10
      },
      profilePicture: {
        margin: 5,
        backgroundColor: 'green',
        height: 150,
        width: 150,
        borderRadius: 100
      },
      choosePicture: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 2
      },
      outputText: {
        width: '80%'
      }

    
  })