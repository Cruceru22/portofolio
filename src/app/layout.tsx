"use client";

import { Inter } from "next/font/google";
import "~/styles/globals.css";
import ProfilePicture from "../../utils/Images/profilx.jpg";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Andrei Cruceru | Web Developer</title>
        <link rel="icon" href={ProfilePicture.src} />
      </head>
      <body className={`${inter.className} relative`}>
        <div
          className="fixed left-0 right-0 top-0 -z-10 h-full w-screen opacity-70 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          style={{
            background: `
              linear-gradient(217deg, rgba(96, 165, 250, 0.8), rgba(0,0,0,0) 70%),
              linear-gradient(127deg, rgba(167, 139, 250, 0.8), rgba(0,0,0,0) 70%),
              linear-gradient(336deg, rgba(248, 113, 113, 0.8), rgba(0,0,0,0) 70%)
            `,
            backgroundSize: "200% 200%",
            backgroundPosition: "center",
          }}
        />
        <div
          className="fixed left-0 right-0 top-0 -z-10 h-full w-screen opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(167, 139, 250, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
