import "../styles/globals.css";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Headseo from "../components/seo-header";
import Header from "../components/header";
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, infoSettings = {} }) {
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
        <motion.main
          key={router.pathname}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear", duration: 0.3 }} // Set the transition to linear
        >
          <Component {...pageProps} key={asPath} />
        </motion.main>
      </div>
    </>
  );
}

export default MyApp;
