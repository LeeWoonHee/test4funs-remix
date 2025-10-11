import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import quizConfig from "data/quizConfig.json";
import Quiz from "~/components/Quiz";
import { jsonLoader } from "~/lib/jsonLoader";
import { QuizListType } from "~/lib/types";
export const meta: MetaFunction = ({ params }) => {
  const type = params.type as keyof typeof quizConfig;
  const config = quizConfig[type];

  if (!config) {
    return [
      { title: "Test4Funs - 퀴즈 게임" },
      {
        name: "description",
        content: "재미있는 온라인 퀴즈 게임을 즐겨보세요.",
      },
    ];
  }

  return [
    { title: `${config.title} | Test4Funs` },
    { name: "description", content: config.description },
    { name: "keywords", content: config.keywords },
    // Open Graph tags
    { property: "og:title", content: `${config.title} | Test4Funs` },
    { property: "og:description", content: config.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `https://www.test4funs.com/quiz/${type}` },
    {
      tagName: "link",
      rel: "canonical",
      href: `https://www.test4funs.com/quiz/${type}`,
    },
    {
      property: "og:image",
      content: "https://www.test4funs.com/assets/semo-logo.svg",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    {
      name: "twitter:image",
      content: "https://www.test4funs.com/assets/semo-logo.svg",
    },
    // Additional SEO
    { name: "robots", content: "index, follow" },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const type = params.type as keyof typeof quizConfig;
  const config = quizConfig[type];

  if (!config) {
    throw new Response("퀴즈를 찾을 수 없습니다", {
      status: 404,
      statusText: "Quiz Not Found",
      headers: {
        "Cache-Control": "no-cache",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  try {
    const quizList = await jsonLoader<QuizListType>(config.jsonFile);

    return {
      allData: quizList,
      quizData: quizList?.[0]?.quiz || [],
      placeholder: quizList?.[0]?.placeholder || "정답을 입력해주세요",
      quizType: type,
      config,
    };
  } catch (error) {
    console.error(`퀴즈 데이터 로드 실패: ${type}`, error);
    throw new Response("퀴즈 데이터를 불러올 수 없습니다", {
      status: 404,
      statusText: "Quiz Data Not Found",
      headers: {
        "Cache-Control": "no-cache",
        "X-Robots-Tag": "noindex",
      },
    });
  }
};
const QuizPage = () => {
  const { quizData, placeholder } = useLoaderData<typeof loader>();
  const params = useParams();
  params;

  return <Quiz propsData={quizData} placeholder={placeholder} />;
};

export default QuizPage;
