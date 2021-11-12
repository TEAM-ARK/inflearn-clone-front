// pages/_app.tsx
/* eslint-disable react/jsx-props-no-spreading */
import { FC, useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import Global from '@styles/GlobalStyle';
import theme from '@styles/theme';
import wrapper from 'src/redux/configureStore';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Global />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
      <style global jsx>{`
        html,
        body {
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default wrapper.withRedux(MyApp);
