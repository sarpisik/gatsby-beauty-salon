import React from "react"
import { capitalizeLetter } from "../../lib/helper"

const Input = ({ placeholder, ...props }) => {
  return (
    <div>
      <label class="sr-only" for={props.type}>
        {capitalizeLetter(props.name)}
      </label>
      <input
        className="form-control"
        placeholder={capitalizeLetter(placeholder)}
        {...props}
        aria-describedby="basic-addon1"
      />
    </div>
  )
}

export default Input
