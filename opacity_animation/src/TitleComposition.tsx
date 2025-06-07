import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";

const Title: React.FC<{title: string}> = ({title}) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateRight: "clamp",
    })
    return (
        <div style={{opacity, textAlign: 'center', fontSize: '7em'}}>{title}</div>
    );
};

export const MyVideo = () => {
    return (
        <AbsoluteFill>
            <Sequence durationInFrames={30}>
            <Title title="Hello There"/>
            </Sequence>
            <Sequence from={30}>
                <Title title="How are you?"/>
            </Sequence>
        </AbsoluteFill>
    );
};