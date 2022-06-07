import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { TextInput, Title, Caption, Headline } from 'react-native-paper'
import { getCurrencyByIdSelector } from '../../redux/currencies'
import { useAppSelector } from '../../redux/hooks'
import { Layout } from '../components'
import { styles } from './styles'
import { currencyToUSD } from './utils'

export interface CurrencyScreenProps {
    route: {
        params: {
            id: string
        }
    }
}

export const CurrencyScreen: FC<CurrencyScreenProps> = ({ route }) => {
    const currency = useAppSelector(getCurrencyByIdSelector(route?.params?.id))
    const [ammountOfCurreny, setAmmountOfCurreny] = React.useState<string>()

    const returnValue = currencyToUSD(
        ammountOfCurreny ?? '',
        currency?.value ?? 0
    )

    const onChangeText = (value: string) => {
        const isNumberOrEmpty = !isNaN(parseFloat(value)) || value === ''
        if (isNumberOrEmpty) {
            setAmmountOfCurreny(value.replace(/,/g, '.'))
        }
    }

    return (
        <Layout>
            <View style={styles.container} testID="currencyScreen">
                <Title style={styles.title} testID="currencyScreen.title">
                    {currency?.name}
                </Title>
                <Caption>
                    * Enter ammount of selected currency to see your return in
                    USD
                </Caption>
                <TextInput
                    testID="currencyScreen.ammountInput"
                    placeholder="1"
                    label={currency?.name}
                    value={ammountOfCurreny}
                    keyboardType="numeric"
                    onChangeText={onChangeText}
                />

                {!!returnValue && !isNaN(returnValue) && (
                    <View
                        testID="currencyScreen.returnCard"
                        style={styles.returnValue}
                    >
                        <Title>Your return in USD</Title>
                        <Headline>{returnValue}$</Headline>
                    </View>
                )}
            </View>
        </Layout>
    )
}
