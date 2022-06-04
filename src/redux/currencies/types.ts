export interface Currency {
    id: string // currencyFrom
    name: string // currencyFrom
    value: number // last
}

export interface CurrenciesState {
    value?: Currency[]
    status: 'idle' | 'loading' | 'failed'
}
