import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App