import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
export const FadeIn = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // const opacity = Math.min(1, frame / 60);
  const opacity = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp"
  })

  const springy = spring({
    fps,
    frame
  })
  return (
    <AbsoluteFill
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      fontSize: 80,
    }}>
      <div style={{ opacity: opacity }}>Hello World</div>
      <div>"We are in frame {frame}"</div>
      <div style={{ transform: `scale(${springy})`}}>"We are Springy"</div>
    </AbsoluteFill>
  );
};
