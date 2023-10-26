import type { AppProps } from "next/app";

import GlobalStyle from "@/styles/GlobalStyle";
import { InterFont } from "@/styles/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={InterFont.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
