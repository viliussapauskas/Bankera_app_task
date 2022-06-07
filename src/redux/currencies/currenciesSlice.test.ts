import {
    getCurrenciesStateSelector,
    getCurrencyByIdSelector,
    loadCurrenciesAsync,
    currenciesReducer,
} from './currenciesSlice'
import { initialState } from './state'
import { CurrenciesState, Currency } from './types'

describe('Currencies slice tests', () => {
    const currenciesState = {
        currencies: {
            status: 'idle',
            value: [
                {
                    id: 'BTC',
                    name: 'BitCoin',
                    value: 0.5,
                },
            ],
        } as CurrenciesState,
    }

    it('getCurrenciesStateSelector should return correct values ', () => {
        expect(getCurrenciesStateSelector(currenciesState)).toBe(
            currenciesState.currencies
        )
    })

    it('getCurrencyByIdSelector should return correct values ', () => {
        const expected: Currency = {
            id: 'BTC',
            name: 'BitCoin',
            value: 0.5,
        }

        expect(getCurrencyByIdSelector('BTC')(currenciesState)).toStrictEqual(
            expected
        )
    })

    it('Should set status to loading when loadStarts', () => {
        const action = { type: loadCurrenciesAsync.pending.type }
        const state = currenciesReducer(initialState, action)
        expect(state).toEqual({ status: 'loading', value: undefined })
    })

    it('Should set status to idle', () => {
        const action = { type: loadCurrenciesAsync.fulfilled.type }
        const state = currenciesReducer(initialState, action)
        expect(state).toEqual({
            status: 'idle',
            value: undefined,
        } as CurrenciesState)
    })

    it('Should set status to failed', () => {
        const action = { type: loadCurrenciesAsync.rejected.type }
        const state = currenciesReducer(initialState, action)
        expect(state).toEqual({
            status: 'failed',
            value: undefined,
        } as CurrenciesState)
    })
})
