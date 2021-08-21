import { Children } from "react";
import { InView } from "react-intersection-observer";

export default function BlogPostSection({ children, setActiveHeading }) {
  const heading = Children.toArray(children).find(
    (child) => child.type.displayName === "BlogSectionHeading"
  );
  return (
    <InView
      threshold={0.2}
      onChange={(inView) => {
        if (inView) setActiveHeading(heading);
      }}>
      <section className="mt-8 mb-12 mx-8">{children}</section>;
    </InView>
  );
}

BlogPostSection.displayName = "BlogPostSection";
