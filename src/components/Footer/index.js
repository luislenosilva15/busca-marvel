import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Pagination from './Pagination'

export default function Footer({ data, fetchData }) {
    const { limit, offset, total } = data

    return (
        <View style={styles.container}>
            <Pagination limit={limit} total={total} offset={offset} fetchData={fetchData} />
        </View>
    )
}
