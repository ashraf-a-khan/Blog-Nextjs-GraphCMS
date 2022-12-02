interface Post {
  __typename: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: Image;
  author: Author;
}

interface Image {
  __typename: string;
  url: string;
  height: number;
  width: number;
}

interface Author {
  __typename: string;
  id: string;
  name: string;
  title: string;
}
