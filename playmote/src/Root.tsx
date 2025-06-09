import "./index.css";
import { Composition, Sequence } from "remotion";
import { Sentence1 } from "./Sentence1";
import { SentenceImg } from "./Image1";
import React from "react";
import { SentenceImgSeq } from "./Image2";
import { MyTitle } from "./Title";
import { ComposeMe } from "./ComposeMe";
import { BasicTransition } from "./SlideTransition";
import { Deck1 } from "./Deck";
import { FontCompTitan } from "./TitanFont";
import { CompBangFont } from "./BangersFont";

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
{/*       <Composition
      id="SequenceImage"
      component={SentenceImgSeq}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
      />
      <Composition
        id="TitleMe"
        component={MyTitle}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      /> */}
      <Composition
        id="ComposeMe"
        component={ComposeMe}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Transitions"
        component={BasicTransition}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Deck1"
        component={Deck1}
        durationInFrames={70}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="Font1"
        component={CompBangFont}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
