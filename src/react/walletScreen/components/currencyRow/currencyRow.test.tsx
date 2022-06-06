import { CurrencyRow } from '.'
import { fireEvent, render } from '@testing-library/react-native'

describe('Currency row component tests', () => {
    type Props = React.ComponentProps<typeof CurrencyRow>
    const onClickMock = jest.fn()

    const getDefaultProps = (): Props => {
        return {
            onClick: onClickMock,
            currency: {
                id: 'BTC',
                name: 'BitCoin',
                value: 0.5,
            },
        }
    }

    const getComponent = (props: Props = getDefaultProps()) => {
        return render(<CurrencyRow {...props} />)
    }

    beforeEach(() => {
        jest.resetAllMocks()
    })

    it('Should render CurrenyRow component', () => {
        const { getByTestId } = getComponent()
        expect(getByTestId('currencyRow')).toBeDefined()
    })

    it('Should call onClick when ListItem clicked', () => {
        const props = getDefaultProps()
        const { getByTestId } = getComponent(props)
        expect(onClickMock).not.toBeCalled()

        const listItem = getByTestId('currencyRow.ListItem')
        fireEvent.press(listItem)
        expect(onClickMock).toBeCalled()
    })
})
