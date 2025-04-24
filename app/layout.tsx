import type { Metadata } from "next"
import "./globals.css";
import Header from "@/app/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext"
import { BodyWrapper } from "@/app/components/BodyWrapper";

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
            </BodyWrapper>
        </ThemeProvider>
    </html>
  );
}
