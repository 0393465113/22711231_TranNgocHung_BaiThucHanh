import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import DashBoard from './DashBoard'
import OverView from './OverView'
export default function 
() {
  return (
    <Router>
      <div className="flex">
        <Navigation />
        <div className='w-full'>
        <DashBoard/>
        <OverView/>
        </div>
        <div className="flex-1">
          <Routes>
          
          </Routes>
        </div>
      </div>
    </Router>
  )
}
