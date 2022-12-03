import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { AppContextProvider } from "../components/AppContext";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3DFS9VQ2BY"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3DFS9VQ2BY');
`,
        }}
      />
      <NextUIProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </NextUIProvider>
    </>
  );
}
