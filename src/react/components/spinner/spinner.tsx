import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native-paper'

export const Spinner: FC = () => (
    <ActivityIndicator testID="spinner" size={'large'} color={'#f4511e'} />
)
