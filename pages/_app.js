import "../styles/globals.css";

// componentes
import Layout from "../components/Layout";
import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";

// header do next
import Head from 'next/head';

// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lucas Cordeiro Desenvolvedor</title>
        <link rel="icon" href="/public/favicon.png" />
        <meta
          name="description"
          content="Desenvolvedor web freelancer brasileiro. Criativo, proativo e pronto para transformar sua ideia em algo único"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lucas Cordeiro" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#EE692D" />

      </Head>
      <Layout>
        <AnimatePresence>
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />;
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
