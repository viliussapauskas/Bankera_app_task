import { StatusBar } from 'expo-status-bar'
import { FC, useEffect } from 'react'

import { StyleSheet, Text, View, Button } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    getCurrenciesStateSelector,
    loadCurrenciesAsync,
} from '../../redux/currencies'
import { NavigationProp } from '@react-navigation/native'

export interface WalletScreenProps {
    navigation: NavigationProp<any, any>
}

export const WalletScreen: FC<WalletScreenProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { value, status } = useAppSelector(getCurrenciesStateSelector)

    useEffect(() => {
        dispatch(loadCurrenciesAsync())
    }, [])

    return (
        <View style={styles.container}>
            <Text>{status}</Text>
            {!value && <Text>Loading...</Text>}
            {value && status == 'idle' && (
                <View>
                    {value.map((x) => (
                        <View>
                            <Button
                                title={`${x.name} - ${x.value}`}
                                onPress={() =>
                                    navigation.navigate('Currency', {
                                        name: x.name,
                                    })
                                }
                            ></Button>
                        </View>
                    ))}
                </View>
            )}
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
