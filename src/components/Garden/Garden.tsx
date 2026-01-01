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
  const { formats: queryFormats, stages: queryStages } = router.query;

  // Wait for router to be ready before reading query params
  const selectedFormats =
    router.isReady && queryFormats
      ? (typeof queryFormats === "string"
          ? queryFormats.split(",")
          : queryFormats
        ).map((f) => PostFormatDescription[f as PostFormat])
      : Object.values(PostFormatDescription).filter((f) => f !== "TIL");

  // Derive selected statuses from URL (or use defaults)
  const selectedStatuses =
    router.isReady && queryStages
      ? ((typeof queryStages === "string"
          ? queryStages.split(",")
          : queryStages) as PostStatus[])
      : Object.values(PostStatus);

  // Filter posts based on URL-derived selections
  const filteredPosts = posts.filter((post) => {
    // If no formats selected or all formats selected, show all formats
    const formatMatch =
      selectedFormats.length === 0 ||
      selectedFormats.length === Object.values(PostFormatDescription).length ||
      selectedFormats.includes(PostFormatDescription[post.format]);

    // If no statuses selected or all statuses selected, show all statuses
    const statusMatch =
      selectedStatuses.length === 0 ||
      selectedStatuses.length === Object.values(PostStatus).length ||
      selectedStatuses.includes(post.status);

    return formatMatch && statusMatch;
  });

  const handleFormatChange = (value: string[]) => {
    // Convert PostFormatDescription values to PostFormat enum values for URL
    const formatEnums = value
      .map((desc) => {
        const entry = Object.entries(PostFormatDescription).find(
          ([_, description]) => description === desc
        );
        return entry?.[0];
      })
      .filter(Boolean);

    const queryParts: string[] = [];
    if (formatEnums.length > 0) {
      queryParts.push(`formats=${formatEnums.join(",")}`);
    }
    if (queryStages) {
      const stages = Array.isArray(queryStages)
        ? queryStages.join(",")
        : queryStages;
      queryParts.push(`stages=${stages}`);
    }

    const queryString = queryParts.length > 0 ? `?${queryParts.join("&")}` : "";
    router.push(`${router.pathname}${queryString}`, undefined, {
      shallow: true,
    });
  };

  const handleStatusChange = (value: string[]) => {
    const queryParts: string[] = [];
    if (queryFormats) {
      const formats = Array.isArray(queryFormats)
        ? queryFormats.join(",")
        : queryFormats;
      queryParts.push(`formats=${formats}`);
    }
    if (value.length > 0) {
      queryParts.push(`stages=${value.join(",")}`);
    }

    const queryString = queryParts.length > 0 ? `?${queryParts.join("&")}` : "";
    router.push(`${router.pathname}${queryString}`, undefined, {
      shallow: true,
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
            placeholder="formats"
            values={Object.values(PostFormatDescription)}
            value={selectedFormats}
            onChange={handleFormatChange}
          />
          <Select
            placeholder="stages"
            values={Object.values(PostStatus)}
            value={selectedStatuses}
            onChange={handleStatusChange}
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
          No posts match the selected filters. You can{" "}
          <Link href="/garden">reset</Link> or choose other filters.
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
