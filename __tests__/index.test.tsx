import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Home from "../pages/index";

const mockedPosts = [
  {
    __typename: "Post",
    id: "ckadrlgzs00rw0152mpgs8pdq",
    slug: "graphql-schema-stitching",
    tags: ["GraphQL", "Schema"],
    title: "GraphQL Schema Stitching",
    updatedAt: "2020-11-26T19:47:39.122216+00:00",
    publishedAt: "2020-11-26T19:47:39.506768+00:00",
    coverImage: {
      __typename: "Asset",
      url: "https://media.graphassets.com/ztULlHQkSU6xyNGhZaFm",
      height: 720,
      width: 1280,
    },
    author: {
      __typename: "Author",
      id: "ckadqgca800ix011230ailipe",
      name: "Jamie Barton",
      title: "Developer Relations",
    },
  },
  {
    __typename: "Post",
    id: "ckadrhqqg00ph0108u4lauau4",
    slug: "connecting-multiple-platforms",
    tags: ["Omnichannel"],
    title: "Connecting Multiple Platforms Together",
    updatedAt: "2020-11-26T19:47:10.139034+00:00",
    publishedAt: "2020-11-26T19:47:10.459822+00:00",
    coverImage: {
      __typename: "Asset",
      url: "https://media.graphassets.com/4yHbjvC7QBWHD0ICaSWa",
      height: 720,
      width: 1280,
    },
    author: {
      __typename: "Author",
      id: "ckadqdbhk00go0148zzxh4bbq",
      name: "Ronak Ganatra",
      title: "Marketing and Growth",
    },
  },
];

describe("Home", () => {
  it("renders a post successfully", () => {
    render(<Home posts={mockedPosts} />);
    const element: HTMLParagraphElement = screen.getByTestId("post_title");
    console.log(element);
  });
});
