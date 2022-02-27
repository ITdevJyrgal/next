import Head from "next/head";
import '../styles/scss/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zero waste</title>
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta
            name="description"
            content="
               zero waste"
        />

      </Head>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
