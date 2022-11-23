
import {  ThemeProvider } from '@mui/system';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Banner from './components/banner';
import SlideShow from './components/slideshow';
import Footer from './components/footer';
import AppBar from './components/appbar/appBar';
import TutorialMenu from './components/TutorialMenu';
function App() {
  useEffect(() =>{
    document.title = "E-Board - Home"
  }, []);
  return (
    <ThemeProvider theme={theme}> 
    <Container
    maxWidth = "xl"
    sx ={{
      background : '#fff'
    }}
    >
      <AppBar/>
      < Banner />
      <SlideShow/>
      <Footer/>
      <TutorialMenu/>
    </Container>
    </ThemeProvider>
    
     
    
  );
}

export default App;

