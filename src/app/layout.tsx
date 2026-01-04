import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaudAI - Control Claude Code from Anywhere",
  description: "Access and control your Claude Code sessions remotely from your mobile device. Monitor, interact, and manage your AI coding sessions on the go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
