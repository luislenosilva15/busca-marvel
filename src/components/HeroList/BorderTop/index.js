import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

export default function BorderTop() {
    return (
        <View style={styles.borderTop}>
            <Text style={styles.textBorderTop}>Nome</Text>
        </View>
    )
}
