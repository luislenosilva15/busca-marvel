import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Header/styles'
import TextInputFilter from './TextInputFilter'

export default function Header({ setCharactersList, data }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={[styles.textTitle, { borderBottomWidth: 1.2, borderBottomColor: '#D42026', fontFamily: 'Roboto-Black' }]}>BUSCA</Text>
                <Text style={[styles.textTitle, { fontFamily: 'Roboto-Black' }]}> MARVEL</Text>
                <Text style={[styles.textTitle, { fontFamily: 'Roboto-Light', marginTop: 0.5 }]}>TESTE FRONT-END</Text>
            </View>
            <View style={styles.filterHeroContainer}>
                <Text style={[styles.textTitle, { fontFamily: 'Roboto-Regular' }]}>Nome do Personagem</Text>
                <TextInputFilter data={data} setCharactersList={setCharactersList} />
            </View>
        </View>
    )
}
