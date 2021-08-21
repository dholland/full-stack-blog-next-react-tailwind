import { getArticlesMetaData, getTags } from "@/api/blog";

import Page from "@/ui/page";
import Container from "@/ui/container";
import BlogIndex from "@/features/blog/index";

export default function BlogIndexByTagPage({ articles, tags }) {
  return (
    <Container>
      <Page title={"Blog index"}>
        <BlogIndex articles={articles} tags={tags} />
      </Page>
    </Container>
  );
}

export function getServerSideProps() {
  return {
    props: {
      articles: getArticlesMetaData(),
      tags: getTags(),
    },
  };
}
