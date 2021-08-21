import { parameterize } from "@/modules/string";

export default function BlogSectionHeading({ children }) {
  return (
    <>
      <a name={parameterize(children)}></a>
      <h2 className="tracking-wide text-blue-500 text-2xl my-3 font-bold">
        {children}
      </h2>
    </>
  );
}

BlogSectionHeading.displayName = "BlogSectionHeading";
