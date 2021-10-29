import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const App = ({ Component, pageProps }: AppProps<any>) => {
  return <Component {...pageProps} />;
};

export default App;
