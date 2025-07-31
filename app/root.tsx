import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import logo from "~/assets/semo-logo.svg";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import "~/styles/main.scss";

export const links: LinksFunction = () => [
  { rel: "icon", href: logo },
  // SEO 관련 링크들
  { rel: "canonical", href: "https://test4funs.com" },
  { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
  // 프리페치 DNS
  {
    rel: "dns-prefetch",
    href: "//test4funs-image-bucket.s3.ap-northeast-2.amazonaws.com",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <Meta />
        <Links />
      </head>
      <body className="h-full bg-[#fbf6ff]">
        <Header />
        <main className="w-full h-auto">{children}</main>

        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
