import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";

import { PostType } from "../types";

import AuthorDate from "./AuthorDate";

interface Props {
  post: PostType;
}
const PostDetails = ({ post }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.image.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <AuthorDate
            author={post.author}
            createdAt={post.createdAt}
            isDetails
          />
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <div className="post-content">
          <RichText
            renderers={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-semibold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h2 className="text-xl font-semibold">{children}</h2>
              ),
              h4: ({ children }) => (
                <h2 className="text-lg font-semibold">{children}</h2>
              ),
              h5: ({ children }) => (
                <h2 className="text-base font-semibold">{children}</h2>
              ),
              h6: ({ children }) => (
                <h2 className="text-sm font-semibold">{children}</h2>
              ),
              code: ({ children }) => (
                <code className="text-gray-800 bg-gray-100 whitespace-normal p-1 border-gray-200 border rounded-md">
                  {children}
                </code>
              ),
              code_block: ({ children }) => (
                <pre className="text-gray-800 bg-gray-100 whitespace-normal p-1 border-gray-200 border rounded-md">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-4">{children}</ol>
              ),
            }}
            content={post.content.raw}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
