import React, { FC } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './styles'

interface LayoutProps {
    children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>{children}</View>
        </TouchableWithoutFeedback>
    )
}
