import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";

export const Deck1 = () => {
    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={40}>
                <Slide1 />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
                presentation={slide()}
                timing={linearTiming({ durationInFrames: 10})}
            />
            <TransitionSeries.Sequence durationInFrames={40}>
                <Slide2 />
            </TransitionSeries.Sequence>
        </TransitionSeries>
    );
};