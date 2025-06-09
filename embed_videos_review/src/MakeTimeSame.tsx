import React from "react";
import { OffthreadVideo, staticFile, CalculateMetadataFunction } from "remotion";
import { parseMedia } from "@remotion/media-parser";

type MyCompProps = {
    src: string;
    ending: number;
};

export const TimeSameVid: React.FC<MyCompProps> = ({src, ending}) => {
    return <OffthreadVideo src={src} endAt={ending}/>
}

export const CalculateMetadata: CalculateMetadataFunction<MyCompProps> = async ({props}) => {
    const {slowDurationInSeconds, dimensions} = await parseMedia({
        src: props.src,
        fields: {
            slowDurationInSeconds: true,
            dimensions: true,
        },
    });

    if (dimensions === null) {
        throw new Error('Not a video file');
    }

    const fps = 30;

    return {
        durationInFrames: Math.floor(slowDurationInSeconds * fps),
        fps, 
        width: dimensions.width,
        height: dimensions.height
    };
};