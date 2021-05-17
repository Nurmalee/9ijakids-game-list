import {createContext, useContext, useEffect, useState} from 'react'

const URL = "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"

const GameContext = createContext()

export const UseGameContext = () => useContext(GameContext)

export const GameProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [gamesList, setGamesList] = useState([])
    const [gameSorter, setGameSorter] = useState([])


    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const fetchGames = await fetch(URL)
            const games = await fetchGames.json()
            setGamesList(games)
            setGameSorter(games)
            setLoading(false)
        }
        fetchData();  
    }, [])

    const gameObjectified = {
        loading,
        gamesList,
        setGamesList,
        gameSorter,
    }

    return (
        <GameContext.Provider value={gameObjectified}>
            {children}
        </GameContext.Provider>
    )
}

