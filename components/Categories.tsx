import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { CategoryType } from "../types";

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Kategoriler</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer block pb-3 mb-3 transition duration-700 hover:text-pink-600">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
