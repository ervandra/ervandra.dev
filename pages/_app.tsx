import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import ErrorBoundary from '../components/ErrorBoundary';
import '../styles/global.scss';
import '../styles/app.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    if (!router.query.noscript && process.env.NEXT_PUBLIC_GTMID) {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTMID });
    }
  }, [router.query.noscript]);
  
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
