import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import styles from '../styles'

export default function TextInputFilter({ data, setCharactersList }) {
    const [searchText, setSearchText] = useState('')

    useEffect(() => {

        if (searchText === '') {
            setCharactersList(data.results);
        } else {
            setCharactersList(
                data.results.filter(character => (character.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1))
            )
        }
    }, [searchText])

    useEffect(() => {
        setSearchText('')
    }, [data])

    return (
        <TextInput
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
            style={styles.textInput}
        />
    )
}
