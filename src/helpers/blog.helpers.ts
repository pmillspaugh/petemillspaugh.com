import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

const POSTS_DIR = join(process.cwd(), "src/_posts");

export function getPostData(slug: string) {
  const slugFilePath = join(POSTS_DIR, `${slug}.md`);
  const slugFileContents = readFileSync(slugFilePath, "utf8");
  const { data, content: markdown } = matter(slugFileContents);
  const metadata = { ...data, slug };

  return { metadata, markdown };
}

// TODO: sort by date
export function getAllPosts() {
  const postFilenames = readdirSync(POSTS_DIR);

  const allPosts = postFilenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const { metadata: postMetadata } = getPostData(slug);
    return { ...postMetadata, slug };
  });

  return allPosts;
}

export async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    // @ts-ignore
    .use(remarkHtml)
    .process(markdown);

  const htmlContent = String(file);

  return htmlContent;
}
