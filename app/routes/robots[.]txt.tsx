import type {LoaderFunction} from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const robotText = `
User-agent: *
Allow: /

# 주요 페이지들
Allow: /quiz/flag
Allow: /quiz/k-league
Allow: /quiz/kbl

# 정적 파일들
Allow: /assets/
Allow: /favicon.ico

# Sitemap 위치
Sitemap: https://test4funs.com/sitemap.xml

# 크롤링 속도 조절 (선택사항)
Crawl-delay: 1
`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // 24시간 캐시
    },
  });
};
