import { useState } from 'react'
import Table from './components/Table'

function App() {

  return (
    <div id='main'>
      <h1>Table Creator</h1>
      <p>In this first version you will be able to set the number of columns and input by hand the data to fill the rows.</p>
      <Table />
    </div>
  )
}

export default App
