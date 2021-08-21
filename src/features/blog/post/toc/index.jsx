import { Children } from "react";
import { parameterize } from "@/modules/string";

export default function BlogPostTableOfContents({ sections, activeHeading }) {
  function headingFromSection(section) {
    const heading = Children.toArray(section.props.children).find(
      (child) => child.type.displayName === "BlogSectionHeading"
    );

    return heading.props.children;
  }

  return (
    <aside className="p-8 m-4 sticky hidden md:block top-0">
      <div className="absolute right-0">
        <h3 className="text-2xl font-bold uppercase mb-4">Table of contents</h3>
        <ul>
          {sections.map((section) => {
            const heading = headingFromSection(section);
            return (
              <li
                className={`font-medium tracking-wide leading-7 p-2 ${
                  activeHeading.props?.children === heading
                    ? "bg-blue-500 text-white "
                    : ""
                }`}>
                <a href={`#${parameterize(heading)}`}>{heading}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
