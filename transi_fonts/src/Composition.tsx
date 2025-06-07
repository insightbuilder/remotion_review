import { linearTiming, TransitionSeries } from "@remotion/transitions"
import { slide } from "@remotion/transitions/slide"
import React from "react";
import { Letter } from "./Letter";

export const MyComposition: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={30}>
        <Letter color="0b84f3">A</Letter>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Letter color="pink">B</Letter>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 45 })}
      />
      <TransitionSeries.Sequence durationInFrames={90}>
        <Letter color="green">C</Letter>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  )
};
