import type { Metadata } from "next";
import { type_second } from "../functions/font"
import Header from "../components/header";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${type_second.variable} App`}
      >
        <Header />
        <main className="AppBody">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
