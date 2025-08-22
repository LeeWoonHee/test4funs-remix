import type {LoaderFunction} from '@remix-run/node';
import {jsonLoader} from '~/lib/jsonLoader';
import {QuizConfigType} from '~/lib/types';

export const loader: LoaderFunction = async () => {
  const baseUrl = 'https://test4funs.com';
  const currentDate = new Date().toISOString().split('T')[0];

  try {
    // 퀴즈 설정 데이터 로드
    const quizConfig = await jsonLoader<QuizConfigType>('quizConfig.json');

    if (!quizConfig) {
      throw new Error('Failed to load quiz config');
    }

    // 기본 페이지들
    const staticPages = [
      {
        url: baseUrl,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '1.0',
      },
      {
        url: `${baseUrl}/about`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.7',
      },
      {
        url: `${baseUrl}/privacy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.5',
      },
      {
        url: `${baseUrl}/terms`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: '0.5',
      },
    ];

    // 동적 퀴즈 페이지들
    const quizPages = Object.keys(quizConfig).map((type) => ({
      url: `${baseUrl}/quiz/${type}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    }));

    const allPages = [...staticPages, ...quizPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
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
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400', // 24시간 캐시
      },
    });
  } catch (error) {
    console.error('Sitemap 생성 중 오류:', error);

    // 에러 시 기본 사이트맵 반환
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/quiz/flag</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/quiz/k-league</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    return new Response(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
};
