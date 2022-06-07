import { CurrencyScreen } from './currencyScreen'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { Currency } from '../../redux/currencies'
import * as hooks from '../../redux/hooks'
import { store } from '../../redux/store'

describe('CurrencyScreen component tests', () => {
    type Props = React.ComponentProps<typeof CurrencyScreen>

    const getDefaultProps = (): Props => {
        return {
            route: {
                params: {
                    id: 'BTC',
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
})
