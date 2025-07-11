import {Link} from '@remix-run/react';
import logo from '~/assets/semo-logo.svg';
const Header = () => {
  return (
    <header className='w-full h-full mx-auto bg-[#fff] text-black font-bold text-[2.2vw] py-[1vw]'>
      <div className='flex justify-center items-center'>
        <Link to='/'>
          <div className='flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-[5.2vw] h-[5.2vw]' />
            <div>TEST 4 FUNS!</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
