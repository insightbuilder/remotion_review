import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

export const SmallSample: React.FC = () => {
  return <OffthreadVideo src={staticFile("small_sample.mp4")}/>;
};

export const SmallSampleTrim: React.FC = () => {
  return <OffthreadVideo src={staticFile("small_sample.mp4")} startFrom={300} endAt={480} />;
}

export const SmallSampleTrim1: React.FC = () => {
  return <OffthreadVideo src={staticFile("small_sample.mp4")} startFrom={480} endAt={600} />;
}

export const SampleTrimmed: React.FC = () => {
  return (
    <OffthreadVideo
      src={staticFile("small_sample.mp4")}
      playbackRate={2}
      style={{
        width: 640,
        height: 360,
        position: 'absolute',
        top: 100,
        left: 100
      }}
      />
  );
}

export const SampleVidComp = () => {
  return(
    <AbsoluteFill>
      <SmallSample />
    </AbsoluteFill>
  )
}

export const SampleTrimmedComp = () => {
  return (
    <AbsoluteFill>
      <SampleTrimmed />
    </AbsoluteFill>
  )
}