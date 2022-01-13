import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 24,
        marginTop: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 25,
    },
    currentIndex: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: '#D42026',
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#D42026',
        justifyContent: 'center',
        alignItems: 'center',
    },
    index: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#D42026',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textCurrentIndex: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: 'white'
    },
    textIndex: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#D42026'
    },

    buttonArrowLeft: {
        marginLeft: 30,
        marginRight: 50
    },
    buttonArrowRight: {
        marginLeft: 50,
        marginRight: 30
    }
})