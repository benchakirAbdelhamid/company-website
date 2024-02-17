import * as React from 'react';
import NavbarMenu from './components/Navbar';

import { Button } from "@material-tailwind/react";
import Card from './components/Card';
import Home from './components/Home';
import About from './components/About';
import OurServicess from './components/OurServices';
import OurLatest from './components/OurLatest';
import OurCustomers from './components/OurCustomers';
import LatestNews from './components/LatestNews';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import OurFeatures from './components/OurFeatures';
import Loading from './components/Loading';


const App = ()=> {

  return (
   <>
   <Loading/>
   <NavbarMenu/>
   <Home/>
   <About/>
   <OurServicess/>
   {/* <OurFeatures/> */}
   <OurLatest/>
   <OurCustomers/>
   <LatestNews/>
   <ContactUs/>
   <Footer/>
   </>
  );
}

export default App;
