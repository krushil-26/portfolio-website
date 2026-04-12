import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Krushil Thakkar | Senior Frontend Developer",
    template: "%s | Krushil Thakkar",
  },
  description: "Senior Frontend Developer specializing in React.js, Next.js, and modern web technologies. View my portfolio and projects.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Portfolio", "Krushil Thakkar", "Software Engineer"],
  authors: [{ name: "Krushil Thakkar" }],
  creator: "Krushil Thakkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krushilthakkarportfolio.vercel.app/",
    siteName: "Krushil Thakkar Portfolio",
    title: "Krushil Thakkar | Senior Frontend Developer",
    description: "Building high-performance web applications with React and Next.js.",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "Krushil Thakkar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krushil Thakkar | Senior Frontend Developer",
    description: "Senior Frontend Developer specializing in React.js and Next.js.",
    creator: "@yourtwitterhandle", // Add your handle
    images: ["/og-image.png"], 
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
