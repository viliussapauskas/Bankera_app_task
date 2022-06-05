import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})

export const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerBackTitleStyle: {},
}
