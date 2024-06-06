import Header from "@/components/navbar";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cyrus | Portfolio",
  description: "Cyrus is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${ibmPlexSans.className} `}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
