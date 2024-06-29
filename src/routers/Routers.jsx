import React from 'react'
import Customerrouter from './Customerrouter'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
        <Route path='/*' element={<Customerrouter/>}/>
    </Routes>

    
  )
}

export default Routers