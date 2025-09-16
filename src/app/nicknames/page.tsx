"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import { useState } from "react";
import BasketButton from "@/components/BasketButton";
import NicknameModal from "@/components/NicknameModal";

export default function NicknamesPage() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"sale" | "rent" | "auction">(
    "sale"
  );
  const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const handleBuyClick = (nickname: string, price: string) => {
    setSelectedNickname({ name: nickname, price });
    setIsNicknameModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsNicknameModalOpen(false);
    setSelectedNickname(null);
  };

  // Sample nickname data
  const nicknames = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    name: "@bump",
    link: "T.me/bump",
    price: "1 555 389 ₽",
    tonPrice: "~ 5.569 TON ~",
    holder: "Holder",
  }));

  return (
    <div>
      <Hero
        title="Удобный, Практичный,"
        titleSecondLine="Единственный."
        showSubtitle={false}
        showButton={false}
      />

      <div className="max-w-[790px] mx-auto px-3 sm:px-4 md:px-6 lg:px-4 pb-[40px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px]">
        {/* Navigation tabs */}
        <div className="flex justify-center mb-[10px] sm:mb-[15px] md:mb-[10px]">
          <div className="flex gap-[15px] sm:gap-[20px] md:gap-[30px] sm:rounded-[12px] p-[4px] sm:p-[6px]">
            <button
              onClick={() => setActiveTab("sale")}
              className={`px-[20px] sm:px-[30px] md:px-[55px] py-[8px] sm:py-[10px] md:py-[12px] rounded-[8px] sm:rounded-[10px] md:rounded-[50px] text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-200 ${
                activeTab === "sale"
                  ? "bg-[#151f36] text-white"
                  : "text-[#8893ac] hover:text-white"
              }`}
            >
              Продажа
            </button>
            <button
              onClick={() => setActiveTab("rent")}
              className={`px-[20px] sm:px-[30px] md:px-[55px] py-[8px] sm:py-[10px] md:py-[12px] rounded-[8px] sm:rounded-[10px] md:rounded-[50px] text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-200 ${
                activeTab === "rent"
                  ? "bg-[#151f36] text-white"
                  : "text-[#8893ac] hover:text-white"
              }`}
            >
              Аренда
            </button>
            <button
              onClick={() => setActiveTab("auction")}
              className={`px-[20px] sm:px-[30px] md:px-[55px] py-[8px] sm:py-[10px] md:py-[12px] rounded-[8px] sm:rounded-[10px] md:rounded-[50px] text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-200 ${
                activeTab === "auction"
                  ? "bg-[#151f36] text-white"
                  : "text-[#8893ac] hover:text-white"
              }`}
            >
              Аукцион
            </button>
          </div>
        </div>

        {/* Search and filter section */}
        <div className="flex-col w-full sm:flex-row gap-[12px] sm:gap-[16px] md:gap-[20px] mb-[15px] sm:mb-[25px] md:mb-[15px] ">
          {/* Search bar */}
          <div className="flex-1 relative bg-[#0e1423] rounded-[8px] sm:rounded-[10px] md:rounded-[12px] py-[12px] sm:py-[14px] md:py-[16px] px-[40px] sm:px-[44px] md:px-[48px] mb-[15px]">
            <div className="absolute left-[12px] sm:left-[16px] md:left-[20px] top-1/2 transform -translate-y-1/2">
              <Image
                src="/assets/svg/search-icon.svg"
                alt="search"
                width={16}
                height={16}
                className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
              />
            </div>
            <input
              type="text"
              placeholder="Введите имя или айдибула.."
              className="w-full bg-transparent text-[#8893ac] focus:outline-none text-[12px] sm:text-[14px] md:text-[16px] placeholder:text-[#8893ac]"
            />
          </div>

          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center justify-center sm:justify-start gap-[8px] sm:gap-[9px] text-white bg-[#0e1423] sm:bg-transparent rounded-[8px] sm:rounded-none px-[16px] sm:px-0 py-[12px] sm:py-0 text-[12px] sm:text-[14px] md:text-[16px] hover:text-[#527BEB] transition-colors duration-200 whitespace-nowrap"
          >
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[10px] h-[8px] sm:w-[12px] sm:h-[9px]"
            >
              <path
                d="M7.28782 2.16007H0.514302C0.230264 2.16007 1.66361e-05 1.91831 1.66361e-05 1.62005C1.66361e-05 1.3218 0.230264 1.08004 0.514302 1.08004H7.28782C7.49959 0.450815 8.07109 0 8.74286 0C9.41463 0 9.98614 0.450815 10.1979 1.08004H11.4857C11.7698 1.08004 12 1.3218 12 1.62005C12 1.91831 11.7698 2.16007 11.4857 2.16007H10.1979C9.98614 2.78929 9.41463 3.24011 8.74286 3.24011C8.07109 3.24011 7.49959 2.78929 7.28782 2.16007Z"
                fill="currentColor"
              />
              <path
                d="M11.4857 7.91996C11.7697 7.91996 12 7.67819 12 7.37994C12 7.08169 11.7697 6.83993 11.4857 6.83993H4.71218C4.50041 6.2107 3.92891 5.75989 3.25714 5.75989C2.58537 5.75989 2.01386 6.2107 1.80209 6.83993H0.514285C0.230247 6.83993 0 7.08169 0 7.37994C0 7.67819 0.230247 7.91996 0.514285 7.91996H1.80209C2.01386 8.54918 2.58537 9 3.25714 9C3.92891 9 4.50041 8.54918 4.71218 7.91996H11.4857Z"
                fill="currentColor"
              />
            </svg>
            <span className="hidden sm:inline">Фильтр и сортировка</span>
            <span className="sm:hidden">Фильтр</span>
          </button>
        </div>

        {/* Filter Modal */}
        {isFilterModalOpen && (
          <div className="">
            <div className="w-full mb-[200px]">
              {/* Modal Content */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] sm:gap-[15px]">
                {/* Filter Controls Row 1 */}
                <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[15px] w-full sm:w-auto">
                  {/* Price Range */}
                  <div className="px-[20px] py-[14px] w-full sm:max-w-[225px] bg-[#0e1423] rounded-[12px]">
                    <h4 className="flex items-center gap-[9px] text-[#e0e5ec] text-[14px] font-medium mb-[12px]">
                      <svg
                        width={14}
                        height={16}
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.0639 5.52337L8.23343 0.586725C7.81396 0.146727 7.21055 -0.0686053 6.62433 0.0193943L2.24004 0.647392C1.89187 0.697392 1.64809 1.03339 1.69583 1.39806C1.74356 1.76272 2.06373 2.01739 2.41317 1.96805L6.79809 1.34006C6.99287 1.31206 7.194 1.38206 7.33976 1.53472L12.1709 6.47137C12.836 7.16803 12.901 8.25803 12.3765 9.03603C12.2275 8.7247 12.0436 8.42803 11.7966 8.16936L7.03869 3.22805C6.61987 2.78938 6.02219 2.57805 5.4296 2.66072L1.04468 3.28872C0.755701 3.33005 0.530376 3.57205 0.49855 3.87605L0.01162 8.4867C-0.0520311 9.09403 0.147833 9.68936 0.561565 10.122L5.28193 15.024C5.88279 15.654 6.68161 16 7.53135 16H7.54217C8.39637 15.9973 9.1971 15.6453 9.79733 15.0087L11.8132 12.87C12.4032 12.244 12.6998 11.4307 12.7189 10.6114L13.0862 10.2274C14.3115 8.92736 14.3045 6.81937 13.0658 5.52271L13.0639 5.52337ZM3.18144 6.66737C2.83009 6.66737 2.54493 6.3687 2.54493 6.00071C2.54875 5.12871 3.81413 5.12937 3.81795 6.00071C3.81795 6.3687 3.5328 6.66737 3.18144 6.66737Z"
                          fill="#E0E5EC"
                        />
                      </svg>
                      Цена
                    </h4>
                    <div className="flex gap-[5px]">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="От"
                          className="w-full bg-[#151f36] placeholder:text-[#8893ac] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none text-[12px] sm:text-[14px]"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="До"
                          className="w-full bg-[#151f36] placeholder:text-[#94A0BD] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none text-[12px] sm:text-[14px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sort button */}
                <button className="flex items-center justify-center gap-[8px] bg-[#0E1423] text-[#e0e5ec] rounded-[10px] px-[16px] py-[8px] text-[12px] sm:text-[14px] hover:bg-[#1a2332] transition-colors font-medium w-full sm:w-auto">
                  От низкой цены до высокой
                  <Image
                    src="/assets/svg/arrow-bottom.svg"
                    alt="arrow-down"
                    width={8}
                    height={4}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Nicknames list */}
        <div className="grid grid-cols-1 gap-[5px]">
          {nicknames.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === nicknames.length - 1;

            let roundedClass = "";
            if (isFirst && isLast) {
              // Agar faqat bitta element bo'lsa
              roundedClass = "rounded-[15px]";
            } else if (isFirst) {
              // Birinchi element
              roundedClass = "rounded-t-[15px]";
            } else if (isLast) {
              // Oxirgi element
              roundedClass = "rounded-b-[15px]";
            }

            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-3 sm:p-4 bg-[#0E1423] ${roundedClass} gap-3 sm:gap-0`}
              >
                <div className="flex items-center justify-between sm:justify-start sm:flex-1 gap-3 sm:gap-[12px] md:gap-[16px]">
                  <div className="flex items-center gap-[6px] sm:gap-[8px] md:gap-[12px]">
                    <div className="flex-shrink-0">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9139 8.63212C11.679 7.56914 10.894 6.71091 9.96071 6.49741C9.25514 6.33567 8.57009 6.54116 7.99465 6.76291L7.63102 6.9039C7.26831 7.0499 6.89337 7.20115 6.5242 7.28639C6.36638 7.32239 6.2134 7.33739 6.05558 7.33189C5.59527 7.31889 5.1262 7.14265 4.61697 6.9514C4.04476 6.73916 3.45293 6.51941 2.76351 6.47466C2.17261 6.43691 1.62485 6.57366 1.18069 6.87265C0.494266 7.33539 0.0544921 8.19638 0.00442344 9.1766C-0.0301863 9.88509 0.139171 10.6076 0.481807 11.2116C1.06694 12.2413 2.0374 12.7908 2.91002 13.1928C4.12644 13.751 5.08836 14 6.02951 14C6.07843 14 6.12734 13.9998 6.16495 13.9975C7.32737 13.9673 8.46188 13.4865 9.2143 13.1273C11.3047 12.1293 12.3139 10.4488 11.9139 8.63212Z"
                          fill="#E0E5EC"
                        />
                        <path
                          d="M5.99894 5.99987C7.52569 5.99987 8.76772 4.65415 8.76772 2.99994C8.76772 1.34572 7.52569 0 5.99894 0C4.47219 0 3.23017 1.34572 3.23017 2.99994C3.23017 4.65415 4.47219 5.99987 5.99894 5.99987Z"
                          fill="#E0E5EC"
                        />
                      </svg>
                    </div>
                    <div className="text-[#94A0BD] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
                      {item.holder}
                    </div>
                  </div>

                  <div className="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                    <div>
                      <p className="text-[#E0E5EC] font-medium text-[14px] sm:text-[15px] md:text-[16px]">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-[#8893AC] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]">
                          {item.link}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px]">
                  <div className="flex flex-col items-center sm:items-end">
                    <span className="text-[#3EB574] font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                      {item.price}
                    </span>
                    <span className="text-[#8893AC] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                      {item.tonPrice}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <BasketButton
                      text="Купить"
                      onClick={() => handleBuyClick(item.name, item.price)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nickname Modal */}
      {selectedNickname && (
        <NicknameModal
          isOpen={isNicknameModalOpen}
          onClose={handleCloseModal}
          nickname={selectedNickname.name}
          price={selectedNickname.price}
        />
      )}
    </div>
  );
}
