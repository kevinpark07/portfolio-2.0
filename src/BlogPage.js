import React from 'react';
import styled from 'styled-components';

const BlogPage = () => {
    return (
        <BlogContainer>
           <SideImage></SideImage>
        </BlogContainer>
    )
}

export default BlogPage;

const BlogContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 90vh;
`

const SideImage = styled.div`
    display: flex;
    justify-content: center;
    height: 90vh;
    width: 60%;
    background-image: url("https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`