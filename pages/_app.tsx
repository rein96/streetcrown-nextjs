import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview } from 'lib/gtag';
import 'styles/globals.scss';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Setup Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      // Invoke analytics function only for production mode
      if (isProduction) pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
