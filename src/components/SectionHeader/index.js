import React from "react"
import { capitalizeLetter } from "../../lib/helper"

const SectionHeader = ({ title = "", subTitle = "" }) => (
  <div className="heading-section">
    {title && <h2>{capitalizeLetter(title)}</h2>}
    {subTitle && <p>{subTitle}</p>}
  </div>
)

export default SectionHeader
