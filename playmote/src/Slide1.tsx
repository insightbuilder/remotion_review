import { Img, staticFile, AbsoluteFill } from "remotion";

export const Slide1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Img src={staticFile('page5.png')} />;
        </AbsoluteFill>
    )
}