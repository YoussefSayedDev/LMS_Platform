import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LMS Platform",
    default: "LMS Platform",
  },
  description:
    "This LMS platform facilitates learning by connecting teachers, students, and parents for effective lesson, homework, and performance management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
