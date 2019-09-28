import React from "react"

const Icon = ({ type }) => (
  <div className="icon">
    <span>
      <i className={`icon-${type}`}></i>
    </span>
  </div>
)

export default Icon
