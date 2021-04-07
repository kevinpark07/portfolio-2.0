import React from 'react';
import styled from 'styled-components';

const About = () => {

    return (
        <AboutContainer>
            <Title>Kevin Park</Title>
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
    padding: 10px;
    justify-content: flex-start;
    font-weight: bold;
`

const Title = styled.h1`
    font-family: Courier New;
`