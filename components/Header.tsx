import React from "react";
import Link from "next/link";

const CATEGORIES = [
  {
    name: "Biz Kimiz?",
    slug: "ocit",
  },
  {
    name: "İlk Yardım",
    slug: "ilkyardim",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 md:flex md:justify-between">
        <div className="block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              O<span className="text-red-700">C</span>İT Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          {CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-red-700 transition duration-700">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
