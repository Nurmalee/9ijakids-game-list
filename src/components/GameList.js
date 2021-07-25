import styled from 'styled-components'
import { useSelector } from 'react-redux'
import SingleGame from './SingleGame'
import GamesSkeleton from './GamesSkeleton'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

const GameList = () => {

    const {loadedGames, loading, error} = useSelector(state => state.games)

    return (
        <GameListContainer>
            {error && <div style={{textAlign: "center"}}> <ExclamationCircleIcon style={{height: "150px"}} />  <p>{error}</p></div> }
            {loading &&  [1,2,3,4,5,6,7,8,9,10,11,12].map((n, idx) =>  <GamesSkeleton key={idx} />)}
            {
                loadedGames?.map((game, index) => {
                    return (
                        <SingleGame key={index} {...game} />
                    )
                })
            }
        </GameListContainer>
    )
}

export default GameList

const GameListContainer = styled.section`
    display: grid;
    gap: 25px;
    width: 90vw;
    max-width: 1000px;
    margin: 50px auto;

    @media screen and (min-width: 650px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media screen and (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr)
    }
`
