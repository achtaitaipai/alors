import "@fontsource/roboto";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { light } from "../libs/style/colors/index.css";
import Footer from "../libs/ui/Footer";
import Header from "../libs/ui/Header";
import "../styles/globalStyle.css";
import { containerStyle } from "../styles/layouts/container.css";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <div className={light + " " + containerStyle}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionContextProvider>
    </div>
  );
}
