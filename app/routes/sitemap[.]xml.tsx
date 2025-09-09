import type {LoaderFunction} from '@remix-run/node';
import {jsonLoader} from '~/lib/jsonLoader';
import {QuizConfigType} from '~/lib/types';

export const loader: LoaderFunction = async () => {
  const baseUrl = 'https://www.test4funs.com';
  const currentDate = new Date().toISOString().split('T')[0];

  try {
    // 퀴즈 설정 데이터 로드
    const quizConfig = await jsonLoader<QuizConfigType>('quizConfig.json');

    if (!quizConfig) {
      throw new Error('Failed to load quiz config');
    }

    // 기본 페이지들 (우선순위 최적화)
    const staticPages = [
      {
        url: baseUrl,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: '1.0',
      },
      {
        url: `${baseUrl}/about`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.8',
      },
      {
        url: `${baseUrl}/privacy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3',
      },
      {
        url: `${baseUrl}/terms`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.3',
      },
    ];

    // 동적 퀴즈 페이지들 (메인 콘텐츠 우선순위 높게)
    const quizPages = Object.keys(quizConfig).map((type) => ({
      url: `${baseUrl}/quiz/${type}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
    }));

    const allPages = [...staticPages, ...quizPages];

    // 우선순위 순으로 정렬 (높은 우선순위부터)
    const sortedPages = allPages.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sortedPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // 1시간 캐시 (더 자주 업데이트)
        'X-Robots-Tag': 'noindex', // 사이트맵 자체는 색인하지 않음
      },
    });
  } catch (error) {
    console.error('Sitemap 생성 중 오류:', error);

    // 에러 시 기본 사이트맵 반환
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.test4funs.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.test4funs.com/quiz/flag</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.test4funs.com/quiz/k-league</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new Response(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noindex',
      },
    });
  }
};
