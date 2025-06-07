import React from "react";
import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame } from "remotion";

export const ImgComp: React.FC = () => {
    const frame = useCurrentFrame();
    return (
        <AbsoluteFill>
            <AbsoluteFill>
                <h1>This is filled absolutely</h1>
            </AbsoluteFill>
            <Sequence>
                <Img src={staticFile(`/frame_1.png`)} />
            </Sequence>
            {/* unable to see  */}
            <Sequence from={60} durationInFrames={30}>
                <h1>This is a Image</h1>
            </Sequence>
        

        </AbsoluteFill>
    );  
};