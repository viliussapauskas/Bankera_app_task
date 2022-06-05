interface CurrencyURL {
    url: string
    name: string
}

export const GET_CURRENCIES_URLS: CurrencyURL[] = [
    {
        url: 'https://spectrocoin.com/scapi/ticker/BTC/USD',
        name: 'Bitcoin',
    },
    {
        url: 'https://spectrocoin.com/scapi/ticker/ETH/USD',
        name: 'Ethereum',
    },
    {
        url: 'https://spectrocoin.com/scapi/ticker/USDP/USD',
        name: 'Pax Dollar',
    },
    {
        url: 'https://spectrocoin.com/scapi/ticker/BNK/USD',
        name: 'Banker',
    },
]
