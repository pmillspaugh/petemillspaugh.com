import { serialize } from "next-mdx-remote/serialize";
import { remarkCodeHike } from "@code-hike/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { PostMetadata } from "@/components/Post";

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
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            autoImport: false,
            showCopyButton: true,
            theme: "nord",
          },
        ],
      ],
      useDynamicImport: true,
    },
    parseFrontmatter: true,
    blockJS: false,
    blockDangerousJS: true,
  });

  const backlinks = await getBacklinks(slug);

  return {
    mdxSource: serializedMDX,
    metadata: serializedMDX.frontmatter as unknown as PostMetadata,
    backlinks,
  };
}

async function getBacklinks(slug: string) {
  const backlinks: PostMetadata[] = [];

  const subdirs = readdirSync(POSTS_DIR);
  for (const subdir of subdirs) {
    const filenames = readdirSync(join(POSTS_DIR, subdir));

    for (const filename of filenames) {
      if (filename === `${slug}.mdx`) continue;

      const fileBuffer = readFileSync(join(POSTS_DIR, subdir, filename));
      const fileString = fileBuffer.toString();
      if (fileString.includes(`/${slug}`)) {
        const backlinkMetadata = (
          await serialize(fileString, { parseFrontmatter: true })
        ).frontmatter as unknown as PostMetadata;
        backlinks.push(backlinkMetadata);
      }
    }
  }

  return backlinks;
}
