import React, { FC, useState } from 'react'
import { View } from 'react-native'
import { TextInput, Title, Caption, Headline } from 'react-native-paper'
import { getCurrencyByNameSelector } from '../../redux/currencies'
import { useAppSelector } from '../../redux/hooks'
import { Layout } from '../components'
import { styles } from './styles'
import { currencyToUSD } from './utils'

export interface CurrencyScreenProps {
    route: {
        params: {
            name: string
        }
    }
}

export const CurrencyScreen: FC<CurrencyScreenProps> = ({ route }) => {
    const currency = useAppSelector(
        //TODO: is it by name
        getCurrencyByNameSelector(route?.params?.name)
    )

    const [ammountOfCurreny, setAmmountOfCurreny] = useState<string>()

    const returnValue = currencyToUSD(
        ammountOfCurreny ?? '',
        //TODO: currency?.value ?? 0
        currency?.value!
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
