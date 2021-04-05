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
    border: solid gold;
`

const Image = styled.img`
    width: 500px;
    height: 500px;
`