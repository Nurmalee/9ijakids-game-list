import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGames, searchGames } from '../redux/actionCreators/games'
import { SearchIcon } from '@heroicons/react/outline'
import DropDown from './DropDown'


const GamesHeader = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const {allGames, loading, error} = useSelector(state => state.games)

    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    const handleInput = (e) => {
        setInput(e.target.value)
        dispatch(searchGames(e.target.value))
    }

    const gameGroups = ["All", ...new Set (allGames?.map(game => game.Group))]
    const gameLevels =  ["All", ...new Set (allGames?.map(game => game.Level))]

    return (
        <HeaderContainer id='search'>
            <HeaderNav>
                <HeaderLeft>
                    9ijaKids GAMES - Search Games 
                </HeaderLeft>

                <HeaderSearch>
                    <input type="text" placeholder="Search games by topic, title or description" onChange={handleInput} value={input} disabled={loading || error} />
                    <SearchIcon style={{height: "20px", color: "black"}} />
                </HeaderSearch>

                <HeaderDropDownContainer>
                    <p>filter by: </p>
                    <DropDown legend="groups" options={gameGroups} setInput={setInput} />
                    <DropDown legend="levels" options={gameLevels} setInput={setInput} />
                </HeaderDropDownContainer>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default GamesHeader

const HeaderContainer = styled.div`
    background-color: #333;
    color: white;
    box-shadow: 0 2px 5px #ccc;
    padding: 50px 10px;
    /* position: sticky; */
    top: 0;
    left: 0;
    width: 100%;
`

const HeaderNav = styled.nav`
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;

    @media screen and (min-width: 700px) {
        text-align: center;
    }
`

const HeaderLeft = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 22px;
    padding: 10px 0;
`

const HeaderSearch = styled.div`
    border: 2px solid white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    background-color: white;
    margin: 10px 0;
    padding: 0 10px;

    > input {
        flex: 1;
        padding-left: 25px;
        padding: 8px 5px;
        font-size: 14px;
        border: 1px solid transparent;
        outline: none;
        width: 100%;
        font-family: 'Poppins', sans-serif;
    }
`

const HeaderDropDownContainer = styled.div`
    display: grid;
    gap: 10px;

    > p {
        font-size: 12px;
        text-transform: capitalize;
        align-self: center;
        justify-self: flex-start;
        color: #DDD;
    }

    @media screen and (min-width: 500px) {
        grid-template-columns: 0.4fr 1fr 1fr;
    }

`