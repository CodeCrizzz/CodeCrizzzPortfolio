import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Font for the website
const inter = Inter({ subsets: ["latin"] });

// Metadata for the website
export const metadata: Metadata = {
  title: "CodeCrizzz | Portfolio",
  description: "I'm a student that has passion about learning and building projects in web development. Thank you for visiting.",
};

// Main function component to display the layout of the website 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${inter.className} bg-slate-50 text-slate-800 flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
