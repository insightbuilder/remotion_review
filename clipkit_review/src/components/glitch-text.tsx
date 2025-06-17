"use client";

import { useCurrentFrame } from "remotion";

export default function GlitchText() {
  const frame = useCurrentFrame();

  const glitchIntensity = Math.sin(frame / 10) * 10;
  const rgbOffset = Math.sin(frame / 5) * 5;

  return (
    <div
      style={{
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "5rem",
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          position: "absolute",
          color: "cyan",
          transform: `translate(${rgbOffset}px, ${glitchIntensity}px)`,
          mixBlendMode: "screen",
        }}
      >
        GLITCH
      </div>
      <div
        style={{
          position: "absolute",
          color: "magenta",
          transform: `translate(${-rgbOffset}px, ${-glitchIntensity}px)`,
          mixBlendMode: "screen",
        }}
      >
        GLITCH
      </div>
      <div style={{ color: "black", opacity: 0.8 }}>GLITCH</div>
    </div>
  );
}