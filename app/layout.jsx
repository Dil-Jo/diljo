import Footer from "./global-components/Footer";
import "./globals.css";
import Navwrapper from "./global-components/Navwrapper";
import GlobalState from "./Contexts/GlobalState";
import MainWrapper from "./global-components/MainWrapper";
import Head from "next/head";
export const metadata = {
  title: "DilJo",
  description: "By DilJo Org.",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};



export default function RootLayout({ children }) {
  return (
    <GlobalState>
        <html lang="en">
      <body>
          <Navwrapper />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </body>
      </html>
    </GlobalState>
  );
}
