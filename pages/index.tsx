import { GET_ALL_POSTS } from "../graphql/queries";
import { GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import client from "../apollo-client";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="">
      <h1>Lets build a blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS });

  const posts: Post[] = data.posts;

  return {
    props: {
      posts: posts,
    },
  };
};
