import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { fetchCurrencies } from './currenciesAPI'
import { initialState } from './state'

export const loadCurrenciesAsync = createAsyncThunk(
    'currencies/fetchCurrencies',
    async () => await fetchCurrencies()
)

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrenciesAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loadCurrenciesAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value = action.payload
            })
            .addCase(loadCurrenciesAsync.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

const { reducer, actions } = currenciesSlice
export const currenciesReducer = reducer
export const currenciesActionCreators = actions

export const getCurrenciesStateSelector = (state: RootState) => state.currencies
export const getCurrencyByNameSelector = (name: string) => (state: RootState) =>
    state.currencies.value?.find((x) => x.name === name) ?? undefined
