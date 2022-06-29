export type App = {
    artistName: string
    artworkUrl100: string
    genres: string[]
    id: string
    kind: string
    name: string
    releaseDate: string
    url: string
    rate?: number
}

export type AppData = {
    feed: {
        results: App[]
    }
}


export type State = {
    app: {
        fetching: boolean
        result: App[]
        filter: App[]
        error: Error
    }
}

export enum Direction {
    vertical = 'vertical',
    horizontal = 'horizontal'
}
