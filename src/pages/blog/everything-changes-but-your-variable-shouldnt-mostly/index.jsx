import { getArticleMetaData } from "@/api/blog";

import BlogPost, {
  Section,
  Heading,
  InlineSnippet,
  BlockSnippet,
} from "@/features/blog/post";

export default function EverythingChanges({ title, description, canonical }) {
  return (
    <BlogPost title={title} description={description} canonical={canonical}>
      <Section>
        <Heading>Sometimes you feel like a nut, sometimes you don't</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repudiandae animi ea iusto vero tempora nesciunt consequatur quis,
          dolores autem reprehenderit, consectetur blanditiis, magnam assumenda
          facilis hic eligendi vitae aperiam!
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam debitis
          nulla esse quo nobis, perspiciatis fugit ab{" "}
          <InlineSnippet>asperiores eligendi</InlineSnippet> quidem tenetur
          neque explicabo, ducimus alias! Esse eveniet maxime suscipit rerum!
        </p>

        <BlockSnippet
          language="jsx"
          code={`
export default function TextComponent({}) {
return <div>hello</div>
}
    `}></BlockSnippet>
      </Section>

      <Section>
        <Heading>This would be another section for the blog post</Heading>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          cum laudantium. Autem aspernatur sunt tempore nulla ut obcaecati
          ducimus minima ratione odio error nam, repellendus exercitationem
          facere quibusdam corrupti similique!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus in
          laborum eum iure cupiditate iusto animi itaque doloribus? Doloremque
          architecto, sint quidem libero reprehenderit officia temporibus nam
          repudiandae voluptate aperiam!
        </p>
      </Section>
    </BlogPost>
  );
}

export function getServerSideProps() {
  return {
    props: {
      ...getArticleMetaData(
        "everything-changes-but-your-variable-shouldnt-mostly"
      ),
    },
  };
}
