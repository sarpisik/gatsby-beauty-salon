import React, { useState, useEffect } from "react"
import axios from "axios"
import SectionHeader from "../components/SectionHeader"
import Layout from "../components/layout"
import Schedule from "../components/Schedule"
import sanityClient from "@sanity/client"
import { setResponse, capitalizeLetter } from "../lib/helper"
import Form from "../components/Form/Index"

// TODO: SET LOADING HANDLER
// TODO: SET ERROR HANDLER

const sanityOptions = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
}

const client = sanityClient(sanityOptions)
const query = `*[_type == "schedule" && _id == "${process.env.GATSBY_SANITY_SCHEDULE_ID}" ]`
const params = {}

// Tabs
const Tabs = ["schedule", "form"]

const Tab = activeTabIndex => (name, index) => (
  <li
    key={name}
    role="presentation"
    className={`${activeTabIndex === index ? "active" : ""}`}
  >
    <a>{capitalizeLetter(name)}</a>
  </li>
)

const Reservation = () => {
  const [state, setState] = useState({
    isLoading: true,
    error: false,
  })

  // Active Tab state.
  const [active, setActive] = useState(0)

  // Form Input state.
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    rowID: "",
    cellIndex: "",
  })

  const tableData = (state.weeklySchedule && state.weeklySchedule.rows) || null

  const handleClickTable = ({
    target: {
      dataset: { index: cellIndex, status },
    },
    currentTarget: {
      dataset: { index: rowIndex, id: rowID },
    },
  }) => {
    if (cellIndex) {
      if (status === "free")
        return setReservation({
          rowID,
          cellIndex,
          date: tableData[0].cells[cellIndex],
          // TODO: fix row index
          time: tableData[rowIndex].cells[0],
        })
    }
    window.alert(capitalizeLetter("please pick a valid date."))
  }
  console.log(reservation)

  const handleSubmit = formData => {
    console.log(formData)
  }

  useEffect(() => {
    const handleResponse = setResponse(setState)
    // Fetch data once mounted.
    client
      .fetch(query, params)
      .then(handleResponse)
      .catch(handleResponse)

    // Listen for updates
    const subscription = client.listen(query, params).subscribe(handleResponse)

    // Unsubscribe listen on unmounted
    return () => subscription.unsubscribe()
  }, [])
  return (
    <Layout>
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center animate-box ">
              <SectionHeader title="request reservation" />
            </div>
          </div>
          <div className="row">
            {state.isLoading ? (
              "Loading..."
            ) : tableData && tableData.length > 0 ? (
              <div className="col-sm-12">
                <ul className="nav nav-tabs">{Tabs.map(Tab(active))}</ul>
                {active ? (
                  <Form onSubmit={handleSubmit} />
                ) : (
                  <Schedule data={tableData} handleClick={handleClickTable} />
                )}
              </div>
            ) : (
              "Can not load data."
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Reservation
