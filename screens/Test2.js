import { View, Text, StyleSheet} from "react-native"
import LogoutButton from "../components/LogoutButton.js"

export default function Test() {
    return (
        <View style={styles.container}>
            <LogoutButton/>
            <Text>Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: "center",
    },
});