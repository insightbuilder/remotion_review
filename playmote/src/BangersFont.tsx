import {loadFont} from "@remotion/google-fonts/Bangers";
import { AbsoluteFill } from "remotion";
import { FontCompTitan, CompTitan } from "./TitanFont";

const { fontFamily } = loadFont();

const BangFont: React.FC = () => {
    return <div style={{ fontFamily, textAlign: "center", fontSize: "5em" }}>Bang Font Here</div>
}

export const CompBangFont = () => {
    return (
    <AbsoluteFill style={{
        background:"yellow"
    }}>
        <BangFont />
        <CompTitan />
    </AbsoluteFill> 
    );
};