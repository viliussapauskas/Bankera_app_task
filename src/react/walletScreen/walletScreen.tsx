import React, { FC, useEffect } from 'react'

import { View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    getCurrenciesStateSelector,
    loadCurrenciesAsync,
} from '../../redux/currencies'
import { NavigationProp } from '@react-navigation/native'
import { Layout, Spinner } from '../components'
import { CurrencyRow } from './components'
import { Divider } from 'react-native-paper'

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
        <Layout>
            <View>
                {status && status === 'loading' && <Spinner />}
                {value && status == 'idle' && (
                    <View>
                        {value.map((currency) => (
                            <CurrencyRow
                                currency={currency}
                                onClick={() =>
                                    navigation.navigate('Currency', {
                                        name: currency.name,
                                    })
                                }
                            />
                        ))}
                        <Divider />
                    </View>
                )}
            </View>
        </Layout>
    )
}
