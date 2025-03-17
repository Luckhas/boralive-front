import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Ubuntu, Ubuntu_Sans } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  style: ['italic', "normal"]
});

const ubuntuSans = Ubuntu_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ['italic', "normal"]
});

export const metadata: Metadata = {
  title: "Bora Live",
  description: "Tudo que você precisa para comear a fazer livestream de forma profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_br">
      <body className="">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
