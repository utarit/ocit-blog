import React from "react";
import { useRouter } from "next/router";

import RelatedPosts from "../../components/RelatedPosts";
import Categories from "../../components/Categories";
import PostDetails from "../../components/PostDetails";
import Author from "../../components/Author";
import CommentsForm from "../../components/CommentsForm";
import Comments from "../../components/Comments";
import Loader from "../../components/Loader";

import { getPostDetails, getPosts } from "../../services";
import { PostType } from "../../types";

interface Props {
  post: PostType;
}
const PostDetailsPage = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-8 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="cols-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <RelatedPosts
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;

export async function getStaticProps({ params }) {
  const post = (await getPostDetails(params.slug)) || [];

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
