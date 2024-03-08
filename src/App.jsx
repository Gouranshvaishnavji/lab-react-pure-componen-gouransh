import { PureComponent, useState } from 'react'
import SimpleCounterComponent from '../components/SimpleCounterComponent'
import './App.css'
import PureCounterComponent  from '../components/PureCounterComponent'

function App() {

  return (
    <>
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </>
  )
}

export default App