export interface Currency {
    id: string
    name: string
    value: number
}

export interface CurrenciesState {
    value?: Currency[]
    status: 'idle' | 'loading' | 'failed'
}
