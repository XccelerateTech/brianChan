import { combineReducers } from 'redux'
import { linkReducer, LinkState } from './link'

interface IRootState {
    links: LinkState
}

const rootReducer = combineReducers<IRootState>({
    links: linkReducer,
})

export { IRootState,rootReducer }
