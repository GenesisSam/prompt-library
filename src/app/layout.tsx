import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

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
          <nav style={{ padding: "1rem" }}>
            <Link href="/" style={{ marginRight: "1rem" }}>
              홈
            </Link>
            <Link href="/papers" style={{ marginRight: "1rem" }}>
              프롬프트 목록
            </Link>
            <Link href="/users" style={{ marginRight: "1rem" }}>
              유저저
            </Link>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
