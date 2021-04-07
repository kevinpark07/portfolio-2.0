import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
    return (
        <ProjectsContainer>
            <SideImage></SideImage>
        </ProjectsContainer>
    )
}

export default ProjectsPage;

const ProjectsContainer = styled.div`
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
    background-image: url("https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1071&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`