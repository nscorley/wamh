import React from 'react';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import WelcomeScreen from './WelcomeScreen';


const App = () => (
  <div id="bootstrap-overrides">
    <MainNavigation />
    <WelcomeScreen />
    <Footer />
  </div>
);
export default App;
