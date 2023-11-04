import fs from "fs";
import path from "path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Feed } from "feed";
import { PostParams, getPostData } from "@/helpers/garden.helpers";
import { PostMetadata } from "@/components/Post";
import { components } from "@/components/index";

export async function generateRssFeed(postPaths: PostParams[]) {
  const posts: Array<{
    metadata: PostMetadata;
    mdxSource: MDXRemoteSerializeResult;
  }> = [];

  let lastPublished = new Date(2023, 6, 26);
  for (const { params } of postPaths) {
    const { metadata, mdxSource } = await getPostData(params.slug);
    posts.push({ metadata, mdxSource });

    if (new Date(metadata.createdAt) > lastPublished) {
      lastPublished = new Date(metadata.createdAt);
    }
  }

  posts.sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  );

  const baseURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  const author = {
    name: "Pete Millspaugh",
    email: "peterdgmillspaugh@gmail.com",
    link: "https://twitter.com/pete_millspaugh",
  };

  const feed = new Feed({
    title: "Pete Millspaugh",
    description: "Digital gardener, mostly writing about frontend-y Web stuff.",
    author,
    id: baseURL,
    link: baseURL,
    language: "en",
    generator: "Next.js",
    favicon: `${baseURL}/icons/favicon-light.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Pete Millspaugh`,
    updated: lastPublished,
    feedLinks: {
      rss2: `${baseURL}/rss.xml`,
    },
  });

  for (const { metadata, mdxSource } of posts) {
    const url = `${baseURL}/${metadata.slug}`;
    const markup = renderToStaticMarkup(
      createElement(
        MDXRemote,
        Object.assign({ components: components }, mdxSource)
      )
    );

    feed.addItem({
      title: metadata.title,
      id: url,
      link: url,
      content: markup,
      author: [author],
      date: new Date(metadata.createdAt),
      image: `${baseURL}/images/p-logo-green.png`,
    });
  }

  fs.writeFileSync(path.join(process.cwd(), "public/rss.xml"), feed.rss2());
}
