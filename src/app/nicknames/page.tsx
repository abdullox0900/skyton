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
              <div className="flex flex-col justify-between items-start sm:flex-row gap-[10px] sm:gap-[15px]">
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

                   {/* Price Range */}
                   <div className="px-[20px] py-[14px] w-full sm:max-w-[225px] bg-[#0e1423] rounded-[12px]">
                    <h4 className="flex items-center gap-[9px] text-[#e0e5ec] text-[14px] font-medium mb-[12px]">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.36025C17 3.63202 16.8881 3.89266 16.6888 4.08483C16.4895 4.27701 16.2193 4.38497 15.9375 4.38497H14.938L15.4339 5.22113C15.561 5.4558 15.5891 5.72884 15.5121 5.98302C15.4352 6.23719 15.2592 6.45277 15.0211 6.58456C14.7829 6.71635 14.5011 6.75412 14.2348 6.68996C13.9684 6.6258 13.7381 6.46468 13.5922 6.24038L13.1049 5.42061L12.6175 6.24038C12.4716 6.46468 12.2414 6.6258 11.975 6.68996C11.7086 6.75412 11.4268 6.71635 11.1887 6.58456C10.9506 6.45277 10.7746 6.23719 10.6976 5.98302C10.6207 5.72884 10.6487 5.4558 10.7759 5.22113L11.2703 4.38497H10.2708C9.98904 4.38497 9.71879 4.27701 9.51953 4.08483C9.32028 3.89266 9.20833 3.63202 9.20833 3.36025C9.20833 3.08848 9.32028 2.82784 9.51953 2.63567C9.71879 2.4435 9.98904 2.33554 10.2708 2.33554H11.2703L10.7745 1.49937C10.6473 1.2647 10.6192 0.99166 10.6962 0.737485C10.7732 0.48331 10.9491 0.267734 11.1873 0.135943C11.4254 0.00415188 11.7072 -0.0336211 11.9736 0.0305414C12.2399 0.094704 12.4702 0.25582 12.6161 0.480119L13.1035 1.29989L13.5908 0.480119C13.7367 0.25582 13.967 0.094704 14.2334 0.0305414C14.4997 -0.0336211 14.7815 0.00415188 15.0196 0.135943C15.2578 0.267734 15.4338 0.48331 15.5107 0.737485C15.5877 0.99166 15.5596 1.2647 15.4325 1.49937L14.938 2.33554H15.9375C16.2193 2.33554 16.4895 2.4435 16.6888 2.63567C16.8881 2.82784 17 3.08848 17 3.36025ZM10.9792 9.85011H7.86604L9.40596 7.29038C9.54742 7.05484 9.58607 6.77476 9.51341 6.51174C9.44074 6.24872 9.26272 6.02431 9.0185 5.88788C8.77428 5.75145 8.48387 5.71418 8.21115 5.78426C7.93843 5.85433 7.70575 6.02603 7.56429 6.26156L6.02083 8.83291L4.47383 6.26156C4.33237 6.02648 4.09988 5.85522 3.82749 5.78546C3.55511 5.7157 3.26515 5.75316 3.0214 5.88959C2.77765 6.02602 2.60007 6.25025 2.52774 6.51294C2.45541 6.77564 2.49425 7.05529 2.63571 7.29038L4.17917 9.85011H1.0625C0.780707 9.85011 0.510456 9.95807 0.311199 10.1502C0.111942 10.3424 0 10.6031 0 10.8748C0 11.1466 0.111942 11.4072 0.311199 11.5994C0.510456 11.7916 0.780707 11.8995 1.0625 11.8995H4.17917L2.63571 14.4593C2.49425 14.6948 2.4556 14.9749 2.52826 15.2379C2.60092 15.5009 2.77895 15.7253 3.02317 15.8618C3.26739 15.9982 3.5578 16.0355 3.83052 15.9654C4.10323 15.8953 4.33592 15.7236 4.47738 15.4881L6.02083 12.9167L7.56783 15.4881C7.70929 15.7236 7.94198 15.8953 8.21469 15.9654C8.48741 16.0355 8.77782 15.9982 9.02204 15.8618C9.26626 15.7253 9.44428 15.5009 9.51695 15.2379C9.58961 14.9749 9.55096 14.6948 9.4095 14.4593L7.86604 11.8995H10.9792C11.261 11.8995 11.5312 11.7916 11.7305 11.5994C11.9297 11.4072 12.0417 11.1466 12.0417 10.8748C12.0417 10.6031 11.9297 10.3424 11.7305 10.1502C11.5312 9.95807 11.261 9.85011 10.9792 9.85011Z" fill="#E0E5EC"/>
</svg>

                      Кол-во символов
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
                Сначала старые                  <Image
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
                <div className="flex items-center sm:flex-1">
                  {/* Left side - Holder */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-[6px] sm:gap-[8px] md:gap-[12px] w-[100px] sm:w-[120px]">
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
                    
                    {/* Additional info based on active tab */}
                    {activeTab === "rent" && (
                      <div className="bg-[#151F36] rounded-[10px] px-[14px] py-[2px] mt-1">
                        <p className="text-[#94A0BD] text-[13px] sm:text-[12px]">
                          Длительность: <span className="text-[#BDCEF3]">3 месяца</span>
                        </p>
                      </div>
                    )}
                    {activeTab === "auction" && (
                      <div className="bg-[#151F36] rounded-[10px] px-[14px] py-[2px] mt-1">
                        <p className="text-[#94A0BD] text-[13px] sm:text-[12px]">
                          Осталось: <span className="text-[#BDCEF3]">7d 13:24:15</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Nickname */}
                  <div className="flex-1 text-center">
                    <p className="text-[#E0E5EC] font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
                      {item.name}
                    </p>
                    <p className="text-[#94A0BD] text-[12px] sm:text-[13px] md:text-[14px]">
                      {item.link}
                    </p>
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
