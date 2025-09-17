"use client";

import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-[95px] mb-16 sm:mb-24 md:mb-32 lg:mb-[314px]">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "#2D4586" }}
      >
        <Image
          src="/assets/svg/bg-fon.svg"
          alt="Background"
          fill
          className="object-cover z-10 relative"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[75px] leading-[90%] font-black text-white mb-4 sm:mb-6 leading-tight">
              Выдели свой <br className="hidden sm:block" /> профиль!
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] text-[#B5B9BF] mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Всё, что делает ваш аккаунт в Telegram{" "}
              <span className="text-white">особенным:</span> имена, номера, NFT
              и подарки — теперь в{" "}
              <span className="text-white">одном месте.</span>
            </p>
            <button className="inline-flex relative items-center gap-3 bg-gradient-to-r bg-[#527BEB] text-white font-semibold px-4 sm:px-6 md:px-8 py-[9px] pl-[24px] sm:pl-[32px] md:pl-[42px] pr-[60px] sm:pr-[70px] md:pr-[86px] rounded-[12px] transition-all duration-200 transform active:scale-95 w-full sm:w-auto justify-center lg:justify-start">
              <span className="text-[14px] sm:text-[16px] md:text-[18px] text-[#E0E5EC]">
                Начать пользоваться SkyTon
              </span>
              <span className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-white absolute right-0 top-0 flex items-center justify-center rounded-[12px]">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9419 10.8337L12.4125 10.8467L12.4643 2.44324L1.08705 13.0078L0 11.9978L11.3772 1.43319L2.32668 1.48129L2.34068 0.0617599L14 0.0078125L13.9419 10.8337Z" fill="#527BEB"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Right side - Image - Hidden on mobile/tablet, visible on desktop */}
          <div className="hidden lg:block w-[450px] h-[800px] absolute top-[-200px] right-0 z-10">
            <Image
              src="/assets/svg/left-img.svg"
              alt="Profile Section"
              width={450}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
