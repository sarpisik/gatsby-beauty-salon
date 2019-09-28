import React from "react"
import { capitalizeLetter } from "../../lib/helper"
import Icon from "../Icon"

const Service = ({ icon, title, text }) => (
  <div className="services">
    <Icon type={icon} />
    <h3>{capitalizeLetter(title)}</h3>
    <p>{text}</p>
  </div>
)

export default Service
