import type { Metadata } from "next"
import "./globals.css";
import Header from "@/app/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext"
import { BodyWrapper } from "@/app/components/BodyWrapper";
import Footer from "@/app/components/Footer";

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
        <ThemeProvider>
            <BodyWrapper>
                <Header/>
                {children}
                <Footer/>
            </BodyWrapper>
        </ThemeProvider>
    </html>
  );
}
