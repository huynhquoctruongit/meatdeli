import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import HeadSEO from "../components/SEO/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, infoSettings = {} }) {
  const router = useRouter();
  const asPath = router.asPath;
  return (
    <>
      <HeadSEO />
      <div id="wrapper" className="is-mobile">
        <Component {...pageProps} key={asPath} />
      </div>
      {/* </body> */}
    </>
  );
}

export default MyApp;
