import { combineReducers } from 'redux'
import gamesReducer from './games'

const reducers = combineReducers({
    games: gamesReducer,
})

export default reducers