import { gql } from "@apollo/client";

export const GET_POST = gql`
  query MyQuery($slug: String) {
    post(where: { slug: $slug }) {
      id
      slug
      tags
      title
      updatedAt
      publishedAt
      coverImage {
        url
        height
        width
      }
      author {
        id
        name
        title
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query MyQuery {
    posts {
      id
      slug
      tags
      title
      updatedAt
      publishedAt
      coverImage {
        url
        height
        width
      }
      author {
        id
        name
        title
      }
    }
  }
`;

export { GET_ALL_POSTS };
