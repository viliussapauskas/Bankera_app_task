import { CurrencyScreen } from './currencyScreen'
import { fireEvent, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { Currency } from '../../redux/currencies'
import * as hooks from '../../redux/hooks'
import { store } from '../../redux/store'

describe('WalletScreen component tests', () => {
    type Props = React.ComponentProps<typeof CurrencyScreen>

    const getDefaultProps = (): Props => {
        return {
            route: {
                params: {
                    name: 'BitCoin',
                },
            },
        }
    }

    const getComponent = (props: Props = getDefaultProps()) => {
        return render(
            <Provider store={{ ...store }}>
                <CurrencyScreen {...props} />
            </Provider>
        )
    }

    beforeEach(() => {
        jest.resetAllMocks()
    })
    beforeAll(() => {
        jest.useFakeTimers()
    })

    it('Should render CurrencyScreen component', () => {
        const component = getComponent()
        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Should render correct title', () => {
        jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => {
            return {
                id: 'BTC',
                name: 'BitCoin title input',
                value: 0.5,
            } as Currency
        })
        const component = getComponent()
        expect(component.toJSON()).toMatchSnapshot()
    })

    // it('Should not render return card when returnValue empty', () => {
    //     const { getAllByTestId } = getComponent()
    //     expect(getAllByTestId('currencyScreen.returnCard').length).toBe(0)
    // })

    it('Should render return card when input value is correctly', async () => {
        const { getByTestId, debug, findByTestId } = getComponent()
        fireEvent.changeText(getByTestId('currencyScreen.ammountInput'), '1.2')
        console.log(findByTestId('currencyScreen.returnCard'))

        const returnCard = await findByTestId('currencyScreen.returnCard')

        console.log(returnCard, 'RETURN CARD')
        // expect(return)
        // debug()
    })
})
