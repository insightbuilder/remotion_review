import { Img, staticFile, AbsoluteFill } from "remotion";

export const Slide2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Img src={staticFile('page6.png')} />;
        </AbsoluteFill>
    )
}