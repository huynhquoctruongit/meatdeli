import "../styles/globals.css";
import React, { useEffect, useState,useRef } from "react";
import HeadSEO from "../components/SEO/head";
import { useRouter } from "next/router";
import Header from "../components/header";

function MyApp({ Component, pageProps, infoSettings = {} }) {
  const router = useRouter();
  const funcSubmit = useRef();
  const asPath = router.asPath;
  return (
    <>
      <HeadSEO />
      <div id="wrapper" className="is-mobile">
        <Header funcSubmit={funcSubmit} />
        <Component funcSubmit={funcSubmit} {...pageProps} key={asPath} />
      </div>
      {/* </body> */}
    </>
  );
}

export default MyApp;
