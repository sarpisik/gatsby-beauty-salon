import React from "react"
import Input from "./Input"

const Container = ({ inputs }) => {
  return <form>{inputs.map(Input)}</form>
}

export default Container
