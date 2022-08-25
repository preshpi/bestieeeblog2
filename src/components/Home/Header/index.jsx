import React from 'react';
import Toggle from '../darkmode/toggle';

const Header = () => (
  <header className="h-20 top-0 sticky font-serif items-center dark:bg-gray-900 m-5">
    <div className="flex justify-between mb-5 items-center max-w-[1240px] mx-auto px-4'">
    <h1 className="w-full text-3xl font-bold text-black dark:text-white mx-2 mt-2">PP & PB </h1>
    <Toggle/>
    </div>
   </header>

);

export default Header;
