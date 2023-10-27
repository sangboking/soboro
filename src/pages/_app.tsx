import type { AppProps } from "next/app";

import GlobalStyle from "@/styles/GlobalStyle";
import { myFont } from "@/styles/font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}
