import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { Navigator } from './src/react/components'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
}

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Navigator />
            </PaperProvider>
        </Provider>
    )
}
