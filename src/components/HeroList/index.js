import React from 'react'
import { View } from 'react-native'
import BorderTop from './BorderTop'
import CardHero from './CardHero'
import styles from './styles'

export default function HeroList({ charactersList, setModalController, setCharacterDetails }) {
    return (
        <View style={styles.container}>
            <BorderTop />
            {
                charactersList != ("" || undefined) &&
                charactersList.map((character, index) => (
                    <CardHero key={index} character={character} setModalController={setModalController} setCharacterDetails={setCharacterDetails} />
                ))
            }
        </View>
    )
}
