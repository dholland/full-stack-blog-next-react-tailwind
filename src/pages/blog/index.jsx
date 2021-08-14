import Link from "next/link";
import { getArticlesMetaData } from "@/api/blog";
import Page from "@/ui/page";
import Container from "@/ui/container";

export default function BlogIndex({ articles }) {
  return (
    <Container>
      <Page title={"Blog index"}>
        <div className="md:grid-cols-2 sm:gap-8 grid grid-cols-1 gap-5">
          {articles.map((article) => (
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
      </Page>
    </Container>
  );
}

export function getServerSideProps() {
  return {
    props: {
      articles: getArticlesMetaData(),
    },
  };
}
