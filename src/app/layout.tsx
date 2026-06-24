import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
