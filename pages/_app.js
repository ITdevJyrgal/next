import Head from "next/head";
// import '../styles/global.css'
import "./../styles/scss/index.scss"
import '../styles/icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Component {...pageProps}/>
  </>
  )
}

export default MyApp
