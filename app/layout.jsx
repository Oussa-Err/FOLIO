import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", scrollPadding: "5rem" }}>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://oussamaerr.vercel.app/"),
  title: {
    default: "Ouss",
    template: "%s | Ouss",
  },
  description: "Fullstack developer and designer based in Morocco.",
  openGraph: {
    title: "Oussama",
    description: "Fullstack developer and designer based in Morocco",
    type: "website",
    local: "en_EN",
    url: "https://oussamaerr.vercel.app/",
    siteName: "oussama's portfolio",
    images: [
      {
        url: "https://oussamaerr.vercel.app/portfolio-screenShot.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://oussamaerr.vercel.app/portfolio-screenShot.png",
        width: 1800,
        height: 1600,
        alt: "ssama",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-EN": "/",
    },
  },
  generator: "Next.js",
  applicationName: "portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "skills",
    "about",
    "portfolio",
    "projects",
    "blog",
    "software developer portfolio",
    "IT projects",
  ],
  authors: [{ name: "oussama erraoui" }],
  creator: "ERR.",
  publisher: "err.",
  publishedTime: "2023-01-01T00:00:00.000Z",
};
