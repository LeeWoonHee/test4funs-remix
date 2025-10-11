import { Link } from "@remix-run/react";
import logo from "~/assets/semo-logo.svg";
const Header = () => {
  return (
    <header className="w-full h-full mx-auto bg-[#fff] text-black font-bold lg:text-[2.19vw] text-[4.1vw] lg:py-[0.99vw] py-[1.86vw]">
      <div className="flex justify-center items-center">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="lg:w-[5.21vw] w-[9.77vw] lg:h-[5.21vw] h-[9.77vw]"
            />
            <div>TEST 4 FUNS!</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
