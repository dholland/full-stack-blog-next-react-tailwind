import Page from "@/ui/page";
import Container from "@/ui/container";
import Section from "./section";
import Heading from "./heading";
import BlockSnippet from "./snippets/block";
import InlineSnippet from "./snippets/inline";
export { Section, Heading, BlockSnippet, InlineSnippet };

export default function BlogPost({ children, title, description, canonical }) {
  return (
    <Page title={title} description={description} canonical={canonical}>
      <Container>{children}</Container>
    </Page>
  );
}
