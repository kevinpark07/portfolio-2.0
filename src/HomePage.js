import React from 'react';
import styled from 'styled-components';
import About from './About';
import GalleryImages from './GalleryImages';
import ProfileImage from './ProfileImage';

const HomePage = () => {

    const renderImages = () => {
        const images = GalleryImages();
        return <ProfileImage imgs={images} />
    }

    return (
        <HomeContainer>
            <SideImage>
                {renderImages()}
            </SideImage>
            <IntroContainer>
                <About />
            </IntroContainer> 
        </HomeContainer>
    )
}

export default HomePage;

const HomeContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 90vh;
`

const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;
    width: 40%;
`

const SideImage = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    width: 60%;
    background-image: url("https://images.unsplash.com/photo-1614800458644-1f772baee53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`


