import React from 'react'
import Navbar from './components/navbar'
import Body from './components/body'
import Myjourney from './components/myjourney'
import Certificates from './components/certificates'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <Myjourney></Myjourney>
      <Certificates></Certificates>
    </div>
  )
}

export default App
