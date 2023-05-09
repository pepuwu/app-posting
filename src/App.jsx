import React, { useState } from 'react'
import Navbar from './components/nav'
import Body from './components/inicio'
import './App.css'

function App() {
  const [registerList, setRegisterList] = useState([])
  return (
    <React.Fragment>
      <Navbar />
      <Body saveRegister={setRegisterList} taskRegistered={registerList} />
    </React.Fragment>
  )
}

export default App
