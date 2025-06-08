import { Img, staticFile, AbsoluteFill, Sequence } from "remotion";
import { Sentence1 } from "./Sentence1";


export const SentenceImgSeq: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence>
                <Img src={staticFile('frame_1.png')} />;
            </Sequence>
            <Sequence from={30} durationInFrames={40}>
                <Sentence1 />
            </Sequence>
        </AbsoluteFill>
    )
}
