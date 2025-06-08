import { Img, staticFile, AbsoluteFill } from "remotion";
import { Sentence1 } from "./Sentence1";

export const Image1: React.FC = () => {
    return <Img src={staticFile("frame_1.png")} />;
}

export const SentenceImg: React.FC = () => {
    return (
        <AbsoluteFill>
            <AbsoluteFill>
                <Img src={staticFile('frame_1.png')} />;
            </AbsoluteFill>
            <AbsoluteFill>
                <Sentence1 />
            </AbsoluteFill>
        </AbsoluteFill>
    )
}
