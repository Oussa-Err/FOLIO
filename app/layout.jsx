import "./globals.css";
import { Poppins } from "next/font/google";
import { Footer } from "./component/Footer";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "Oussama",
  description: "Personal Potfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", scrollPadding: "10px" }}>
      <body className={poppins.className}>
        <div className="sm:pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
