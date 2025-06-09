import React, { useCallback, useRef } from "react";
import { AbsoluteFill, useVideoConfig, OffthreadVideo } from "remotion";
export const VideoOnCanvas: React.FC = () => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const {width, height} = useVideoConfig();
 
  // Process a frame
  const onVideoFrame = useCallback(
    (frame: CanvasImageSource) => {
      if (!canvas.current) {
        return;
      }
      const context = canvas.current.getContext('2d');
 
      if (!context) {
        return;
      }
 
      context.filter = 'grayscale(100%)';
      context.drawImage(frame, 0, 0, width, height);
    },
    [height, width],
  );
 
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <OffthreadVideo
          // Hide the original video tag
          style={{opacity: 0}}
          onVideoFrame={onVideoFrame}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <canvas ref={canvas} width={width} height={height} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};