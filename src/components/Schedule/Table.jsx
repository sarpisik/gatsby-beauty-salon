import React from "react"
import { capitalizeLetter } from "../../lib/helper"

const colors = {
  reserved: "bg-danger",
  free: "bg-success",
  break: "bg-warning",
}

const TableCell = (title, index) => (
  <td
    key={index}
    data-index={index}
    data-status={title}
    className={`${colors[title]}`}
  >
    {colors[title] ? "" : capitalizeLetter(title)}
  </td>
)

const TableRow = onClick => ({ _key, cells }, index) => {
  return (
    <tr onClick={onClick} key={_key} data-id={_key} data-index={index}>
      {cells.map(TableCell)}
    </tr>
  )
}

const Table = ({ headRow, bodyRows }) => {
  return (
    <table className="table table-bordered table-striped text-center">
      <thead>
        <tr>{headRow.map(TableCell)}</tr>
      </thead>
      <tbody>{bodyRows.rows.map(TableRow(bodyRows.onClick))}</tbody>
    </table>
  )
}

export default Table
