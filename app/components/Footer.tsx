import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-[#fbf6ff] text-black lg:py-[1.67vw] py-[3.13vw] border-t border-gray-200">
      <div className="max-w-[95%] mx-auto lg:px-[0.83vw] px-[1.56vw]">
        <div className="grid md:grid-cols-4 lg:gap-[1.67vw] gap-[3.13vw] lg:mb-[1.67vw] mb-[3.13vw]">
          <div>
            <h3 className="lg:text-[0.94vw] text-[3.91vw] font-bold lg:mb-[0.83vw] mb-[1.56vw]">
              Test4Funs
            </h3>
          </div>

          <div></div>

          <div>
            <h4 className="lg:text-[0.83vw] text-[3.32vw] font-semibold lg:mb-[0.83vw] mb-[1.56vw]">
              정보
            </h4>
            <ul className="space-y-2 lg:text-[0.73vw] text-[1.95vw]">
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
            <h4 className="lg:text-[0.83vw] text-[2.34vw] font-semibold lg:mb-[0.83vw] mb-[1.56vw]">
              광고 정보
            </h4>
            <p className="lg:text-[0.63vw] text-[1.95vw] text-gray-500 lg:mb-[0.42vw] mb-[0.78vw]">
              본 사이트는 Google AdSense를 통한 광고를 표시합니다
            </p>
            <p className="lg:text-[0.63vw] text-[1.95vw] text-gray-500">
              광고를 통해 무료 서비스를 제공할 수 있습니다
            </p>
          </div>
        </div>

        <div className="lg:pt-[0.83vw] pt-[1.56vw]">
          <div className="flex flex-col md:flex-row justify-between items-center lg:text-[0.73vw] text-[1.95vw] text-gray-600">
            <p>Copyright © Test4Funs 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
