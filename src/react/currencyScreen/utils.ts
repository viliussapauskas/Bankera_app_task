export const currencyToUSD = (
    ammountOfCurrency: string,
    cryptoValue: number
): number | null => {
    const parsedAmmountOfCurrency = parseFloat(ammountOfCurrency)
    if (isNaN(parsedAmmountOfCurrency)) {
        return null
    }
    const response = parsedAmmountOfCurrency / cryptoValue
    return Math.round(response * 100) / 100
}
