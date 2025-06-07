// Letter.tsx
import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

type LetterProps = {
  color: string;
  children: string;
};

export const Letter: React.FC<LetterProps> = ({ color, children }) => {
  const frame = useCurrentFrame();

  // Animate scale in during the first 15 frames
  const scale = interpolate(frame, [0, 15], [0.5, 1], {
    extrapolateRight: 'clamp',
  });

  // Optional: fade in
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        fontSize: 200,
        color,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {children}
    </div>
  );
};