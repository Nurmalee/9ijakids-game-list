import * as ACTION from '../constants/games'

const initialState = {
    allGames: [],
    loading: true,
    filterByGroup: 'All',
    filterByLevel: 'All'
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.FETCH_GAMES_LOADING:
            return {
                ...state,
            }

        case ACTION.FETCH_GAMES_SUCCESS:
            return {
                ...state,
                loading:false,
                allGames: action.payload,
                loadedGames: action.payload,
            }

        case ACTION.FETCH_GAMES_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        
        case ACTION.FILTER_GAMES_BY_GROUP:
            let filteredGamesByGroups = state.allGames.filter(game => action.payload === "All" ? game : game.Group === action.payload)

            return {
                ...state,
                loadedGames: filteredGamesByGroups
            }

        case ACTION.FILTER_GAMES_BY_LEVEL:
            let filteredGamesByLevels = state.allGames.filter(game => action.payload === "All" ? game : game.Level === action.payload)

            return {
                ...state,
                loadedGames: filteredGamesByLevels
            }

        case ACTION.SEARCH_GAMES_BY_NAME:
            let searchedGames = state.allGames.filter(game => game.Topic.toLowerCase().includes(action.payload.toLowerCase()) || game.GameTitle.toLowerCase().includes(action.payload.toLowerCase()) || game.GameDescription.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                loadedGames: searchedGames
            }

        default:
            return state;
    }
}

export default gamesReducer