import styled from 'styled-components'
import {UseGameContext} from '.././GameContext/GameContext'
import SingleGame from './SingleGame'

const GameList = () => {

    const {loading, gamesList} = UseGameContext()

    if(loading){
        return (
            <GameListLoader>
                <p>loading games, please wait a second...</p>
                <img src="https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loading"/>
            </GameListLoader>
        )
    }

    return (
        <GameListContainer>
            {
                gamesList.map((game, index) => {
                    return (
                        <SingleGame key={index} {...game} />
                    )
                })
            }
        </GameListContainer>
    )
}

export default GameList

const GameListLoader = styled.div`
    margin: 50px auto;
    text-align: center;

    > p {
        font-size: 22px;
        font-family: 'Poppins', sans-serif;
    }

    > img {
        height: 100px;
        background-color: transparent;
    }
`

const GameListContainer = styled.section`
    display: grid;
    gap: 15px;
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
