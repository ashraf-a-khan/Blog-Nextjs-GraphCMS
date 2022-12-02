import { gql } from "@apollo/client";

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
