import { App } from "../../type"

export enum AppTypes {
    fetchAppRequest = 'fetchAppRequest',
    fetchAppSuccess = 'fetchAppSuccess',
    fetchAppFail = 'fetchAppFail',
    searchApp = 'searchApp'
}

export interface AppState {
    fetching: boolean
    result: App[]
    error: any
    filter: App[]
    fetchPage: number
}

export type FetchAppRequestPayload = number

export type FetchAppSuccessPayload = { apps: App[] }

export type FetchAppFailPayload = any

export type SearchAppPayload = { name: string }