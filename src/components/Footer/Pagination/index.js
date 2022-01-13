import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default function Pagination({ limit, offset, total, fetchData }) {

    const maxItems = 3;
    const currentPage = offset ? offset / limit + 1 : 1
    const totalPages = Math.ceil(total / limit);
    const first = Math.min(
        Math.max(currentPage - (maxItems - 1) / 2, 1),
        Math.max(totalPages - (maxItems - 1), 1)
    )

    function ChangePage(page) {
        fetchData((page - 1) * limit)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonArrowLeft} onPress={() => { currentPage > 1 && ChangePage(currentPage - 1) }}>
                <Image source={require('../../../assets/icons/arrowLeft.png')} style={styles.icon} />
            </TouchableOpacity>
            {
                Array.from({ length: Math.min(maxItems, totalPages) })
                    .map((_, index) =>
                        index + first
                    )
                    .map((page) => (
                        <TouchableOpacity key={page} onPress={() => { ChangePage(page) }} style={page == currentPage ? styles.currentIndex : styles.index}>
                            <Text style={page == currentPage ? styles.textCurrentIndex : styles.textIndex}>{page}</Text>
                        </TouchableOpacity>
                    ))
            }
            <View>
                <TouchableOpacity style={styles.buttonArrowRight} onPress={() => { currentPage < totalPages && ChangePage(currentPage + 1) }}>
                    <Image source={require('../../../assets/icons/arrowRight.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
