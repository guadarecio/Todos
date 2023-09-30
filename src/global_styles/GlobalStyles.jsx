import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    titleAdd: {
        textAlign: 'center',
        padding: 5,
        marginTop: 30,
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'rgba(77, 82, 244, 0.8)',
    },
    subtitle: {
        marginTop: 50,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(57, 148, 228, 0.8)',
        textAlign: 'center',
    },
    flatListView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(57, 148, 228, 0.8)',
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 30,

    },
    textInputView: {
        width: '90%',
        marginTop: 30,
        marginBottom: 30,
    },
    textInput: {
        backgroundColor: 'rgba(57, 148, 228, 0.8)',
        color: 'white',
        fontSize: 20,
        padding: 60,
        marginBottom: 30,
        borderRadius: 30,
    },
    addTaskButton: {
        marginHorizontal: 95,
        paddingHorizontal: 45,
        paddingVertical: 20,
        backgroundColor: 'rgba(221, 92, 178, 0.8)',
        borderRadius: 30,

    },
    addTaskText: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
    },
    imageView: {
        marginTop: 50
    },
    image: {
        width: 200,
        height: 200,
    },
    deleteButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },


});

export default GlobalStyles;