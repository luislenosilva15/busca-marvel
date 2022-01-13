import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../Home/styles.js'
import Header from '../../components/Header'
import HeroList from '../../components/HeroList/index.js'
import Footer from '../../components/Footer/index.js'
import { ListCharacters } from '../../services/api'
import ModalCharacterDetails from '../../components/Modal/index.js'

export default function Home() {

    const [data, setData] = useState('')
    const [charactersList, setCharactersList] = useState([])
    const [modalController, setModalController] = useState(false)
    const [characterDetails, setCharacterDetails] = useState('')

    useEffect(() => {
        fetchData(0)
    }, [])

    async function fetchData(offset) {
        const response = await ListCharacters(offset)
        setData(response.data)
        setCharactersList(response.data.results)
    }

    return (
        <View style={styles.container}>
            <ModalCharacterDetails modalController={modalController} setModalController={setModalController} characterDetails={characterDetails} />
            <Header data={data} setCharactersList={setCharactersList} />
            <HeroList charactersList={charactersList} setModalController={setModalController} setCharacterDetails={setCharacterDetails} />
            <Footer data={data} fetchData={fetchData} />
        </View>

    )
}
