import Link from "next/link";
import { CH } from "@code-hike/mdx/components";

import Blockquote from "./Blockquote";
import Code from "./Code";
import { H2, H3 } from "./H";
import P from "./P";
import A from "./A";
import Details from "./Details";
import Ol from "./Ol";
import Ul from "./Ul";

import AudioSwitch from "./AudioSwitch";
import Callout from "./Callout";
import Figure from "./Figure";
import ForgettingCurve from "./ForgettingCurve";
import Transcription from "./Transcription";
import ValTownButton from "./ValTownButton";

export const components = {
  // native HTML elements
  blockquote: Blockquote,
  code: Code,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  ol: Ol,
  ul: Ul,
  // custom components
  AudioSwitch,
  Callout,
  Details,
  Figure,
  ForgettingCurve,
  Transcription,
  ValTownButton,
  // external components
  CH,
  Link,
};
