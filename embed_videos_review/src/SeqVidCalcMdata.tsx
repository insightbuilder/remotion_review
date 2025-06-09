//Component to show Sequence of Videos with calculate
// metadata function

import { parseMedia } from "@remotion/media-parser";
import React from "react";
import { OffthreadVideo, Series, CalculateMetadataFunction } from "remotion";

type VideoToEmbed = {
    src: string;
    durationInFrames: number | null;
};

type Props = {
    videos: VideoToEmbed[];
}

export const VideosInSequence: React.FC<Props> = ({videos}) => {
    return (
        <Series>
            {videos.map((vid) => {
                if (vid.durationInFrames === null) {
                    throw new Error('Could not get video duration');
                }
                return (
                    <Series.Sequence key={vid.src} durationInFrames={vid.durationInFrames}>
                        <OffthreadVideo src={vid.src} />
                    </Series.Sequence>
                );
            })}
        </Series>
    );
};

export const calculateMeta: CalculateMetadataFunction<Props> = async ({props}) => {
    const fps = 30;
    const videos = await Promise.all([
        ...props.videos.map(async (video): Promise<VideoToEmbed> => {
            const {slowDurationInSeconds} = await parseMedia({
                src: video.src,
                fields: {
                    slowDurationInSeconds: true,
                },
            });
            return {
                durationInFrames: Math.floor(slowDurationInSeconds * fps),
                src: video.src
            };
        }),
    ]);

    const totalDurationInFrames = videos.reduce((acc, video) => acc + (video.durationInFrames ?? 0), 0);

    return {
        props: {
            ...props,
            videos,
        },
        fps,
        durationInFrames: totalDurationInFrames
    }
}