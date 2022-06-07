import { render } from '@testing-library/react-native'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'
import { Layout } from './layout'

describe('Layout component tests', () => {
    it('Should render layout component', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <Layout>
                    <View />
                </Layout>
            </Provider>
        )

        expect(getByTestId('layout')).toBeDefined()
        expect(getAllByTestId('layout').length).toBe(1)
    })
})
