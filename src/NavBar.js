import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <NavContainer>
            <NavTab to='/'>home</NavTab>
            <NavTab to='/projects'>projects</NavTab>
            <BlogTab href='https://kevinpark-61806.medium.com/'>blog</BlogTab>
            <NavTab to='/contact'>contact</NavTab>
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

const NavTab = styled(Link)`
    font-size: 18pt;
    font-weight: bold;
    font-family: Optima, sans-serif;
    color: black;
    text-decoration: none;
`

const BlogTab = styled.a`
    font-size: 18pt;
    font-weight: bold;
    font-family: Optima, sans-serif;
    color: black;
    text-decoration: none;
`