//important imports
import "../styles/main.scss";

//package
import Head from "next/head";

//component

//context

//theme
import ThemeProvider from "@/theme/index";
import { MainLayout } from "@/components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>obelisk</title>
        <meta name="description" content="obelisk" />
        <link rel="shortcut icon" href="/preshent/favicon.png" />
      </Head>

      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
