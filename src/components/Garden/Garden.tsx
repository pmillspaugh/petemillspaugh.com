import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Popover from "@/components/Popover";
import {
  PostMetadata,
  PostFormat,
  PostStatus,
  PostFormatDescription,
} from "@/components/Post";
import Select from "@/components/Select";
import PlantRow from "./PlantRow";
import WhatsThis from "./WhatsThis";
import styles from "./Garden.module.css";

export interface GardenProps {
  posts: PostMetadata[];
}

const Garden = ({ posts }: GardenProps) => {
  const router = useRouter();
  const { format: queryFormat, status: queryStatus } = router.query;

  const [format, setFormat] = useState<PostFormat | "">("");
  const [status, setStatus] = useState<PostStatus | "">("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (!queryFormat && !queryStatus) {
      setFormat("");
      setStatus("");
      return;
    }

    if (Object.values(PostFormat).includes(queryFormat as PostFormat)) {
      setFormat(queryFormat as PostFormat);
    }
    if (Object.values(PostStatus).includes(queryStatus as PostStatus)) {
      setStatus(queryStatus as PostStatus);
    }
  }, [queryFormat, queryStatus]);

  useEffect(() => {
    if (!format && !status && !queryFormat && !queryStatus) {
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
  }, [posts, format, status, queryFormat, queryStatus]);

  const handleFormatChange = (value: string) => {
    if (value === PostFormatDescription[PostFormat.ShowNTell]) {
      setFormat(PostFormat.ShowNTell);
      router.push({
        pathname: router.pathname,
        query: { ...router.query, format: PostFormat.ShowNTell },
      });
      return;
    }

    value === undefined ? setFormat("") : setFormat(value as PostFormat);

    router.push({
      pathname: router.pathname,
      query: { ...router.query, format: value },
    });
  };

  const handleStatusChange = (value: string) => {
    value === undefined ? setStatus("") : setStatus(value as PostStatus);

    router.push({
      pathname: router.pathname,
      query: { ...router.query, status: value },
    });
  };

  return (
    <div className={styles.garden} data-pagefind-ignore>
      <h1 className={styles.h1}>Garden</h1>
      <div className={styles.bar}>
        <Popover
          trigger={
            <OuterWrapper>
              <InnerWrapper>What's this?</InnerWrapper>
            </OuterWrapper>
          }
        >
          <WhatsThis />
        </Popover>
        <div className={styles.filters}>
          <Select
            placeholder="Format"
            value={PostFormatDescription[format] ?? ""}
            onValueChange={handleFormatChange}
            items={Object.values(PostFormatDescription)}
          />
          <Select
            placeholder="Status"
            value={status}
            onValueChange={handleStatusChange}
            items={Object.values(PostStatus)}
          />
        </div>
      </div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <PlantRow {...post} />
          </li>
        ))}
      </ul>
      {!filteredPosts.length && (
        <p className={styles.p}>
          Nothing planted is both a {PostFormatDescription[format]} and a{" "}
          {status}. You can <Link href="/garden">reset</Link> or choose another
          filter.
        </p>
      )}
    </div>
  );
};

export const OuterWrapper = styled.div`
  border-radius: 4px;
  border: 1.5px solid ${(p) => p.theme.textColor};
  padding: 3px;
  background-color: ${(p) => p.theme.tagBorderColor};
  transition: background-color var(--base-timing) ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.tagBorderColorHover};
  }
`;

export const InnerWrapper = styled.div`
  padding: 2px 8px;
  border-radius: 4px;
  border: 1.5px solid var(--black);
  background-color: ${(p) => p.theme.primaryBg};
  transition: background-color var(--base-timing) ease-in-out;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
`;

export default Garden;
