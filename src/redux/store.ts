import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'
import AppReducer from './app'

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
    reducer: {

        app: AppReducer

    },

    middleware: getDefaultMiddleware => [
        sagaMiddleware,
        ...getDefaultMiddleware(),
    ],
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
