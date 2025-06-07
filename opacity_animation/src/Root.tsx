import "./index.css";
import { Composition } from "remotion";
import { FadeIn } from "./Composition";
import { MyVideo } from "./TitleComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
      id="MyVideo"
      component={MyVideo}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
      />
    </>
  )
}
/* export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FadeIn"
        component={FadeIn}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
 */

