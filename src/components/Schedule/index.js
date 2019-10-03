import React from "react"
import Table from "./Table"
import { getTimeRows, parseRows } from "../../lib/helper"

const Schedule = ({ data, handleClick: onClick }) => {
  const tableData = {
    headRow: data[0].cells,
    bodyRows: {
      rows: parseRows(getTimeRows(data)),
      onClick,
    },
  }
  return (
    <div className="table-responsive">
      <Table {...tableData} />
    </div>
  )
}

export default Schedule
