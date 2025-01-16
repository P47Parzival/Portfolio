
import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Myjourney from './components/myjourney';
import Certificates from './components/certificates';
import Footer from './components/footer';
import About from './components/About/about';
import Contact from './components/contact/contact';
import Work from './components/Work/work';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardsContainer from './components/Social/connect';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<><Body /><Myjourney /><Certificates /><Footer /></>}/>
          <Route path="/about" element={<About />} />
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/socialcard' element={<CardsContainer />}></Route>
          <Route path='/work' element={<Work />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
