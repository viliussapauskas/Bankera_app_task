import { Spinner } from './spinner'
import { render } from '@testing-library/react-native'

describe('Spinner test', () => {
    it('Should render spinner component', () => {
        const { getByTestId } = render(<Spinner />)
        expect(getByTestId('spinner')).toBeDefined()
    })
})
