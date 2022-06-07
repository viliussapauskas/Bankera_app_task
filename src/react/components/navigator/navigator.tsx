import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CurrencyScreen } from '../../currencyScreen'
import { WalletScreen } from '../../walletScreen'
import { screenOptions } from './styles'

const Stack = createNativeStackNavigator()

export const Navigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ ...screenOptions }}>
                    <Stack.Screen
                        name="Wallet"
                        component={WalletScreen}
                        options={{ title: 'Your wallet' }}
                    />
                    <Stack.Screen name="Currency" component={CurrencyScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
