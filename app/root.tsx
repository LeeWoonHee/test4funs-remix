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
  { rel: "icon", href: "/favicon.ico" },
  // SEO 관련 링크들
  
  { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
  // 성능 최적화를 위한 DNS 프리페치
  {
    rel: "dns-prefetch",
    href: "//test4funs-image-bucket.s3.ap-northeast-2.amazonaws.com",
  },
  // 구글 폰트 프리로드 (성능 향상)
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691879714410770"
          crossOrigin="anonymous"
        ></script>
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
