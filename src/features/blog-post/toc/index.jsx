import { Children } from "react";
import { parameterize } from "@/modules/string";

export default function BlogPostTableOfContents({ sections }) {
  function headingFromSection(section) {
    const heading = Children.toArray(section.props.children).find(
      (child) => child.type.displayName === "BlogSectionHeading"
    );

    return heading.props.children;
  }

  return (
    <aside>
      <ul>
        {sections.map((section) => {
          const heading = headingFromSection(section);
          return (
            <li>
              <a href={`#${parameterize(heading)}`}>{heading}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
