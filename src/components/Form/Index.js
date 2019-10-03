import React, { useState } from "react"
import Container from "./Container"

const INPUTS = [
  {
    type: "text",
    placeholder: "name",
    name: "name",
    value: "",
  },
  {
    type: "email",
    placeholder: "email",
    name: "email",
    value: "",
  },
  {
    type: "number",
    placeholder: "phone number",
    name: "phone",
    value: "",
    min: 10,
    max: 10,
  },
  {
    type: "date",
    name: "date",
    value: "",
    disabled: true,
  },
  {
    type: "time",
    name: "time",
    value: "",
    disabled: true,
  },
]

const Form = () => {
  // Form Input state.
  const [form, setForm] = useState({
    day: "",
    time: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
  })
  return <Container inputs={INPUTS} />
}

export default Form
