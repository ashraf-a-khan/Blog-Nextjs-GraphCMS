import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import React from "react";
import client from "../../apollo-client";
import { GET_ALL_POSTS, GET_POST } from "../../graphql/queries";

interface Props {
  post: Post;
}

function BlogPage({ post }: Props) {
  const { query } = useRouter();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>
        Written by: {post.author.name} ({post.author.title}){" "}
      </h2>

      {post.coverImage?.url && <img src={post.coverImage.url} alt="" />}
    </div>
  );
}

export default BlogPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query({
    query: GET_POST,
    variables: {
      slug: context.params?.slug,
    },
  });

  if (!data.post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ALL_POSTS });

  const posts: Post[] = data.posts;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
