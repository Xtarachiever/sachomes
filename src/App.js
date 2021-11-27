import React from "react";
import { Link } from "react-router-dom";
import iphone12a from "./images/iphone-12-full.svg";
import iphone12b from "./images/iphone-12-half.svg";
import followIcon from "./images/icon/follow-icon.svg";
import appleStore from "./images/apple-store.svg";
import googleStore from "./images/google-store.svg";
import star from "./images/emoji/star-emoji.svg";
import moon from "./images/emoji/moon-emoji.svg";
import smile from "./images/emoji/smile-emoji.svg";

const App = () => {
  return (
    <div className='flex flex-col main-wrapper container relative'>
      <nav className='p-5 flex justify-between'>
        <div>sacHomes</div>
        <div className='flex items-center'>
          <Link to='/'>
            <img src={followIcon} className='mr-3 w-6' alt='follow-icon' />
          </Link>{" "}
          <span>Follow</span>
        </div>
      </nav>
      <header className='flex-1 flex flex-row p-5 '>
        <div className='flex-1 flex flex-col'>
          <h1 className='w-8/12 mb-5'>
            Proper Design. Smartly Priced. Ready for Move-In!
          </h1>
          <div className='flex items-center gap-x-5'>
            <Link to='/'>
              <img
                src={googleStore}
                alt='Google store'
                className='w-40 shadow'
              />
            </Link>
            <Link to='/'>
              <img src={appleStore} alt='Apple Store' className='w-40 shadow' />
            </Link>
          </div>
        </div>
        <div className='flex'>
          <img src={iphone12a} alt='' className='w-full' />
          <img src={iphone12b} alt='' className='w-full -ml-20' />
        </div>
      </header>
      <footer>
        <div className='flex justify-center py-4'>
          <p>Copyright 2021 SAChomes</p>
        </div>
      </footer>
      <img src={star} className='w-8 absolute  right-60  top-10' alt='star' />
      <img src={moon} className='w-8 absolute  right-80  top-40' alt='moon' />
      <img src={smile} className='w-8 absolute  left-0  top-60' alt='smile' />
    </div>
  );
};

export default App;
