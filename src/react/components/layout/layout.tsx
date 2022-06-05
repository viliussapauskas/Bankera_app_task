import React, { FC, useState } from 'react'
import {
    Keyboard,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'
import { loadCurrenciesAsync } from '../../../redux/currencies'
import { useAppDispatch } from '../../../redux/hooks'
import { styles } from './styles'

interface LayoutProps {
    children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    const [refreshing, setRefreshing] = useState(false)

    const dispatch = useAppDispatch()
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        dispatch(loadCurrenciesAsync()).then((x) => setRefreshing(false))
    }, [])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {children}
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
