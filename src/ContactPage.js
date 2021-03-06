import React from 'react';
import styled from 'styled-components';

const ContactPage = () => {
    return (
        <ContactContainer>
           <SideImage></SideImage>
        </ContactContainer>
    )
}

export default ContactPage;

const ContactContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 90vh;
`

const SideImage = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    width: 60%;
    background-image: url("https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`