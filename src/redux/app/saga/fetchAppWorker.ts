import { FetchAppRequestPayload } from '../type'
import { App, AppData } from '../../../type'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'
import { fetchAppSuccess, fetchAppFail, searchApp } from '../index'


export function* fetchAppWorker(action: PayloadAction<FetchAppRequestPayload>) {
    const fetchPage = action.payload
    const PROXY_URL = 'https://glacial-beyond-49996.herokuapp.com/'
    const APP_API = `https://rss.applemarketingtools.com/api/v2/us/apps/top-free/${fetchPage * 10}/apps.json`
    try {
        const response = (yield call(() => fetch(PROXY_URL + APP_API))) as Response
        const { feed } = (yield response.json()) as AppData
        yield put(fetchAppSuccess({ apps: feed.results }))
        yield put(searchApp({ name: '' }))

    } catch (error) {
        yield put(fetchAppFail(error))
    }
}