import { join } from "path";
import { readdir, readFile } from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { PostStatus } from "@/components/Post";

const LESSONS_DIR = join(process.cwd(), "src/pages/make-it-stick/_lessons");

export interface LessonParams {
  params: { lesson: string };
}

export async function getLessonPaths(): Promise<LessonParams[]> {
  const lessons = await readdir(LESSONS_DIR);
  return lessons.map((l) => ({ params: { lesson: l.replace(/\.mdx$/, "") } }));
}

export interface LessonMetadata {
  lesson: number;
  title: string;
  status: PostStatus;
}

export async function getLessonData(lesson: string) {
  const lessons = await readdir(LESSONS_DIR);
  const lessonPath = lessons.find((l) => l.includes(lesson));
  const lessonBuffer = await readFile(join(LESSONS_DIR, lessonPath));

  const serializedMDX = await serialize(lessonBuffer.toString(), {
    mdxOptions: { useDynamicImport: true },
    parseFrontmatter: true,
  });

  return {
    mdxSource: serializedMDX,
    metadata: serializedMDX.frontmatter as unknown as LessonMetadata,
  };
}
