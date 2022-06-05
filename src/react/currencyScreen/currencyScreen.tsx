import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Title } from 'react-native-paper'
import { getCurrencyByNameSelector } from '../../redux/currencies'
import { useAppSelector } from '../../redux/hooks'
import { Layout } from '../components'

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

    const [ammountOfCurreny, setAmmountOfCurreny] = useState()

    return (
        <Layout>
            <View>
                <TextInput
                    label={currency?.name}
                    value={ammountOfCurreny}
                    // type="number"
                    numberOfLines={1}
                    keyboardType="number-pad"
                    onChangeText={(text) => setAmmountOfCurreny(text)}
                />
                <Text>
                    {route?.params?.name} --- {currency?.value}
                    {/* Your return: */}
                </Text>
                <Title>
                    Your return:{' '}
                    {ammountOfCurreny
                        ? ammountOfCurreny * currency?.value!
                        : undefined}
                </Title>
            </View>
        </Layout>
    )
}
