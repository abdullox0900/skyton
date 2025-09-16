"use client";

import LanguageDropdown from "@/components/LanguageDropdown";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Никнеймы", path: "/nicknames" },
    { name: "Номера", path: "/numbers" },
    { name: "Подарки", path: "/gifts" },
    { name: "Звёзды", path: "/stars" },
    { name: "Премиум", path: "/premium" },
  ];

  return (
    <header className="text-white w-full min-[2400px]:bg-nightshade max-[1024px]:bg-nightshade rounded-bl-[25px] rounded-br-[25px]">
      <div className="absolute hidden lg:block before:top-[-60px] lg:before:top-[-40px] inset-0 before:absolute before:inset-0 before:bg-[url('/assets/svg/header-bg.svg')] before:bg-contain h-[208px] md:h-[208px] before:bg-no-repeat before:bg-x-center before:bg-center before:content-[''] before:z-[1]"></div>

      {/* Desktop Header */}
      <div className="hidden lg:flex flex-col gap-4">
        <div className="container mx-auto py-[37px] xl:py-[15px] flex items-center justify-between relative z-10">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={"/assets/svg/logo.svg"}
              alt="header-logo"
              width={176}
              height={46}
            />
          </Link>

          <div className="text-[32px] font-bold ml-[170px] xl:text-[20px]">
            Telegram NFT продукты
          </div>

          <div className="flex items-center gap-[20px]">
            <LanguageDropdown />
            <button className="flex items-center gap-[20px] py-[13px] px-[37px] text-[20px] text-[#e0e5ec] font-medium bg-gradient-to-r from-[#335d96] to-[#4881cf] rounded-full hover:opacity-80 transition-opacity active:scale-95">
              <Image
                src={"/assets/svg/telegram-icon.svg"}
                alt="header-button"
                width={30}
                height={26}
              />
              Авторизация
            </button>
          </div>
        </div>
        <ul className="flex items-center gap-[36px] justify-center relative z-10 mt-[10px]">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path === "/nicknames" && pathname === "/");
            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`text-[20px] font-light transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#A7AFBA] hover:text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <div className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-[#5B86E5] rounded-full"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 py-6 relative z-10">
          {/* Top row with logo and hamburger */}
          <div className="flex items-center justify-between mb-4 max-[550px]:mb-0 ">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src={"/assets/svg/logo.svg"}
                alt="header-logo"
                width={120}
                height={32}
              />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none relative w-8 h-8"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMobileMenuOpen ? "top-[11px] rotate-45" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-[11px] left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMobileMenuOpen ? "bottom-[11px] -rotate-45" : ""
                    }`}
                  ></span>
                </div>
              </div>
            </button>
          </div>

          {/* Title */}
          <div className="text-center max-[550px]:hidden">
            <div className="text-xl md:text-2xl font-bold">
              Telegram NFT продукты
            </div>
          </div>

          {/* Navigation items */}
          <div
            className={`transition-all duration-300 ${
              isMobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col items-center gap-4 py-4">
              <LanguageDropdown />
              <button className="flex items-center gap-3 py-3 px-6 text-lg text-[#e0e5ec] font-medium bg-gradient-to-r from-[#335d96] to-[#4881cf] rounded-full hover:opacity-80 transition-opacity active:scale-95 w-full max-w-xs justify-center">
                <Image
                  src={"/assets/svg/telegram-icon.svg"}
                  alt="header-button"
                  width={24}
                  height={20}
                />
                Авторизация
              </button>

              {/* Mobile Navigation Links */}
              <ul className="flex flex-col items-center gap-4 w-full pt-4 border-t border-white/10">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.path ||
                    (item.path === "/nicknames" && pathname === "/");
                  return (
                    <li key={item.path} className="w-full text-center relative">
                      <Link
                        href={item.path}
                        className={`text-[18px] font-light block py-2 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-[#A7AFBA] hover:text-white/80"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        {isActive && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-[#5B86E5] rounded-full"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
