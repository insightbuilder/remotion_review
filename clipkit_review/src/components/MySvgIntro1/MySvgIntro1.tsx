import React from "react"
import "./MySvgIntro1.css"

const arrowStyle: React.CSSProperties = {
  stroke: "lime",
  strokeWidth: 3,
  fill: "gold",
}

export default function MySvgIntro1() {
  return (
    <svg viewBox="0 0 640 480">
        <g className="layer">
        <title>Layer 1</title>
        <rect fill="#c92222" height="61" id="svg_4" stroke="#000000" strokeWidth="5" width="144" x="90" y="79"/>
        <path d="m183,224.03c0,0 108.54,-93.54 198.63,-31.6c90.09,61.94 65.12,107.45 65.12,107.45c0,0 -35.82,77.11 -51.01,98.6c-15.2,21.49 -121.56,-102.39 -121.56,-102.39c0,0 -91.17,-72.05 -91.17,-72.05z" className="svgintro" id="svg_1" />
        </g>
    </svg>
  )
}
