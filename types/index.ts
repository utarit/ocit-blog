interface Image {
  url: string;
}

export interface CommentType {
  name: string;
  email: string;
  content: string;
  createdAt: string;
}

export interface CategoryType {
  name: string;
  slug: string;
}

export interface AuthorType {
  name: string;
  bio: string;
  image: Image;
}

export interface PostType {
  title: string;
  excerpt: string;
  createdAt: string;
  id: string;
  content: { html: any; raw: any };
  image: Image;
  author: AuthorType;
  slug: string;
  categories: CategoryType[];
  comments: CommentType[];
}
