import { serialize } from "next-mdx-remote/serialize";
import { remarkCodeHike } from "@code-hike/mdx";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

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
    mdxOptions: {
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            autoImport: false,
            // lineNumbers: true,
            showCopyButton: true,
            theme: "nord",
          },
        ],
      ],
      useDynamicImport: true,
    },
    parseFrontmatter: true,
  });

  const backlinks = await getBacklinks(slug);

  return {
    mdxSource: serializedMDX,
    metadata: serializedMDX.frontmatter,
    backlinks,
  };
}

async function getBacklinks(slug: string) {
  const backlinks = [];

  const subdirs = readdirSync(POSTS_DIR);
  for (const subdir of subdirs) {
    const filenames = readdirSync(join(POSTS_DIR, subdir));

    for (const filename of filenames) {
      if (filename === `${slug}.mdx`) continue;

      const fileBuffer = readFileSync(join(POSTS_DIR, subdir, filename));
      const fileString = fileBuffer.toString();
      if (fileString.includes(slug)) {
        const backlinkFrontmatter = (
          await serialize(fileString, { parseFrontmatter: true })
        ).frontmatter;
        backlinks.push(backlinkFrontmatter);
      }
    }
  }

  return backlinks;
}
