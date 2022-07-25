import React from 'react';
import Feature from './components/feature';
import Header from './components/header';
import About from './components/about';
import Aboutimage1 from './images/about.png';
import Aboutimage2 from './images/download.png'
import Presentation from './components/presentation';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={Aboutimage1} title='Comes with all you need for daily life' button="Get the App" />
      <Presentation />
      <About image={Aboutimage2} title='Download and get the app now' button="Download" />
      <Contact />
    </div>
  );
}

export default App;
