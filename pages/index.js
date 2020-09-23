import Head from "next/head";

import useFetchEntries from "../hooks/useFetchEntries";
import { getReactComponent } from "../utils/getReactComponent";

function HomePage() {
  const entries = useFetchEntries();
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {entries?.fields?.components.map((c) => {
        const component = getReactComponent(c)
        return component && component(c.fields)
      })}
    </>
  );
}

export default HomePage;
