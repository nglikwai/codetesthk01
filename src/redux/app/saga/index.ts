import { all, takeLatest } from 'redux-saga/effects'

import { fetchAppWorker } from './fetchAppWorker'

export function* appWatcher() {
    try {
        yield all([takeLatest('app/fetchAppRequest', fetchAppWorker)])
    } catch (e) {
        console.log(e)

    }
}
