import { StyleSheet, View, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from '../firebase';


const Profile = ({navigation, route}) => {

  const [imagePath, setImagePath] = useState(null)

  useEffect( () => {
     getDownloadURL(ref(storage, "myProfilPic"))
      .then((url) => {
        setImagePath(url);
      }).catch((err) => {
        console.log("Error while gette profile picture: ", err)
      })
  }, []); 

  async function uploadImage(){
    const res = await fetch(imagePath)
    const blob = await res.blob()
    const storageRef = ref(storage, "myProfilPic")
    uploadBytes(storageRef, blob)
  }

  async function launcImagePicker (){
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true
    })
    if (!result.canceled){
      setImagePath(result.assets[0].uri)
      await uploadImage()
    }
  }
   
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image style={styles.profilePicture} source={{uri: imagePath}}/>
            <Text style={styles.choosePicture} onPress={() => launcImagePicker()}>Vælg et nyt billede</Text>
            <Text style={styles.field}>Indehaver af kontoen</Text>
            <Text style={styles.outputText}>Sebastian Heiberg</Text>
            <Text style={styles.field}>Fødselsdato</Text>
            <Text style={styles.outputText}>xx.xx.xxxx</Text>
            <Text style={styles.field}>Adresse</Text>
            <Text style={styles.outputText}>Strandvejen 1</Text>
            <Text style={styles.field}>By</Text>
            <Text style={styles.outputText}>Hellerup</Text>
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
        fontSize: 16,
        fontFamily: 'bold',
        padding: 4,
        marginTop: 10,
        borderRadius: 10
      },
      profilePicture: {
        margin: 5,
        height: 150,
        width: 150,
        borderRadius: 100, 
        backgroundColor: 'green'
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