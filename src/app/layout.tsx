import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1210" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daud.ai"),
  title: {
    default: "DaudAI - Control Claude Code from Anywhere",
    template: "%s | DaudAI",
  },
  description:
    "Access and control your Claude Code sessions remotely from your mobile device. End-to-end encrypted, multi-machine support, real-time sync.",
  keywords: [
    "Claude Code",
    "remote access",
    "AI coding assistant",
    "mobile app",
    "end-to-end encryption",
    "Claude AI",
    "developer tools",
  ],
  authors: [{ name: "DaudAI" }],
  creator: "DaudAI",
  publisher: "DaudAI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daud.ai",
    siteName: "DaudAI",
    title: "DaudAI - Control Claude Code from Anywhere",
    description:
      "Access and control your Claude Code sessions remotely from your mobile device. End-to-end encrypted, multi-machine support, real-time sync.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DaudAI - Control Claude Code from Anywhere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaudAI - Control Claude Code from Anywhere",
    description:
      "Access and control your Claude Code sessions remotely from your mobile device. End-to-end encrypted.",
    images: ["/images/og-image.png"],
    creator: "@daudai",
  },
  icons: {
    icon: [
      { url: "/images/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
