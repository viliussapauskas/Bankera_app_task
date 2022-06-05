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
        getCurrencyByNameSelector(route?.params?.name)
    )

    const [ammountOfCurreny, setAmmountOfCurreny] = useState<string>()

    const returnValue = currencyToUSD(ammountOfCurreny ?? '', currency?.value!)

    const onChangeText = (value: string) => {
        const isNumberOrEmpty = !isNaN(parseFloat(value)) || value === ''
        if (isNumberOrEmpty) {
            setAmmountOfCurreny(value.replace(/,/g, '.'))
        }
    }

    return (
        <Layout>
            <View style={styles.container}>
                <Title style={styles.title}>Bitcoin</Title>
                <Caption>
                    * Enter ammount of selected currency to see your return in
                    USD
                </Caption>
                <TextInput
                    placeholder="1"
                    label={currency?.name}
                    value={ammountOfCurreny}
                    keyboardType="numeric"
                    onChangeText={onChangeText}
                />

                {!!returnValue && !isNaN(returnValue) && (
                    <View style={styles.returnValue}>
                        <Title>Your return in USD</Title>
                        <Headline>{returnValue}$</Headline>
                    </View>
                )}
            </View>
        </Layout>
    )
}
