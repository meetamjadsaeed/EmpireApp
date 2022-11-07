import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewContact: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        margin: 10,
    },
    textInformation: {
        color: '#26A69A',
        marginTop: 5
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        margin: 20,
    },
    button: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#80CBC4',
        margin: 20,
        height: 50,
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10
    },
    avatar: {
        alignItems: "center"
    },
    cardTitle: {
        marginTop: 20,
        fontSize: 18,
        color: '#80CBC4',
    },
    infoText: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'gray',
    },
    text: {
        marginBottom: 10
    },
});

export default styles