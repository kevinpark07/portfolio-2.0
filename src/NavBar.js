import React from 'react';
import styled from 'styled-components'

const NavBar = () => {
    return (
        <NavContainer>
            <NavTab>home</NavTab>
            <NavTab>projects</NavTab>
            <NavTab>blog</NavTab>
            <NavTab>contact</NavTab>
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    background-color: whitesmoke;
    border-bottom: solid white;
`

const NavTab = styled.span`
    font-size: 18pt;
    font-weight: bold;
    font-family: Optima, sans-serif;
`