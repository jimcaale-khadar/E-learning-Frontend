import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Benefits from './components/benefits';
import Course from './components/course';
import Testimonials from './components/Testimonials';
import FaqSec from './components/FaqSec';
import Footer from './components/footer';



const App = () => {
  return<>
   <Header/>
    <main>
      <Hero/>
      <Benefits/>
      <Course/>
      <Testimonials/>
      <FaqSec/>
      <Footer/>
    </main>
    

  </>
 }

export default App;
