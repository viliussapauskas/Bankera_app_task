import React, { FC } from 'react'
import { View } from 'react-native'
import { Currency } from '../../../../redux/currencies'
import { Divider, List } from 'react-native-paper'

interface CurrencyRowProps {
    onClick(): void
    currency: Currency
}

export const CurrencyRow: FC<CurrencyRowProps> = ({ onClick, currency }) => {
    return (
        <View>
            <Divider />
            <List.Item
                title={`${currency.name} - ${currency.value}`}
                onPress={onClick}
                right={(props) => <List.Icon {...props} icon="forward" />}
            />
        </View>
    )
}
