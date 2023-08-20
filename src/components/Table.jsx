import './table.css'

const Table = () => {
  return (
    <table className="table-rf">
      <TableHeader />
      <TableBody />
    </table>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Semana #</th>
        <th>Receptor</th>
        <th>Fecha</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Joana, Alice, Bob</td>
        <td>Date</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Erick, Fred, Dan</td>
        <td>Date</td>
      </tr>
    </tbody>
  )
}

export default Table