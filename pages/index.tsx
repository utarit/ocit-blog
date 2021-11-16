import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import PostCard from "../components/PostCard";
import RelatedPosts from "../components/RelatedPosts";
import Categories from "../components/Categories";

import { getFeaturedPosts, getPosts } from "../services";
import { PostType } from "../types";
import FeaturedPosts from "../sections/FeaturedPosts";

interface Props {
  posts: { node: PostType }[];
  featuredPosts: PostType[];
}

// Photo by Dimitri Iakymuk on Unsplash
export default function Home({ posts, featuredPosts }: Props) {
  return (
    <div className="container mx-auto px-8 mb-8">
      <Head>
        <title>OCİT Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts posts={featuredPosts} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <RelatedPosts />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  const featuredPosts = (await getFeaturedPosts()) || [];
  return {
    props: {
      posts,
      featuredPosts,
    },
    revalidate: 600,
  };
};
