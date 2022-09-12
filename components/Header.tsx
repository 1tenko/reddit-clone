import Image from 'next/image';
import React from 'react';
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="/Reddit_logo_new.svg.png"
          layout="fill"
          alt="reddit logo"
        />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 hidden ml-2 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="text-gray-500 items-center space-x-2 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      <div className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            src="/reddit logo.png"
            alt="reddit logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
}

export default Header;
