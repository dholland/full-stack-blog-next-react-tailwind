import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function filter(articles, tag) {
  if (!tag) return articles;
  return articles.filter((article) => article.tags.includes(tag));
}

export default function BlogIndex({ articles, tags }) {
  const { query } = useRouter();

  const [selectedTag, setSelectedTag] = useState(undefined);

  useEffect(() => {
    setSelectedTag(query.tag);
  }, [query.tag]);

  return (
    <div>
      <ul className="flex my-8 space-x-4 ">
        {tags.map((tag) => (
          <li>
            <Link href={`/blog/${tag}`}>
              <a
                className={` ${
                  tag === query.tag
                    ? "text-red-600 underline"
                    : " text-blue-600"
                }`}>
                {tag}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-8 md:grid-cols-2 sm:gap-8 grid grid-cols-1 gap-5">
        {filter(articles, selectedTag).map((article) => (
          <Link href={article.href}>
            <div className="hover:scale-105 hover:shadow-xl overflow-hidden transition-scale duration-200 ease-in-out transform border-2 border-gray-100 rounded-lg">
              <img src={article.image} className="w-full" />
              <h2 className="my-4 mx-8 font-bold text-xl">{article.title}</h2>
              <div>Posted in: {article.category}</div>
              <p className="my-4 mx-8">{article.teaser}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
