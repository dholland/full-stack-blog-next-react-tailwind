import { Children } from "react";
import Page from "@/ui/page";
import Container from "@/ui/container";
import TableOfContents from "./toc";
import Section from "./section";
import Heading from "./heading";
import BlockSnippet from "./snippets/block";
import InlineSnippet from "./snippets/inline";
export { Section, Heading, BlockSnippet, InlineSnippet };

export default function BlogPost({ children, title, description, canonical }) {
  const sections = Children.toArray(children).filter(
    (child) => child.type.displayName === "BlogPostSection"
  );
  return (
    <Page title={title} description={description} canonical={canonical}>
      <Container>
        <article className="flex">
          <TableOfContents sections={sections} />
          <div className="w-3/5">
            <h1 className="font-black text-gray-700 mt-8 mx-8 text-3xl uppercase">
              {title}
            </h1>
            {sections}
          </div>
        </article>
      </Container>
    </Page>
  );
}
