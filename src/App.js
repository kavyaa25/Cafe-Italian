import React from 'react';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import  './App.css';

const App = () => {
  return (
    <BackgroundContainer>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </BackgroundContainer>
  );
};

export default App;
