import { WalletScreen } from './walletScreen'
import { fireEvent, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { Currency } from '../../redux/currencies'
import * as hooks from '../../redux/hooks'
import { store } from '../../redux/store'

describe('WalletScreen component tests', () => {
    type Props = React.ComponentProps<typeof WalletScreen>
    const navigateMock = jest.fn()

    const getDefaultProps = (): Props => {
        return {
            navigation: {
                navigate: navigateMock,
            } as any,
        }
    }

    const getComponent = (props: Props = getDefaultProps()) => {
        return render(
            <Provider store={{ ...store }}>
                <WalletScreen {...props} />
            </Provider>
        )
    }

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('Should render WalletScreen component', () => {
        const { getByTestId } = getComponent()
        expect(getByTestId('walletScreen')).toBeDefined()
    })

    it('Should render Spinner component if status is "loading"', () => {
        jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => {
            return {
                value: undefined,
                status: 'loading',
            }
        })

        const { getByTestId } = getComponent()
        expect(getByTestId('spinner')).toBeDefined()
    })

    it('Should render currencies list when status "idle"', () => {
        jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => {
            return {
                value: [
                    {
                        id: 'BTC',
                        name: 'BitCoint',
                        value: 0.5,
                    },
                ] as Currency[],
                status: 'idle',
            }
        })

        const { getByTestId } = getComponent()
        expect(getByTestId('currencyRow.ListItem')).toBeDefined()
    })
    it('Should render "navigate" on currencies list item click', () => {
        jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => {
            return {
                value: [
                    {
                        id: 'BTC',
                        name: 'BitCoin',
                        value: 0.5,
                    },
                ] as Currency[],
                status: 'idle',
            }
        })

        expect(navigateMock).not.toBeCalled()

        const props = getDefaultProps()
        const { getByTestId } = getComponent(props)
        const listItem = getByTestId('currencyRow.ListItem')
        fireEvent.press(listItem)
        expect(navigateMock).toBeCalledWith('Currency', { name: 'BitCoin' })
    })

    it('Should call dispatch on initial load', () => {
        jest.spyOn(hooks, 'useAppSelector').mockImplementation(() => {
            return {
                value: [],
                status: 'idle',
            }
        })
        const dispatchSpy = jest.spyOn(hooks, 'useAppDispatch')
        expect(dispatchSpy).not.toBeCalled()

        getComponent()
        expect(dispatchSpy).toBeCalled()
    })
})
