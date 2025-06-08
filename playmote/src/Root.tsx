import "./index.css";
import { Composition, Sequence } from "remotion";
import { Sentence1 } from "./Sentence1";
import { SentenceImg } from "./Image1";
import React from "react";
import { SentenceImgSeq } from "./Image2";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Sentence1"
        component={Sentence1}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Combined"
        component={SentenceImg}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
      id="SequenceImage"
      component={SentenceImgSeq}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
      />
    </>
  );
};
