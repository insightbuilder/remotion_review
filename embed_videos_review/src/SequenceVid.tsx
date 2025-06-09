import React from "react";
import { Sequence } from "remotion";
import { SmallSample, SmallSampleTrim } from "./ReadVideo";

export const SeqVidComp: React.FC = () => {
    return (
        <Sequence>
            <Sequence durationInFrames={60}>
                <SmallSample />
            </Sequence>
            <Sequence from={60}>
                <SmallSampleTrim />
            </Sequence>
        </Sequence>
    )
}