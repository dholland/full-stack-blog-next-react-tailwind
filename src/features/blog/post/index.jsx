import { Children, cloneElement, useState } from "react";

import Page from "@/ui/page";
import Container from "@/ui/container";

import TableOfContents from "./toc";
import Section from "./section";
import Heading from "./heading";
import BlockSnippet from "./snippets/block";
import InlineSnippet from "./snippets/inline";
import Tip from "./tip";
export { Section, Heading, BlockSnippet, InlineSnippet, Tip };

export default function BlogPost({ children, title, description, canonical }) {
  const sections = Children.toArray(children).filter(
    (child) => child.type.displayName === "BlogPostSection"
  );
  const [activeHeading, setActiveHeading] = useState("");

  return (
    <Page title={title} description={description} canonical={canonical}>
      <Container>
        <article className="">
          <TableOfContents sections={sections} activeHeading={activeHeading} />

          <div className="w-full md:w-3/5">
            <h1 className="font-black text-gray-700 mt-8 mx-8 text-3xl uppercase">
              {title}
            </h1>
            {sections.map((section) =>
              cloneElement(section, {
                setActiveHeading,
              })
            )}
          </div>
        </article>
      </Container>
    </Page>
  );
}
