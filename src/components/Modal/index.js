import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Modal from "react-native-modal"
import styles from './styles'
export default function ModalCharacterDetails({ modalController, setModalController, characterDetails }) {
    const { thumbnail, name, description, series, events } = characterDetails
    return (
        <Modal
            isVisible={modalController}
            onBackButtonPress={() => setModalController(false)}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            onBackdropPress={() => setModalController(false)}
            backdropTransitionOutTiming={0} 
        >
            {characterDetails != "" &&
                <View style={styles.container}>
                    <View style={styles.topModal}>
                        <TouchableOpacity style={styles.buttonDisable} onPress={()=> {setModalController(false)}}>
                            <Image source={require('../../assets/icons/disable.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.heroDetails}>
                            <Image source={{ uri: `${thumbnail.path}/${'portrait_incredible'}.${thumbnail.extension}` }} style={styles.imageHero} />
                            <Text style={styles.heroTitle}>{name}</Text>
                            <Text style={styles.heroDescription}>{description != "" ? description : 'Descrição indisponível'}</Text>

                        </View>

                        <View style={styles.heroSeries}>
                            <Text style={[styles.heroTitle, { fontSize: 15 }]}>Séries</Text>
                            {
                                series.available == 0 ?
                                    <Text style={styles.heroDescription}>Série indisponível</Text>
                                    :

                                    series.items.map((item, index) => (
                                        <Text style={styles.heroDescription} key={index}>{item.name}</Text>
                                    ))
                            }
                        </View>
                        <View style={styles.heroEvents}>
                            <Text style={[styles.heroTitle, { fontSize: 15 }]}>Eventos</Text>
                            {
                                events.available == 0 ?
                                    <Text style={styles.heroDescription}>Evento indisponível</Text>
                                    :
                                    events.items.map((item, index) => (
                                        <Text style={styles.heroDescription} key={index}>{item.name}</Text>
                                    ))
                            }
                        </View>
                    </ScrollView>
                </View>
            }
        </Modal >
    )
}