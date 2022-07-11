import Head from "next/head";
import Script from "next/script"
export default function HeadSEO() {
  return (
    <Head>
      <>
        <title>5S FOOD</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content />
        <meta name="keywords" content />
        <link rel="canonical" href="https://5sfood.vn/" />
        <link rel="alternate" hrefLang="vi" href="https://5sfood.vn/" />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="website" />
        <meta name="twitter:site" content />
        <meta name="twitter:title" content="5S FOOD" />
        <meta name="twitter:description" content />
        <meta
          name="twitter:image"
          content="https://cdn.5sfood.vn/media/logo/logo.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content />
        <meta property="og:title" content="5S FOOD" />
        <meta property="og:url" content="https://5sfood.vn/" />
        <meta
          property="og:image"
          content="https://cdn.5sfood.vn/media/logo/logo.png"
        />
        <meta property="og:description" content />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://cdn.5sfood.vn" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="/css/fonts.css" rel="preconnect" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></Script>

        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></Script>
        <Script
          type="text/javascript"
          src="//code.jquery.com/jquery-1.11.0.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
        ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></Script>
        <Script type="text/javascript" src="/lib/slick.min.js"></Script>
        <link
          href="https://cdn.5sfood.vn/media/logo/fav.png"
          rel="icon"
          type="image/x-icon"
        />
        <link
          href="/css/variable.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/bootstrap/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/bootstrap-datepicker/bootstrap-datepicker.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/bootstrap-select/bootstrap-select.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/iconsax.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/slick.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/sweetalert2/sweetalert2.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/lightgallery.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/lib/jquery-ui/jquery-ui.min.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/catalogue.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/order.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/compare.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/member.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/comment-rating.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/utilities.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/page.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
        <link
          href="/css/custom.css"
          rel="stylesheet"
          type="text/css"
          media="all"
        />
      </>
    </Head>
  );
}