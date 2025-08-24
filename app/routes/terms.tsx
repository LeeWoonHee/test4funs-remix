import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "이용약관 | Test4Funs" },
    { name: "description", content: "Test4Funs 이용약관" },
    { name: "robots", content: "index, follow" },
    {tagName: 'link', rel: 'canonical', href: 'https://www.test4funs.com/terms'},
  ];
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">이용약관</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. 서비스 소개</h2>
            <p className="text-gray-700 leading-relaxed">
              Test4Funs는 교육적 목적의 온라인 퀴즈 게임 서비스를 제공합니다.
              사용자는 국기, 스포츠 선수 등 다양한 주제의 퀴즈를 무료로 이용할
              수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. 서비스 이용</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>본 서비스는 무료로 제공됩니다</li>
              <li>별도의 회원가입 없이 이용 가능합니다</li>
              <li>교육 및 오락 목적으로만 사용해주세요</li>
              <li>상업적 목적으로 콘텐츠를 복제하거나 배포할 수 없습니다</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. 콘텐츠 저작권</h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스의 모든 콘텐츠는 저작권법의 보호를 받습니다. 퀴즈 문제,
              이미지, 디자인 등의 무단 복제 및 배포를 금지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. 광고</h2>
            <p className="text-gray-700 leading-relaxed">
              서비스 운영을 위해 Google AdSense 광고가 표시될 수 있습니다. 광고
              클릭은 사용자의 자유의사에 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              5. 서비스 변경 및 중단
            </h2>
            <p className="text-gray-700 leading-relaxed">
              운영상 필요에 의해 서비스 내용이 변경되거나 일시 중단될 수
              있습니다. 중요한 변경사항은 웹사이트를 통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. 면책조항</h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스는 교육 목적으로 제공되며, 퀴즈 내용의 정확성에 대해
              절대적인 보장을 하지 않습니다. 서비스 이용으로 인한 직간접적
              손해에 대해 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">최종 업데이트: 2025년 8월</p>
          </section>
        </div>
      </div>
    </div>
  );
}
