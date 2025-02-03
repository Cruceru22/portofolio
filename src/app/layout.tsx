"use client";

import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Header from "./_components/header";
import { FlickeringGrid } from "~/components/ui/flickering-grid";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <FlickeringGrid
          className="fixed left-0 right-0 top-0 -z-10 h-full w-screen [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={3000}
          width={3000}
        />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
