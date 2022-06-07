import { currencyToUSD } from './utils'

describe('Currency screen utils tests', () => {
    it('Should return null if amountOfCurrency is not a number', () => {
        expect(currencyToUSD('wrong input', 1)).toBe(null)
    })
    it('Should return correct USD output ', () => {
        expect(currencyToUSD('1', 0.5)).toBe(2)
    })
})
