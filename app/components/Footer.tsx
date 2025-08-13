import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-[#fbf6ff] text-black py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Test4Funs</h3>
          </div>

          <div></div>

          <div>
            <h4 className="font-semibold mb-4">정보</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  Test4Funs 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-blue-600"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">광고 정보</h4>
            <p className="text-xs text-gray-500 mb-2">
              본 사이트는 Google AdSense를 통한 광고를 표시합니다
            </p>
            <p className="text-xs text-gray-500">
              광고를 통해 무료 서비스를 제공할 수 있습니다
            </p>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>Copyright © Test4Funs 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
