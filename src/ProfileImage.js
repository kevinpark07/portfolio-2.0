import React from 'react';
import styled from 'styled-components';

const ProfileImage = (props) => {
    
    const random = (array) => {
       return array[Math.floor ( Math.random() * array.length )];
    }

    return (
        <ImageContainer>
            <Image src={random(props.imgs)} alt="profile_image" />
        </ImageContainer>
    )
}

export default ProfileImage;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 40vh;
    height: 42.5vh;
    border: solid none;
    border-radius: 50%;
`