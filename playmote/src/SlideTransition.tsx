import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide"
import { SentenceImg } from "./Image1";
import { MyTitle } from "./Title";

export const BasicTransition = () => {
    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={40}>
                <SentenceImg />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
                presentation={slide()}
                timing={linearTiming({ durationInFrames: 30})}
            />
            <TransitionSeries.Sequence durationInFrames={60}>
                <MyTitle />
            </TransitionSeries.Sequence>
        </TransitionSeries>
    );
};