import axios from 'axios'
import * as ACTION from '../constants/games'

const URL = "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"


export const fetchGames = () => async (dispatch) => {
    dispatch({type: ACTION.FETCH_GAMES_LOADING})
    try {
        const {data} = await axios.get(URL)
        dispatch({type: ACTION.FETCH_GAMES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: ACTION.FETCH_GAMES_FAILED, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}

export const filterGamesByGroups = (filterBy) => {
    return({type: ACTION.FILTER_GAMES_BY_GROUP, payload: filterBy})
}

export const filterGamesByLevels = (filterBy) => {
    return({type: ACTION.FILTER_GAMES_BY_LEVEL, payload: filterBy})
}

export const searchGames = (gameName) => {
    return({type: ACTION.SEARCH_GAMES_BY_NAME, payload: gameName})
}