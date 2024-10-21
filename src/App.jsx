import React from 'react'
import './App.css'
import Card from './Components/CardEntorno'
import {Routes, Route } from 'react-router-dom'
import Chats from './arrays/Chats'

function App() {


  return (
    <div className='App'>

      
        <Routes className="Routes">
          <Route path='/' element={<Card />} />
          <Route path='/workspace/:workspace_id' element={<Chats />} />
        </Routes>
      
    </div>

  )
}

export default App
