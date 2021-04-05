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
            {renderImages()}
            <About />
        </HomeContainer>
    )
}

export default HomePage;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: solid green;
    height: 90vh;
`
