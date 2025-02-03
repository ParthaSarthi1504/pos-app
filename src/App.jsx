import { useState } from 'react'
import './App.css'

import Order from './components/Order'
import Service from './components/Service'
import Card from './components/Card'

function App() {


  return (
    <div className='main-background'>
      <div className='sub-container'>
        <Service />
        {/* <Order /> */}
        <Card/>
      </div>
    </div>
  )
}

export default App
