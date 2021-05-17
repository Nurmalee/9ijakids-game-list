import styled from 'styled-components'
import {useState} from 'react'
import {UseGameContext} from '.././GameContext/GameContext'
import {SearchIcon} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'


const Header = () => {

    const {setGamesList, gameSorter} = UseGameContext()

    const gameGroupType = ["All", ...new Set (gameSorter.map(game => game.Group))]
    const gameLevelType = ["All", ...new Set (gameSorter.map(game => game.Level))]

    const [searchInput, setSearchInput] = useState('')
    
    const handleSearch = (e) => {
        e.preventDefault()

        const searchedGame = gameSorter.filter(game => game.Topic === searchInput)

        setGamesList(searchedGame)
    }

    const handleFilterByGroup = (gameGroup) => {
        setGamesList(gameSorter.filter(game => game.Group === gameGroup))

        if(gameGroup === "All"){
            setGamesList(gameSorter)
        }
        setSearchInput('')
    }

    const handleFilterByLevel = (gameLevel) => {
        setGamesList(gameSorter.filter(game => game.Level === gameLevel))

        if(gameLevel === "All"){
            setGamesList(gameSorter)
        }

        setSearchInput('')
    }

    return (
        <HeaderContainer>
            <HeaderNav>
                <HeaderLeft>
                    9ijaKids Games
                </HeaderLeft>

                <HeaderSearch>
                    <form onSubmit={handleSearch}>
                        <FormInput>
                            <SearchIcon style={{height: "14px"}} />
                            <input type="text" placeholder="Search games by topic" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                        </FormInput>
                        <button type="submit">search</button>
                    </form>

                </HeaderSearch>

                <HeaderRight>
                    <ul>
                        <li>group <ChevronDownIcon style={{height: "16px"}} />
                            <ul>
                                {
                                    gameGroupType.map((groupName, index) =>  <li key={index} onClick={() => handleFilterByGroup(groupName)}>{groupName}</li>)
                                }
                            </ul>
                        </li>
                        <li>level <ChevronDownIcon style={{height: "16px"}} /> 
                            <ul>
                                {
                                    gameLevelType.map((level, index) => <li key={index} onClick={() => handleFilterByLevel(level)}>{level}</li>)
                                }
                            </ul>
                        </li>
                    </ul>
                </HeaderRight>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    background-color: #222;
    color: white;
    box-shadow: 0 2px 5px #ccc;
    padding: 15px 10px;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
`

const HeaderNav = styled.nav`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
        display: flex;
        align-items: center;
    }
`

const HeaderLeft = styled.p`
    font-family: 'Lobster', cursive;
    font-size: 20px;
    flex: 0.2;
    margin-bottom: 10px;

    @media screen and (min-width: 600px) {
        margin-bottom: 0;
    }
`

const HeaderSearch = styled.div`
    flex: 0.55;
    margin-bottom: 10px;

    @media screen and (min-width: 600px) {
        margin-bottom: 0;
    }
    
    > form {
        display: flex;
        align-items: center;
        width: 100%;
        

        >  button {
            padding: 10px 20px;
            margin-left: 5px;
            flex: 0.1;
            display: inline-block;
            height: 100%;
            border: 1px solid;
            border-radius: 3px;
            font-size: 11px;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
        }

        @media screen and (min-width: 600px) {
            margin: 0 auto;
            width: 90%;
        }
    }

`

const FormInput = styled.div`
    border: 1px solid #777;
    border-radius: 3px; 
    display: flex;
    align-items: center;
    padding: 7px;
    flex: 0.9;

    > input {
        flex: 1;
        outline: none;
        border: none;
        padding: 0 10px;
        font-size: 14px;
        background-color: transparent;
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 20px;
    }
`

const HeaderRight = styled.div`
    flex: 0.25;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 600px) {
        justify-content: flex-end;
    }

    > p {
        margin-right: 10px;
    }

    > ul {
        list-style-type: none;
        display: flex;
        align-items: center;

        > li {
            border: 1px solid transparent;
            border-radius: 3px;
            padding: 7px 15px;
            text-transform: capitalize;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 13px;
            display: flex;
            align-items: center;
            position: relative;

            &:first-of-type {
                margin-right: 2px;
            }

            &:hover {
                background-color: whitesmoke;
                color: black;
                border: 1px solid whitesmoke;

                > ul {
                    display: block;
                }
            }

            > ul {
                position: absolute;
                list-style-type: none;
                background-color: whitesmoke;
                color: #444;
                display: none;
                width: 130px;
                /* border: 1px solid red; */
                top: 36px;
                left: -1px;
                border-radius: 3px;
                box-shadow: 0 0 5px #777;

                > li {
                    border: 1px solid transparent;
                    border-radius: 3px;
                    padding: 10px 15px;
                    font-size: 13px;
                    text-transform: capitalize;
                    cursor: pointer;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                    font-size: 11px;

                    &:hover {
                        background-color: #444;
                        color: white;
                        border: 1px solid whitesmoke;
                    }
                }
            }
        }
    }
`


