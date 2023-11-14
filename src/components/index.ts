import Link from "next/link";
import { CH } from "@code-hike/mdx/components";

import Blockquote from "./Blockquote";
import Code from "./Code";
import { H2, H3 } from "./H";
import P from "./P";
import A from "./A";
import Ul from "./Ul";

import AudioSwitch from "./AudioSwitch";
import Figure from "./Figure";
import Transcription from "./Transcription";

export const components = {
  // native HTML elements
  blockquote: Blockquote,
  code: Code,
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  ul: Ul,
  // custom components
  AudioSwitch,
  Figure,
  Transcription,
  // external components
  CH,
  Link,
};
