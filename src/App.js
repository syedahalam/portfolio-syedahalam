import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contactme/Contactme';
import Footer from './components/Footer/Footer';





function App() {
	return (
    <>
  <Particles 
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:'circle',
          stroke:{
            width:6,
            color:'#f9ab00'
          }
        }
      }
    }}
    />
	<Navbar />
  <Header />
  <About />
  <Projects />
  <Contactme />
  <Footer />
  </>
	);
}

export default App;
