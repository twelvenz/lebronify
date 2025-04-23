import type { Metadata } from "next"
import "./globals.css";
import Header from "@/app/components/header";

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
        className="bg-[#552583]"
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
