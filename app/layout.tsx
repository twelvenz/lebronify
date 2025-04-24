import type { Metadata } from "next"
import "./globals.css";
import Header from "@/app/components/header";
import { ThemeProvider } from "@/lib/ThemeContext"
import { ThemeBodyWrapper } from "@/app/components/BodyWrapper";

export const metadata: Metadata = {
  title: "Lebronify",
  description: "GOAT playlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        <ThemeProvider>
            <ThemeBodyWrapper>
                <Header/>
                {children}
            </ThemeBodyWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
