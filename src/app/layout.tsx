import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import Header from "./_components/header";
import Bottom from "./_components/bottom";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-gray-100">
        <Header />
        <main className="container mx-auto flex-grow px-4 py-8">
          {children}
        </main>
        {/* <Bottom /> */}
      </body>
    </html>
  );
}
