import "../styles/globals.css";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Headseo from "../components/seo-header";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  HttpLink,
  gql,
} from "@apollo/client";

// const apolloClient = new ApolloClient({
//   uri: "https://delimeat.vn/?graphql",
//   cache: new InMemoryCache(),
//   fetchOptions: {
//     mode: 'no-cors',
//   },
//   // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
// });
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://delimeat.vn/?graphql",
    fetchOptions: {
      mode: "no-cors",
    },
  }),
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const asPath = router.asPath;

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };
  return (
    <ApolloProvider client={apolloClient}>
      <Headseo />
      <div id="wrapper" className="is-mobile">
        <Header />
        <Component {...pageProps} key={asPath} />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
