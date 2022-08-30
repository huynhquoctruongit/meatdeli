import "../styles/globals.css";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Headseo from "../components/seo-header";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { homeGQL, getInfoCompany } from "@/geters/home";
import { apollo } from "@/api/index";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  HttpLink,
  ApolloLink,
  gql,
  createHttpLink,
} from "@apollo/client";

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */
  const session = localStorage.getItem("woo-session");
  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        "woocommerce-session": `Session ${session}`,
      },
    }));
  }

  return forward(operation);
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;
    const session = headers.get("woocommerce-session");
    if (session) {
      if (localStorage.getItem("woo-session") !== session) {
        localStorage.setItem("woo-session", headers.get("woocommerce-session"));
      }
    }

    return response;
  });
});
const apolloClient = new ApolloClient({
  // uri: "https://delimeat.vn/?graphql",
  // link: middleware.concat(afterware.concat(HttpLink)),
  link: middleware.concat(
    afterware.concat(
      createHttpLink({
        uri: `https://delimeat.vn/?graphql`,
        fetch: fetch,
      })
    )
  ),
  cache: new InMemoryCache(),
});

const isServer = () => typeof window === "undefined";

const getPosts = async () => {
  const result = await apollo.query({ query: homeGQL });
  return result;
};

MyApp.getInitialProps = async (context) => {
  if (isServer()) {
    const result = await apollo.query({ query: getInfoCompany });
    const infoSettings = result?.data?.user;
    return { result: await getPosts(), infoSettings: infoSettings };
  } else {
    return {
      result: null,
    };
  }
};

function MyApp({ Component, pageProps, result, infoSettings }) {
  if (typeof window !== "undefined" && infoSettings) {
    localStorage.setItem("infoSettings", JSON.stringify(infoSettings));
  }
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
        <Header
          productCategories={result?.data?.productCategories?.nodes}
          infoSettings={infoSettings}
        />
        <Component {...pageProps} key={asPath} infoSettings={infoSettings} />
        <Footer productCategories={result?.data?.productCategories?.nodes} infoSettings={infoSettings} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
