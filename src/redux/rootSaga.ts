import { all, fork } from 'redux-saga/effects'
import { appWatcher } from './app/saga'

const combineSagas = (sagas: any) =>
    function* rootSaga() {
        try {
            yield all(sagas.map(fork))
        } catch (err) {
            console.log(err)
        }
    }

export const rootSaga = combineSagas([
    appWatcher

])
