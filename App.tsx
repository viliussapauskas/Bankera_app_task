import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { store } from './src/redux/store'
import { HomeScreen } from './src/react/homeScreen/homeScreen'

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <HomeScreen />
                <StatusBar style="auto" />
            </View>
        </Provider>
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
