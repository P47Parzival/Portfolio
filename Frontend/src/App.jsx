// import React from 'react'
// import Navbar from './components/navbar'
// import Body from './components/body'
// import Myjourney from './components/myjourney'
// import Certificates from './components/certificates'
// import Footer from './components/footer'
// import About from './components/About/about'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar></Navbar>
//         <Routes>
//           <Route path='/' element={App}></Route>
//           <Route path='/about' element={<About></About>}></Route>
//         </Routes>
//       </Router>
//       <Body></Body>
//       <Myjourney></Myjourney>
//       <Certificates></Certificates>
//       <Footer></Footer>
//     </div>
//   )
// }

// export default App
import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Myjourney from './components/myjourney';
import Certificates from './components/certificates';
import Footer from './components/footer';
import About from './components/About/about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<><Body /><Myjourney /><Certificates /><Footer /></>}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
