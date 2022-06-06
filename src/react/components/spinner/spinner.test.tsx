import * as renderer from 'react-test-renderer'
import { Spinner } from './spinner'

describe('Spinner test', () => {
    jest.useFakeTimers()
    it('Should render spinner component', () => {
        const component = renderer.create(<Spinner />).toJSON()
        expect(component).toMatchSnapshot()
    })
})
