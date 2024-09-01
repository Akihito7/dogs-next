import type { Metadata } from "next";
import { type_second } from "../functions/font"
import Header from "../components/header";
import "./globals.css";
import Footer from "../components/footer";
import { UserContextProvider } from "../contexts/user-context";
import { getUser } from "../actions/user-get";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorro!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data : user } = await getUser();
  return (
    <html lang="pt-br">
      <body
        className={`${type_second.variable} App`}
      >
        <UserContextProvider user={user}>
          <Header />
          <main className="AppBody">
            {children}
          </main>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
