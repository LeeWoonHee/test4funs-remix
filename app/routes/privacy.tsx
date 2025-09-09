import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "개인정보처리방침 | Test4Funs" },
    { name: "description", content: "Test4Funs 개인정보처리방침. 개인정보 수집 및 이용, 쿠키 사용, 광고 서비스에 관한 내용을 확인하세요." },
    { name: "robots", content: "index, follow" },
    {tagName: 'link', rel: 'canonical', href: 'https://www.test4funs.com/privacy'},
    // Open Graph tags
    {property: 'og:title', content: '개인정보처리방침 | Test4Funs'},
    {property: 'og:description', content: 'Test4Funs 개인정보처리방침 및 쿠키 사용 정책'},
    {property: 'og:type', content: 'website'},
    {property: 'og:url', content: 'https://www.test4funs.com/privacy'},
    // Twitter Card tags
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:title', content: '개인정보처리방침 | Test4Funs'},
    {name: 'twitter:description', content: 'Test4Funs 개인정보처리방침'},
  ];
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              1. 개인정보의 처리목적
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Test4Funs는 다음의 목적을 위하여 개인정보를 처리합니다:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>서비스 제공 및 운영</li>
              <li>사용자 경험 개선</li>
              <li>통계 분석 및 서비스 개선</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              2. 처리하는 개인정보의 항목
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스는 별도의 회원가입 없이 이용 가능하며, 개인정보를
              수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. 쿠키 사용</h2>
            <p className="text-gray-700 leading-relaxed">
              본 웹사이트는 사용자 경험 향상을 위해 쿠키를 사용할 수 있습니다.
              쿠키는 브라우저 설정을 통해 거부할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. 광고 서비스</h2>
            <p className="text-gray-700 leading-relaxed">
              본 사이트는 Google AdSense를 통한 광고를 표시합니다. Google의
              개인정보처리방침은 https://policies.google.com/privacy 에서
              확인하실 수 있습니다.
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
