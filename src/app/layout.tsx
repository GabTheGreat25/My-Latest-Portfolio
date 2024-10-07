import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gabriel's Portfolio",
  description:
    "As a cum laude graduate with a Bachelor of Science in Information Technology from the Technological University of the Philippines - Taguig, I am passionate about leveraging technology to create meaningful impact. With a strong foundation in IT concepts and a dedication to continuous learning, I am well-prepared to contribute to the development of innovative, cutting-edge technologies. My goal is to apply my skills and knowledge to develop solutions that address real-world challenges and drive positive change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-dark-secondary text-light-default antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
