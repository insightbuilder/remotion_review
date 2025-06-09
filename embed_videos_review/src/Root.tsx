import "./index.css";
import { Composition, staticFile } from "remotion";
import { SampleTrimmedComp, SampleVidComp } from "./ReadVideo";
import { SeqVidComp } from "./SequenceVid";
import { CalculateMetadata, TimeSameVid } from "./MakeTimeSame";
import { calculateMeta, VideosInSequence } from "./SeqVidCalcMdata";
import { VideoOnCanvas } from "./VideoOnCanvas";
import { calculateMetajump, JumpCuts, SAMPLE_SECTIONS } from "./JumpCutVid";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SmallVidComp"
        component={SampleVidComp}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SeqVidComp"
        component={SeqVidComp}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SampleTrimmedComp"
        component={SampleTrimmedComp}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="TimeDurationSame"
        component={TimeSameVid}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          ending: 240
        }}
        calculateMetadata={CalculateMetadata}
        />
      <Composition
        id="VidsInSequence"
        component={VideosInSequence}
        width={1920}
        height={1080}
        defaultProps={{
          videos:[
            {
              durationInFrames: null,
              src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            },
            {
              durationInFrames: null,
              src: staticFile("small_sample.mp4"),
            },
          ],
        }}
        calculateMetadata={calculateMeta}
      />
      <Composition
        id="VidOnCanvas"
        component={VideoOnCanvas}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={300}
      />
      <Composition
        id="JumpCuts"
        component={JumpCuts}
        width={1920}
        height={1080}
        fps={30}
        defaultProps={{
          sections: SAMPLE_SECTIONS,
        }}
        calculateMetadata={calculateMetajump}
        />
    </>
  );
};
