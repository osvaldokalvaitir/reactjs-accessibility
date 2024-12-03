import type { AppProps } from "next/app";

import { useEffect } from "react";

import "@/styles/globals.css";

import { axeAccessibilityReporter } from '@/utils/axeAccessibilityReporter'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />;
}
