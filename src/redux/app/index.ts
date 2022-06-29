import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppTypes, AppState, FetchAppRequestPayload, FetchAppSuccessPayload, FetchAppFailPayload, SearchAppPayload } from './type'
const initialState: AppState = {
    fetching: false,
    result: [],
    error: '',
    filter: [],
    fetchPage: 2
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        [AppTypes.fetchAppRequest]: (state, action: PayloadAction<FetchAppRequestPayload>) => {
            state.fetching = true
            state.fetchPage = action.payload
        },
        [AppTypes.fetchAppSuccess]: (state, action: PayloadAction<FetchAppSuccessPayload>) => {
            state.fetching = false
            state.result = action.payload.apps
        },
        [AppTypes.fetchAppFail]: (state, action: PayloadAction<FetchAppFailPayload>) => {
            state.fetching = false
            state.error = action.payload.error
        },
        [AppTypes.searchApp]: (state, action: PayloadAction<SearchAppPayload>) => {
            state.fetching = false
            state.filter = state.result.filter(app => app.name.toLowerCase().includes(action.payload.name.toLowerCase()))
        }

    }
})

export const { fetchAppRequest, fetchAppSuccess, fetchAppFail, searchApp } = AppSlice.actions

export default AppSlice.reducer