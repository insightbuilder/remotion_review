import { AbsoluteFill, useVideoConfig } from "remotion";

export const AnimatedComposition = () => {
    const {fps, durationInFrames, width, height} = useVideoConfig();
    return (
        <AbsoluteFill
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 100,
            backgroundColor: 'white'
        }}>
            This {width} X {height}px video is seen in {durationInFrames / fps} seconds
        </AbsoluteFill>
    );
};