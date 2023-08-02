import Link from "next/link";
import { PostMetadata } from "./Post";

export interface BlogProps {
  postsMetadata: PostMetadata[];
}

const Blog = ({ postsMetadata }: BlogProps) => {
  return (
    <>
      <>
        <p>
          If you find yourself here on my blog placeholder, thanks for digging
          around!
        </p>
        <p>
          I have a handful of half-baked essays that I hope to start shipping
          soonish. Right now (July '23) I am having fun tinkering with and
          writing about Web/browser APIs, so my first post will likely be about
          that.
        </p>
        <h2>Posts</h2>
        <ul>
          {postsMetadata.map((postMetadata) => (
            <li key={postMetadata.slug}>
              <Link href={`/blog/${postMetadata.slug}`} passHref legacyBehavior>
                <a>{postMetadata.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};

export default Blog;
