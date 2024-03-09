import Head from "next/head";
import Tour from "@/components/Tour";
import { getPostData } from "@/helpers/garden.helpers";
import { GardenProps } from "@/components/Garden";

const TourPage = ({ posts }: GardenProps) => {
  return (
    <>
      <Head>
        <title>Pete Millspaugh | Garden Tour</title>
        <meta name="title" property="og:title" content="Pete's garden tour" />
      </Head>
      <Tour posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const TOUR = [
    "edison-bulb",
    "silly-tlds",
    "my-next-next-next-job",
    "think-small",
    "cultivating-emails",
    "weeks-of-your-life",
    "map-in-the-woods",
  ];

  const posts = await Promise.all(
    TOUR.map(async (slug) => (await getPostData(slug)).metadata)
  );

  return { props: { posts } };
}

export default TourPage;
