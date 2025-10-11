import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect, useState } from "react";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import "~/styles/main.scss";

function ClientOnlyScripts() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {/* 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Test4Funs",
            url: "https://www.test4funs.com",
            description: "재미있는 온라인 퀴즈 게임 플랫폼",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://www.test4funs.com/quiz/{search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "Test4Funs",
              url: "https://www.test4funs.com",
            },
          }),
        }}
      />

      {/* Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691879714410770"
        crossOrigin="anonymous"
      />
    </>
  );
}

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
        <meta name="google-site-verification" content="" />

        <Meta />
        <Links />

        <ClientOnlyScripts />
      </head>
      <body className="lg:min-h-[100dvh] min-h-[100svh] flex flex-col bg-[#fbf6ff]">
        <Header />
        <main className="w-full flex-1">{children}</main>

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
