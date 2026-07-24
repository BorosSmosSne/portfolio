import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Heng Chhay — Full-Stack Mobile Developer & 3D / UI/UX Designer",
  description:
    "Portfolio of Heng Chhay, a Full-Stack Mobile Developer and MIS Specialist who bridges robust backend engineering with 3D design and UI/UX.",
  keywords: [
    "Heng Chhay",
    "Full-Stack Mobile Developer",
    "Flutter",
    "Spring Boot",
    "UI/UX Designer",
    "3D Design",
    "Blender",
    "MIS",
  ],
  authors: [{ name: "Heng Chhay" }],
  openGraph: {
    title: "Heng Chhay — Full-Stack Mobile Developer & 3D / UI/UX Designer",
    description:
      "Bridging complex engineering with creative design — mobile apps, robust backends, 3D motion graphics and clean UI/UX.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
