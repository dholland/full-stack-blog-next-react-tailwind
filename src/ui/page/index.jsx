import Head from "next/head";
import Layout from "@/features/layout";

export default function Page({
  children,
  title,
  description,
  canonical,
  noIndex = false,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {canonical && (
          <link
            rel="canonical"
            ref={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}${canonical}`}
          />
        )}
        {noIndex && <meta name="robots" content="noindex" />}
      </Head>
      <Layout>{children}</Layout>
    </>
  );
}
