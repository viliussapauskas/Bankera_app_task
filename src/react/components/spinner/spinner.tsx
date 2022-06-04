import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { STYLE_VARIABLES } from '../../constants'

export const Spinner: FC = () => {
    return (
        <ActivityIndicator
            size={'large'}
            color={STYLE_VARIABLES.primaryColor}
        />
    )
}
