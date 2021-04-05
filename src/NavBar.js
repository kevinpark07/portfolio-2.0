import React from 'react';
import styled from 'styled-components'

const NavBar = () => {
    return (
        <NavContainer>
            <NavTab>Home</NavTab>
            <NavTab>Projects</NavTab>
            <NavTab>Blog</NavTab>
            <NavTab>Contact</NavTab>
        </NavContainer>
    )
}

export default NavBar;

const NavContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: solid red;
    height: 10vh;
`

const NavTab = styled.span`

`