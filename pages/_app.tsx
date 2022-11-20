import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from 'flagsmith/react';
import { IState } from 'flagsmith/types';
import { pageview } from 'lib/gtag';
import 'styles/globals.scss';

const isProduction = process.env.NODE_ENV === 'production';

interface IAppProps extends AppProps {
  flagsmithState: IState;
}

function MyApp({ Component, pageProps, flagsmithState }: IAppProps) {
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

  return (
    <FlagsmithProvider
      serverState={flagsmithState}
      options={{
        environmentID: process.env.FLAG_SMITH_ENVIRONMENT_ID,
      }}
      flagsmith={flagsmith}>
      <Component {...pageProps} />
    </FlagsmithProvider>
  )
}

MyApp.getInitialProps = async () => {
  await flagsmith.init({ // fetches flags on the server and passes them to the App 
    environmentID: process.env.FLAG_SMITH_ENVIRONMENT_ID,
  });
  return { flagsmithState: flagsmith.getState() }
}


export default MyApp;
