import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    borderTop: {
        backgroundColor: '#D42026',
        width: '100%',
        height: 35,
        justifyContent: 'center'
    },

    textBorderTop: {
        color: 'white',
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        marginLeft: 79
    },

    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#D42026',
        borderBottomWidth: 1
    },

    imageCard: {
        width: 45,
        height: 45,
        borderRadius: 45,
        margin: 18
    },

    titleCard: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: '#4B4A4A'
    }
})