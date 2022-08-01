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
const apolloClient = new ApolloClient({
  uri: 'https://delimeat.vn/?graphql',
  cache: new InMemoryCache()
});
// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "https://delimeat.vn/?graphql",
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//       "Access-Control-Allow-Origin": "http://localhost:3000",
//       "Access-Control-Allow-Credentials": true,
//       "Request-Method": "POST",
//       "Remote-Address" : "103.28.36.155:443",
//       "Access-control-Allow-Headers":
//         "Authorization, Content-Type, woocommerce-session, graphql_cors_settings",
//       "Access-Control-Expose-Headers": "woocommerce-session",
//       "Access-control-Max-Age": 600,
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//       // "Cache-Control:" : "no-cache, must-revalidate, max-age=0",
//       "Woocommerce-Session":
//         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbG9jYWxob3N0OjMwMDAiLCJpYXQiOjE2NTkzMzU0NjIsIm5iZiI6MTY1OTMzNTQ2MiwiZXhwIjoxNjU5NTA4MjYyLCJkYXRhIjp7ImN1c3RvbWVyX2lkIjoxfX0.jQoz4XB7JvN_pQ0zEr0s9dhqdOmmcFVWLcD2wO-tnlA",
//       // "X-Content-Type-Options:" : "nosniff",
//       // "X-Robots-Tag" : "noindex"
//     },
//     credentials: "include",
//     // fetchOptions: {
//     //   mode: 'no-cors'
//     // }
//   }),
// });
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
