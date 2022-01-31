import type { AppProps } from 'next/app';
import Head from "next/head";
import { Fragment } from 'react';
import { wrapper } from "../store/store";
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (<Fragment>
  <Head>
    <title>Singular Grid</title>
  </Head>
    <Component  {...pageProps} />
</Fragment>);
}

export default wrapper.withRedux(MyApp)