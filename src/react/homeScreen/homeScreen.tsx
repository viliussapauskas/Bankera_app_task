import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    Currency,
    getCurrenciesStateSelector,
    loadCurrenciesAsync,
} from '../../redux/currencies'

export const HomeScreen = () => {
    const dispatch = useAppDispatch()
    const { value, status } = useAppSelector(getCurrenciesStateSelector)

    useEffect(() => {
        dispatch(loadCurrenciesAsync())
    }, [])

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{status}</Text>
            {!value && <Text>Loading...</Text>}
            {value &&
                value.map((x) => (
                    <View>
                        <Text>
                            {x.name} - {x.value}
                        </Text>
                    </View>
                ))}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
