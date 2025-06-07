import "./index.css";
import { Composition } from "remotion";
import { AnimatedComposition } from "./AnimatedComp";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Animated"
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        component={AnimatedComposition}
      />
    </>
  );
};
