import "./globals.css";
import { Poppins } from "next/font/google";
import { Footer } from "./component/Footer";

const poppins = Poppins({ subsets: ["devanagari"], weight: ['400', '700'],
style: ['normal'] });

export const metadata = {
  title: "Oussama",
  description: "Personal Potfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
