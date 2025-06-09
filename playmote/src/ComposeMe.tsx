import React from "react";
import { Series } from "remotion";
import { SentenceImgSeq } from "./Image2";
import { MyTitle } from "./Title";

export const ComposeMe: React.FC = () => {
    // Following method of layering works
    // Need to understand how the duration can be 
    // controlled
    return (
        <Series>
        {/*Sequence at the top completely hides the 
        sequence below */}
            <Series.Sequence durationInFrames={120}>
                <MyTitle />
            </Series.Sequence>
            <Series.Sequence durationInFrames={120}>
                <SentenceImgSeq />
            </Series.Sequence>
        </Series>
    )
}