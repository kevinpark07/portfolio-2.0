import React from 'react';
import styled from 'styled-components';

const About = () => {

    return (
        <AboutContainer>
            <h1>Kevin Park</h1>
            <Description>
                Full-Stack Web-Developer | Former Event Producer | Tennis Instructor 
            </Description>
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
    height: 100%;
    width: 40%;
    font-family: Optima, sans-serif;
    background-color: white;
`

const Description = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    padding: 2px;
`

