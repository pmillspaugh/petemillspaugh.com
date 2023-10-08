import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";

const POSTS_DIR = join(process.cwd(), "src/writing");

export interface PostParams {
  params: { slug: string };
}

export function getPostPaths() {
  const postFilenames = [];

  const subdirs = readdirSync(POSTS_DIR);
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
  let foundPost = false;
  let postPath: string;
  let dir: string;

  const subdirs = readdirSync(POSTS_DIR);
  for (const subdir of subdirs) {
    const match = readdirSync(join(POSTS_DIR, subdir)).find((path) =>
      path.includes(slug)
    );

    if (match) {
      foundPost = true;
      dir = subdir;
      postPath = match;
      break;
    }
  }

  if (!foundPost) throw new Error(`No post found for slug: ${slug}`);

  const postFileBuffer = readFileSync(join(POSTS_DIR, dir, postPath));
  const serializedMDX = await serialize(postFileBuffer.toString(), {
    mdxOptions: { remarkPlugins: [] },
    parseFrontmatter: true,
  });

  return {
    mdxSource: serializedMDX,
    metadata: serializedMDX.frontmatter,
  };
}
