import {loadFont} from "@remotion/google-fonts/TitanOne";
import { AbsoluteFill } from "remotion";

const { fontFamily } = loadFont();

export const CompTitan: React.FC = () => {
    return <div style={{ fontFamily, textAlign: "center", fontSize: "7em" }}>Titan Up and Away</div>
}

export const FontCompTitan = () => {
    return (
    <AbsoluteFill style={{
        background:"yellow"
    }}>
        <CompTitan />
    </AbsoluteFill> 
    );
};