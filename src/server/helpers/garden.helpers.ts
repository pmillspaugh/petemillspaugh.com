import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";

const POSTS_DIR = join(process.cwd(), "src/pages/garden");

export interface PostMetadata {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  format: string;
  status: string;
}

export interface PostParams {
  params: { slug: string };
}

export function getPostPaths() {
  const postFilenames = [];

  const subdirs = readdirSync(POSTS_DIR).filter((path) => path !== "index.tsx");
  for (const subdir of subdirs) {
    const filenames = readdirSync(join(POSTS_DIR, subdir));
    postFilenames.push(...filenames);
  }

  const postPaths: PostParams[] = postFilenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return { params: { slug } };
  });

  return postPaths;
}

export async function getPostData(slug: string) {
  let postPath: string;
  let dir: string;

  const subdirs = readdirSync(POSTS_DIR).filter((path) => path !== "index.tsx");
  for (const subdir of subdirs) {
    const match = readdirSync(join(POSTS_DIR, subdir)).find((path) =>
      path.includes(slug)
    );
    if (match) {
      dir = subdir;
      postPath = match;
      break;
    }
  }

  const postFileBuffer = readFileSync(join(POSTS_DIR, dir, postPath));
  const serializedMDX = await serialize(postFileBuffer.toString(), {
    parseFrontmatter: true,
  });

  return {
    body: serializedMDX,
    metadata: serializedMDX.frontmatter,
  };
}
