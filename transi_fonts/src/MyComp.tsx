import { loadFont } from "@remotion/google-fonts/TitanOne";
const { fontFamily } = loadFont();

export const GoogleFontsComp: React.FC = () => {
  return <div style={{ fontFamily }}>Hello, Google Fonts</div>;
};