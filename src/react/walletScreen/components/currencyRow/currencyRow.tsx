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
        <View testID="currencyRow">
            <Divider />
            <List.Item
                testID="currencyRow.ListItem"
                title={`${currency.name} - ${currency.value}`}
                onPress={onClick}
                // style={{ backgroundColor: 'red', margin: '10px' }}
                // underlayColor="blue"
                right={(props) => <List.Icon {...props} icon="forward" />}
            />
        </View>
    )
}
