import React, { FC, useEffect, useState } from 'react'
import {
    FlatList,
    ListRenderItemInfo,
    RefreshControl,
    View,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    Currency,
    getCurrenciesStateSelector,
    loadCurrenciesAsync,
} from '../../redux/currencies'
import { NavigationProp } from '@react-navigation/native'
import { Layout, Spinner } from '../components'
import { CurrencyRow } from './components'
import { Divider } from 'react-native-paper'
import { styles } from './styles'

export interface WalletScreenProps {
    navigation: NavigationProp<any, any>
}

export const WalletScreen: FC<WalletScreenProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { value, status } = useAppSelector(getCurrenciesStateSelector)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        dispatch(loadCurrenciesAsync())
    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        dispatch(loadCurrenciesAsync()).then(() => setRefreshing(false))
    }, [])

    const renderItem = (currency: ListRenderItemInfo<Currency>) => (
        <CurrencyRow
            currency={currency.item}
            onClick={() =>
                navigation.navigate('Currency', {
                    name: currency.item.name,
                })
            }
        />
    )

    const separator = () => <Divider />

    return (
        <Layout>
            <View style={styles.container} testID="walletScreen">
                {status && status === 'loading' && <Spinner />}
                {value && status == 'idle' && (
                    <View
                        style={{ flex: 1 }}
                        testID="walletScreen.currenciesContainer"
                    >
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                            data={value}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={separator}
                        />
                    </View>
                )}
            </View>
        </Layout>
    )
}
