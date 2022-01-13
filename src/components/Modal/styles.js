import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 13
    },
    topModal: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    imageHero: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    heroDetails: {
        marginTop: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },

    heroTitle: {
        margin: 5,
        fontSize: 17,
        color: '#D42026',
        fontFamily: 'Roboto-Black'
    },
    heroDescription: {
        fontSize: 13,
        color: '#6C6C6C',
        fontFamily: 'Roboto-Medium',
        textAlign: 'center'
    },

    buttonDisable: {
        margin: 10
    },
    heroSeries: {
        marginHorizontal: 15,
        marginTop: 5,
        alignItems: 'center'
    },

    heroEvents: {
        marginHorizontal: 15,
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 15
    },

    icon: {
        width: 20,
        height: 20
    }
})