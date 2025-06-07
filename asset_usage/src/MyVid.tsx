import { OffthreadVideo, staticFile } from "remotion";

export const VidComp: React.FC = () => {
    return <OffthreadVideo src={staticFile("/vid_code.mp4")} />;
};