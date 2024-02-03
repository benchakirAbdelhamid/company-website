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


const App = ()=> {

  return (
   <>
   <NavbarMenu/>
   <Home/>
   <About/>
   <OurServicess/>
   <OurLatest/>
   <OurCustomers/>
   <LatestNews/>
   <ContactUs/>

   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />
 
   <br />
   {/* <Card/> */}
   </>
  );
}

export default App;
