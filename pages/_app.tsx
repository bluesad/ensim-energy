import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { AppContextProvider } from "../components/AppContext";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider>
      <AppContextProvider>
      <Component {...pageProps} />
      </AppContextProvider>
    </NextUIProvider>
  );
}
