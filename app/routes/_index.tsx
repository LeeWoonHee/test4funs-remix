import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MotionCardList from "~/components/MotionCardList";
import { jsonLoader } from "~/lib/jsonLoader";
import { ExamListType } from "~/lib/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Test4Funs - 재밌는 퀴즈 게임으로 즐기는 온라인 퀴즈" },
    {
      name: "description",
      content:
        "국기 퀴즈, K리그 선수 퀴즈, KBL 선수 퀴즈 등 다양한 주제의 재미있는 온라인 퀴즈 게임을 무료로 즐겨보세요. 남녀노소 모두가 즐길 수 있는 교육적이고 재미있는 퀴즈 플랫폼입니다.",
    },
    {
      name: "keywords",
      content:
        "온라인 퀴즈, 퀴즈 게임, 국기 퀴즈, K리그 선수 퀴즈, KBL 선수 퀴즈, 무료 퀴즈, 교육 게임, 상식 퀴즈, 스포츠 퀴즈, test4funs",
    },
    // Open Graph tags for social sharing
    {
      property: "og:title",
      content: "Test4Funs - 재밌는 퀴즈 게임으로 즐기는 온라인 퀴즈",
    },
    {
      property: "og:description",
      content:
        "국기 퀴즈, K리그 선수 퀴즈, KBL 선수 퀴즈 등 다양한 주제의 재미있는 온라인 퀴즈 게임을 무료로 즐겨보세요.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://test4funs.com" },
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Test4Funs - 재밌는 퀴즈 게임" },
    {
      name: "twitter:description",
      content: "다양한 주제의 재미있는 온라인 퀴즈 게임을 무료로 즐겨보세요.",
    },
  ];
};

export const loader = async () => {
  const examList = await jsonLoader<ExamListType>("examList.json"); // await 추가
  return examList;
};

export default function Index() {
  // loader에서 반환된 데이터 사용
  const examList = useLoaderData<typeof loader>();

  return (
    <div className="w-full h-full">
      <div className="px-4 md:px-8">
        <MotionCardList data={examList} />
      </div>
    </div>
  );
}
