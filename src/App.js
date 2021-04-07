import NavBar from './NavBar';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import { Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <AppDiv>
      <NavBar />
      <Switch>
        <Route path='/blog' render={ () => <BlogPage/>} />
        <Route path='/contact' render={ () => <ContactPage/>} />
        <Route path='/projects' render={ () => <ProjectsPage/>} />
        <Route path='/' render={ () => <HomePage/>} />
      </Switch>
    </AppDiv>
  )
}

export default App;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: solid blue;
`