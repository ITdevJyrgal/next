import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import "./../styles/scss/index.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>

        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>

  </>
  )
}

export default MyApp
