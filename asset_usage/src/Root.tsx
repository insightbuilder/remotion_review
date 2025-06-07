import "./index.css";
import { Composition } from "remotion";
// import { HelloWorld } from "./HelloWorld";
import { ImgComp } from "./MyComp";
// Each <Composition> is an entry in the sidebar!
import { VidComp } from "./MyVid";
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="ImageComp"
        component={ImgComp}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        // This composition & above will be 
        // present in the remotion studio
        id="VidComp"
        component={VidComp}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
