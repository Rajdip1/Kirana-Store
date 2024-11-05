"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { UpdateCart } from "./_context/UpdateCart";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Kirana Store",
//   description: "Kirana Store",
// };

export default function RootLayout({ children }) {
  const params = usePathname();
  const [updateCart, setUpdateCart] = useState(false);
  // const ShowHeader =
  //   params == "/sign-in" || params == "/create-account" ? false : true;
  // const ShowFooter =
  //   params == "/sign-in" || params == "/create-account" ? false : true;

  return (
    <html lang="en">
      <body className={inter.className}>
        <UpdateCart.Provider value={{updateCart,setUpdateCart}}>
          {/* {ShowHeader ? <Header /> : null} */}
          {children}
          <Toaster />
          {/* {ShowFooter ? <Footer /> : null} */}
        </UpdateCart.Provider>
      </body>
    </html>
  );
}
