import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion"
import { Image1 } from "./Image1"


export const ArrowFlow = () => {
  const frame = useCurrentFrame()
  const progress = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" })

  return (
    <AbsoluteFill style={{
        backgroundColor:"#000",
        backgroundImage: `
            repeating-linear-gradient(0deg, #0f0, #0f0 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, #0f0, #0f0 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: "20px 20px",
    }}>
        <div className="relative w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-20 bg-blue-500">Box A</div>
        <div className="absolute top-80 left-80 w-40 h-20 bg-green-500">Box B</div>

        <svg className="absolute w-full h-full">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                <filter id="glow">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" />
                </filter>

                <marker
                    id="arrowhead"
                    markerWidth="12"
                    markerHeight="12"
                    refX="6"
                    refY="6"
                    orient="auto-start-reverse"
                >
                    <path d="M0,0 L12,6 L0,12 Z" fill="url(#gradient)"></path> 
                </marker>
            </defs>
            <line
            x1="120"
            y1="60"
            x2={120 + progress * 300}
            y2={60 + progress * 300}
            stroke="url(#gradient)"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
            filter="url(#glow)"
            />
            <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black" />
            </marker>
            </defs>
        </svg>
        </div>
    </AbsoluteFill>
  )
}
