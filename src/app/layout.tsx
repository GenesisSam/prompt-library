import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/_components/layout/Navbar";
import ContentBody from "@/_components/layout/ContentBody";

export const metadata: Metadata = {
  title: "Prompt Library",
  description: "LLM 프롬프트 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ContentBody>{children}</ContentBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
