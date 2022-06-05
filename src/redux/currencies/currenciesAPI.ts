import axios from 'axios'
import { GET_CURRENCIES_URLS } from '../../config'
import { Currency } from './types'

export async function fetchCurrencies(): Promise<Currency[]> {
    var axiosCalls = GET_CURRENCIES_URLS.map((item) => axios.get(item.url))
    return axios.all(axiosCalls).then(
        axios.spread((...allData) => {
            let currenciesResponse: Currency[] = []

            allData.map((response) => {
                currenciesResponse.push({
                    id: response.data.currencyFrom,
                    name: response.data.currencyFrom,
                    value: response.data.last,
                })
            })

            GET_CURRENCIES_URLS.map(
                (x, id) => (currenciesResponse[id].name = x.name)
            )
            return currenciesResponse
        })
    )
}
