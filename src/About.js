import React from 'react';
import styled from 'styled-components';

const About = () => {

    return (
        <AboutContainer>
            <h1>Kevin Park</h1>
            Full-Stack Web-Developer | Former Event Producer | Tennis Instructor 
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    height: 100%;
    width: 40%;
    font-family: Optima, sans-serif;
    background-color: white;
`

