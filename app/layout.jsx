import "./globals.css";
import { Poppins } from "next/font/google";
import { Footer } from "./component/Footer";
import { CursorEffect } from "./hooks/cursorEffect";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "SSAMA",
  description: "Personal Potfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", scrollPadding: "5rem" }}>
      <body className={poppins.className}>
        <CursorEffect />
        <div className="sm:pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
