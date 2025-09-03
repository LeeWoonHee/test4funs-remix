import type {LoaderFunction} from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const robotText = `User-agent: *
Allow: /

# 주요 페이지들
Allow: /quiz/
Allow: /about
Allow: /privacy
Allow: /terms

# 정적 파일들
Allow: /assets/
Allow: /favicon.ico

# Sitemap 위치
Sitemap: https://www.test4funs.com/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24시간 캐시
    },
  });
};
