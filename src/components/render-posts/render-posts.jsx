import Post from "../post/post";

const RenderPosts = ({ listPosts }) => {
  return (
    <>
      {listPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default RenderPosts;
