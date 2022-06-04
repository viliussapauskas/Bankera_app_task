import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { WalletScreen } from './src/react/walletScreen/walletScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CurrencyScreen } from './src/react/currencyScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Wallet"
                        component={WalletScreen}
                        options={{ title: 'Your wallet' }}
                    />
                    <Stack.Screen
                        // options={({ route }) => ({
                        //     title: route?.params?.name ?? '',
                        // })}
                        options={{
                            title: '',
                        }}
                        name="Currency"
                        component={CurrencyScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
