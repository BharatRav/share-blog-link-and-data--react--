import Card from "./Card";
const AllPosts = ({ posts }) => {
  return (
    <main className="container flex flex-wrap gap-4 mx-auto mt-10">
      {posts &&
        posts.map((post, idx) => {
          return <Card key={idx} post={post} />;
        })}
    </main>
  );
};

export default AllPosts;
