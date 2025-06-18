import { AbsoluteFill } from "remotion";

export const Grid: React.FC = () => (
  <AbsoluteFill style={{
    backgroundColor: "#000",
    backgroundImage: `
      repeating-linear-gradient(to right,
         transparent 38px, #0f0 40px, transparent 42px),
      repeating-linear-gradient(to bottom,
         transparent 38px, #0f0 40px, transparent 42px)
    `,
    backgroundSize: "400px 400px",
    backgroundRepeat: "repeat",
  }} />
);