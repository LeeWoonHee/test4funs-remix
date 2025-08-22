import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Test4Funs 소개 - 재미있는 온라인 퀴즈 게임" },
    { 
      name: "description", 
      content: "Test4Funs는 교육적 가치가 높은 온라인 퀴즈 게임을 제공합니다. 국기 맞추기, 스포츠 선수 퀴즈 등 다양한 주제로 재미있게 학습하세요." 
    },
    { 
      name: "keywords", 
      content: "온라인 퀴즈, 교육 게임, 국기 퀴즈, 스포츠 퀴즈, 무료 학습, test4funs 소개" 
    },
    { name: "robots", content: "index, follow" },
    {tagName: 'link', rel: 'canonical', href: 'https://test4funs.com/about'},
  ];
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Test4Funs에 오신 것을 환영합니다
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            재미있고 교육적인 온라인 퀴즈 게임으로 지식을 늘려보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 우리의 목표</h2>
            <p className="text-gray-600 leading-relaxed">
              Test4Funs는 학습을 재미있게 만드는 것을 목표로 합니다. 
              다양한 주제의 퀴즈를 통해 사용자들이 즐겁게 지식을 습득하고, 
              기억에 오래 남는 학습 경험을 제공합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 특징</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• 무료로 제공되는 다양한 퀴즈</li>
              <li>• 회원가입 없이 바로 이용 가능</li>
              <li>• 모바일 친화적인 반응형 디자인</li>
              <li>• 교육적 가치가 높은 콘텐츠</li>
              <li>• 지속적인 새로운 퀴즈 업데이트</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">제공하는 퀴즈</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏳️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">국기 맞추기</h3>
              <p className="text-gray-600">
                세계 각국의 국기를 보고 나라를 맞춰보세요. 
                지리와 국제 관계에 대한 지식을 늘릴 수 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">K리그 선수 퀴즈</h3>
              <p className="text-gray-600">
                한국 프로축구 K리그의 선수들을 맞춰보세요. 
                국내 축구에 대한 관심과 지식을 키울 수 있습니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">KBL 선수 퀴즈</h3>
              <p className="text-gray-600">
                한국 프로농구 KBL의 선수들을 맞춰보세요. 
                국내 농구 리그에 대한 이해를 높일 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 교육적 가치</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">지식 습득</h3>
              <p className="text-gray-600">
                퀴즈를 통해 자연스럽게 다양한 분야의 지식을 습득할 수 있습니다. 
                반복적인 학습으로 기억에 오래 남습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">기억력 향상</h3>
              <p className="text-gray-600">
                시각적 자료와 함께 제공되는 퀴즈는 기억력 향상에 도움이 됩니다. 
                이미지와 텍스트의 연관성으로 더 오래 기억할 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">집중력 개발</h3>
              <p className="text-gray-600">
                제한된 시간 내에 정답을 찾는 과정에서 집중력과 
                빠른 판단력을 기를 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">스트레스 해소</h3>
              <p className="text-gray-600">
                재미있는 퀴즈 게임을 통해 일상의 스트레스를 해소하고 
                긍정적인 에너지를 얻을 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">지금 바로 시작해보세요!</h2>
          <p className="text-gray-600 mb-8">
            Test4Funs에서 제공하는 다양한 퀴즈로 재미있게 학습하세요
          </p>
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            퀴즈 시작하기
          </a>
        </div>
      </div>
    </div>
  );
}