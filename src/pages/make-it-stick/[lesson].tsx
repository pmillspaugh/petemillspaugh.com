import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Lesson, { LessonProps } from "@/components/MakeItStick/Lesson";
import {
  getLessonPaths,
  getLessonData,
  LessonParams,
} from "@/helpers/makeItStick.helpers";

const LessonPage = ({ mdxSource, metadata }: LessonProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.title} />
      </Head>
      <Lesson mdxSource={mdxSource} metadata={metadata} />
    </>
  );
};

export const getStaticPaths = (async () => {
  const paths = await getLessonPaths();
  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }: LessonParams) => {
  const { mdxSource, metadata } = await getLessonData(params.lesson);
  return { props: { mdxSource, metadata } };
}) satisfies GetStaticProps;

export default LessonPage;
