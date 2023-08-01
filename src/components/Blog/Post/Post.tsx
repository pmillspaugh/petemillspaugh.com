export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
}

export interface PostProps {
  post: {
    metadata: PostMetadata;
    htmlContent: string;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <>
      <>
        <>
          <div>{post.metadata.date}</div>
          <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
        </>
      </>
    </>
  );
};

export default Post;
