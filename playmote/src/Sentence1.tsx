import { AbsoluteFill, useVideoConfig } from "remotion";

export const Sentence1 = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60
      }}
      >
        The {width} X {height}px video is {durationInFrames / fps} seconds long.
      </AbsoluteFill>
  );
};
