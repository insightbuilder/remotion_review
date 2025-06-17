"use client";

import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface TypingTextProps {
  text?: string;
  textColor?: string;
  cursorColor?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  durationInFramesToType?: number;
  cursorBlinkSpeed?: number;
}

export default function TypingText({
  text = "TYPE ME...",
  textColor = "black",
  cursorColor = "red",
  fontSize = "3rem",
  fontFamily = "'Courier New', monospace",
  fontWeight = "bold",
  durationInFramesToType,
  cursorBlinkSpeed = 15,
}: TypingTextProps) {
  const frame = useCurrentFrame();

  const actualDurationInFramesToType =
    durationInFramesToType !== undefined
      ? durationInFramesToType
      : text.length * 5;

  const visibleCharacters = Math.floor(
    interpolate(frame, [0, actualDurationInFramesToType], [0, text.length], {
      extrapolateRight: "clamp",
    })
  );

  const charactersToRender = text.slice(0, visibleCharacters).split("");

  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <span
        style={{
          fontFamily,
          fontSize,
          fontWeight,
          color: textColor,
          display: "inline-block",
        }}
      >
        {charactersToRender.map((char, index) => (
          <React.Fragment key={index}>
            {char === " " ? "\u00A0" : char}
          </React.Fragment>
        ))}
      </span>
      <span
        style={{
          display: "inline-block",
          fontFamily,
          fontSize,
          fontWeight,
          color: cursorColor,
          opacity: frame % cursorBlinkSpeed < cursorBlinkSpeed / 2 ? 1 : 0,
          marginLeft: "0.2rem",
          verticalAlign: "middle",
        }}
      >
        ▌
      </span>
    </div>
  );
}