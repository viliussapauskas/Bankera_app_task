import React, { FC } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

interface LayoutProps {
    children: JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return <View style={styles.container}>{children}</View>
}
