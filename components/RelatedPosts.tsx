import moment from "moment";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";
import { PostType } from "../types";

interface Props {
  categories?: string[];
  slug?: string;
}

const RelativePosts = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Alakalı Yazılar" : "Son Yazılar"}
      </h3>
      {relatedPosts.map((post) => (
        <Link href={`/post/${post.slug}`} key={post.title}>
          <div className="flex items-center w-full mb-4 cursor-pointer">
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="60px"
                width="60px"
                src={post.image.url}
                className="align-middle rounded-full"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-light">
                {moment(post.createdAt).format("DD.MM.YYYY")}
              </p>
              <p className="text-md">{post.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelativePosts;
