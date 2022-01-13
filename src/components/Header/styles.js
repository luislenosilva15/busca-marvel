import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 12,
        marginLeft: 30,
        marginRight: 30
      
    },
    filterHeroContainer: {
        marginTop: 12
    },

    titleContainer: {
        flexDirection: 'row',
    },
    textTitle: {
        color: '#D42026',
        fontSize: 16
    },
    textTitleFilter: {
        fontFamily: 'Roboto-Regular',
        color: '#D42026'
    },
    textInput: {
    
        height: 38,
        borderWidth: 0.8,
        borderColor: 'gray',
        borderRadius: 3,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        color: 'black'
    },
})