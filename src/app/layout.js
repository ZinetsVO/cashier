import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ProductProvider from "@/components/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />{" "}
        </body>
      </html>
    </ProductProvider>
  );
}
