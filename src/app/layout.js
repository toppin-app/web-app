import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Toppin, la App de citas más dulce",
  description: "Toppin, la App de citas más dulce web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body suppressHydrationWarning={true} className={comfortaa.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
