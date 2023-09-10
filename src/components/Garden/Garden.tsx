// TODO:
// "what's this" explainer
// include explanation of status and format
// styles

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PostMetadata } from "@/helpers/garden.helpers";

enum PostFormat {
  Essay = "Essay",
  Brainstorm = "Brainstorm",
  TIL = "TIL",
  Note = "Note",
}

enum PostStatus {
  Seedling = "Seedling",
  Budding = "Budding",
  Evergreen = "Evergreen",
}
export interface GardenProps {
  posts: PostMetadata[];
}

const Garden = ({ posts }: GardenProps) => {
  const router = useRouter();
  const { format: queryFormat, status: queryStatus } = router.query;

  const [format, setFormat] = useState<PostFormat | "">("");
  const [status, setStatus] = useState<PostStatus | "">("");
  const [filteredPosts, setFilteredPosts] = useState<PostMetadata[]>(posts);

  useEffect(() => {
    if (Object.values(PostFormat).includes(queryFormat as PostFormat)) {
      setFormat(queryFormat as PostFormat);
    }
    if (Object.values(PostStatus).includes(queryStatus as PostStatus)) {
      setStatus(queryStatus as PostStatus);
    }
  }, [queryFormat, queryStatus]);

  useEffect(() => {
    if (!format && !status) {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter((post) => {
      if (format && post.format !== format) {
        return false;
      }

      if (status && post.status !== status) {
        return false;
      }

      return true;
    });

    setFilteredPosts(filtered);
  }, [format, status]);

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const format = e.target.value as PostFormat;
    setFormat(format);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, format },
    });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value as PostStatus;
    setStatus(status);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, status },
    });
  };

  return (
    <>
      <h1>Garden</h1>
      <form>
        <label htmlFor="post-format">
          Format
          <select
            value={format}
            onChange={handleFormatChange}
            name="post-format"
            id="post-format"
          >
            <option value=""></option>
            <option value={PostFormat.Essay}>{PostFormat.Essay}</option>
            <option value={PostFormat.Brainstorm}>
              {PostFormat.Brainstorm}
            </option>
            <option value={PostFormat.TIL}>{PostFormat.TIL}</option>
            <option value={PostFormat.Note}>{PostFormat.Note}</option>
          </select>
        </label>
        <label htmlFor="post-status">
          Status
          <select
            value={status}
            onChange={handleStatusChange}
            name="post-status"
            id="post-status"
          >
            <option value=""></option>
            <option value={PostStatus.Seedling}>{PostStatus.Seedling}</option>
            <option value={PostStatus.Budding}>{PostStatus.Budding}</option>
            <option value={PostStatus.Evergreen}>{PostStatus.Evergreen}</option>
          </select>
        </label>
      </form>
      <ul>
        {filteredPosts.map(({ title, slug, format, status }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>{title}</Link> - {format} | {status}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Garden;
