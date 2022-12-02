import { GET_ALL_POSTS } from "../graphql/queries";
import { GetStaticProps } from "next";
import { useQuery } from "@apollo/client";
import client from "../apollo-client";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <div className="">
      <h1>Lets build a blog</h1>

      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <div className="cursor-pointer">
            <p data-testid="post_title">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS });

  const posts: Post[] = data.posts;

  console.log(posts);
  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
};
