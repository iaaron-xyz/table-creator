import { useState } from 'react'
import Table from './components/Table'
import DataInput from './components/DataInput'

function App() {

  const [tableParameters, setTableParameters] = useState(1);

  return (
    <div id='main'>
      <h1>Table Creator</h1>
      <p>In this first version you will be able to set the number of columns and input by hand the data to fill the rows.</p>
      <DataInput tableParameters={tableParameters} setTableParameters={setTableParameters}/>
      <Table />
    </div>
  )
}

export default App
