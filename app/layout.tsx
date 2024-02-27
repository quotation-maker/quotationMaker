import type { Metadata } from "next";
import "normalize.css"
import "@/app/styles/globals.css";
import "@/app/styles/theme.css";
import { notoSansKr } from "@/app/styles/font";

const title = process.env.NEXT_PUBLIC_TITLE;
const description = process.env.NEXT_PUBLIC_DESCRIPTION;
const url = process.env.NEXT_PUBLIC_URL;
const ogi = process.env.NEXT_PUBLIC_OG_IMAGE;

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title || ''
  },
  icons: {
    icon: "/images/quote-maker.png",
  },
  description: description,
  authors: [{ name: "docktork4" }, { name: "hyunwlee", }],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: [ogi || ''],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [ogi || ''],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
