import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Mouse from "@/components/Mouse";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Christine | Portfolio",
  description: "Director of Marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-green-800 example">
      <Mouse />
      <body className={`${bebasNeue.className} `}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
