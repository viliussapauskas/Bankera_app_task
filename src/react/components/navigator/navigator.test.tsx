import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { Navigator } from './navigator'

describe('Navigator component tests', () => {
    it('Should render Navigator component', () => {
        const component = render(
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
        expect(component.toJSON()).toMatchSnapshot()
    })
})
