
const DataInput = ({tableParameters, setTableParameters}) => {

  if (tableParameters === 1) {
    return (
      <>
        <h2>Number of columns</h2>
        <input type="number"/>
        <button onClick={() => setTableParameters(tableParameters+1)}>Set columns</button>
      </>
    )
  }
  if (tableParameters === 2) {
    return (
      <>
        <h2>Enter the input field types</h2>
        <input type="text"/>
        <button onClick={() => setTableParameters(tableParameters+1)}>Set Fields</button>
      </>
    )
  }
  else {
    return (
      <>
        <h2>Enter your data</h2>
        <input type="text"/>
        <button>Add row</button>
      </>
    )
  }
}

export default DataInput