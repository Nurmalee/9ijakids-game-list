import styled from 'styled-components'
import { useRef, useEffect, useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import naijakids from '../images/cropped-9ijakids_logo___160px-2.png'

const Navbar = () => {

    const NavMenuContainerRef = useRef()
    const NavMenuRef = useRef()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // const NavContHeight =  NavbarContainerRef.current.getBoundingClientRect().height
        const NavHeight =  NavMenuRef.current.getBoundingClientRect().height

        if(isOpen){
            NavMenuContainerRef.current.style.height = `${NavHeight}px`
        }
        else {
            NavMenuContainerRef.current.style.height = '0px'
        }
    }, [isOpen])

    return (
        <NavbarContainer >
            <Nav>
                <NavIcons>
                    <img src={naijakids} alt="9ijakids" height="100" />
                    <MenuBars onClick={() => setIsOpen(!isOpen)} />
                </NavIcons>

                <NavMenuContainer ref={NavMenuContainerRef}>
                    <NavMenu  ref={NavMenuRef}>
                        <li>home</li>
                        <li>shop</li>
                        <li>activity books</li>
                        <li>blog</li>
                        <li>log in</li>
                    </NavMenu>
                </NavMenuContainer>   
            </Nav>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`

`

const Nav = styled.div`
    width: 90vw;
    max-width: 1000px;
    margin: 0 auto;
    
    @media screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const NavIcons = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
`

const MenuBars = styled(MenuIcon)`
    height: 35px;
    cursor: pointer;

    @media screen and (min-width: 800px) {
        display: none;
    }
`

const NavMenuContainer = styled.div`
    @media screen and (min-width: 800px) {
        height: auto !important;
    }
`

const NavMenu = styled.ul`
    list-style-type: none;
    text-align: center;
    border-top: 3px solid skyblue;

    > li {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
        padding: 15px 10px;
        display: block;
        border-bottom: 1px solid #ddd;
        color: #444;
        cursor: pointer;

        &:first-of-type {
            color: burlywood;
            border-bottom: 4px solid burlywood;
        }

        &:hover {
            color: burlywood;
        }
    }

    @media screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        border-top: none;

        > li {
            border-bottom: none;
            padding: 15px;
        }
    }

`
