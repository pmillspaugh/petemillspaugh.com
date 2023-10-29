import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Popover from "@/components/Popover";
import {
  PostMetadata,
  PostFormat,
  PostStatus,
  PostFormatDescription,
} from "@/components/Post";
import PlantRow from "./PlantRow";
import WhatsThis from "./WhatsThis";
import Select from "@/components/Select";

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
    <StyledGarden>
      <StyledH1>Garden</StyledH1>
      <StyledBarWrapper>
        <Popover
          trigger={
            <OuterWrapper>
              <InnerWrapper>What's this?</InnerWrapper>
            </OuterWrapper>
          }
        >
          <WhatsThis />
        </Popover>
        <StyledFiltersWrapper>
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
        </StyledFiltersWrapper>
      </StyledBarWrapper>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <PlantRow {...post} />
          </li>
        ))}
      </ul>
      {!filteredPosts.length && (
        <StyledP>
          I haven’t published anything matching this format + status just yet.
          Try resetting or choosing another filter.
        </StyledP>
      )}
    </StyledGarden>
  );
};

const StyledGarden = styled.div`
  flex-grow: 1;
`;

const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  line-height: 1.2;
  margin-top: 16px;
  margin-left: -3px;
`;

const StyledBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-bottom: 36px;
`;

const StyledFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OuterWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.textColor};
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
  border: 1px solid var(--black);
  background-color: ${(p) => p.theme.primaryBg};
  transition: background-color var(--base-timing) ease-in-out;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
`;

const StyledP = styled.p`
  font-family: var(--font-open-sans);
  font-style: italic;
`;

export default Garden;
