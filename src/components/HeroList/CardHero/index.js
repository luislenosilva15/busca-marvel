import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles'

export default function CardHero({ character, setModalController, setCharacterDetails }) {
    const { name, thumbnail, id } = character
    return (
        <TouchableOpacity onPress={() => { setCharacterDetails(character), setModalController(true) }}>
            <View style={styles.cardContainer}>
                <Image source={{ uri: `${thumbnail.path}/${'portrait_small'}.${thumbnail.extension}` }} style={styles.imageCard} />
                <Text style={styles.titleCard}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
