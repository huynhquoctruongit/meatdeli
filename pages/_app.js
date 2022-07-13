import "../styles/globals.css";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Headseo from "../components/seo-header";
import Header from "../components/header";
import Footer from "../components/footer"
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  console.log(pageProps,'pageProps');
  const router = useRouter();
  const asPath = router.asPath;

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 }
  };
  return (
    <>
      <Headseo />
      <div id="wrapper" className="is-mobile">
        <Header />
        <Component {...pageProps} key={asPath} />
        <Footer/>
      </div>
    </>
  );
}

export default MyApp;
