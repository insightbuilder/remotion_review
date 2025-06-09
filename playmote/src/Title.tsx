import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import { Image1 } from './Image1';

const Title: React.FC<{title: string}> = ({title}) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0,20], [0, 1], {
        extrapolateRight: 'clamp',
    });
    return (
        <div style={{opacity, textAlign: 'center', fontSize: '7em'}}>{title}</div>
    )
}

export const MyTitle = () => {
    return (
        <AbsoluteFill style={{
            background:"green"
        }}>
            <Title title='Hey there'/>
            <Title title='This is so cool'/>
            {/* This is placing the image below the text */}
            <Image1 />
        </AbsoluteFill>
    )
}