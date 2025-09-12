'use client'

import GiftCard from '@/components/GiftCard'
import Hero from '@/components/Hero'
import Image from 'next/image'
import { useState } from 'react'

export default function GiftsPage() {
    // State management
    const [activeTab, setActiveTab] = useState<'sale' | 'auction'>('sale')
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

    // Sample gift data - mix of cards with and without characters
    const gifts = Array.from({ length: 24 }, (_, index) => ({
        id: index,
        hasCharacter: index === 0, // Only first card has character
        title: "Holder",
        subtitle: "Future Gifts",
        cardId: "#35841",
        price: "446.258 ₽",
        tonPrice: "~ 1.751 TON ~"
    }))

    return (
        <div>
            <Hero
                title="Удобный, Практичный,"
                titleSecondLine="Единственный."
                showSubtitle={false}
                showButton={false}
            />

            <div className="max-w-[1034px] mx-auto px-3 sm:px-4 md:px-6 lg:px-4 pb-[40px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px]">
                {/* Navigation tabs */}
                <div className="flex justify-center mb-[10px] sm:mb-[15px] md:mb-[10px]">
                    <div className="flex gap-[15px] sm:gap-[20px] md:gap-[30px] sm:rounded-[12px] p-[4px] sm:p-[6px]">
                        <button
                            onClick={() => setActiveTab('sale')}
                            className={`px-[20px] sm:px-[30px] md:px-[55px] py-[8px] sm:py-[10px] md:py-[12px] rounded-[8px] sm:rounded-[10px] md:rounded-[50px] text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-200 ${activeTab === 'sale'
                                ? 'bg-[#151f36] text-white'
                                : 'text-[#8893ac] hover:text-white'
                                }`}
                        >
                            Продажа
                        </button>
                        <button
                            onClick={() => setActiveTab('auction')}
                            className={`px-[20px] sm:px-[30px] md:px-[55px] py-[8px] sm:py-[10px] md:py-[12px] rounded-[8px] sm:rounded-[10px] md:rounded-[50px] text-[12px] sm:text-[14px] md:text-[16px] font-medium transition-all duration-200 ${activeTab === 'auction'
                                ? 'bg-[#151f36] text-white'
                                : 'text-[#8893ac] hover:text-white'
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
                            <Image src="/assets/svg/search-icon.svg" alt="search" width={16} height={16} className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Введите имя или айдибула.."
                            className="w-full bg-transparent text-[#8893ac] focus:outline-none text-[12px] sm:text-[14px] md:text-[16px] placeholder:text-[#8893ac]"
                        />
                    </div>

                    <button
                        onClick={() => setIsFilterModalOpen(true)}
                        className='flex items-center justify-center sm:justify-start gap-[8px] sm:gap-[9px] text-white bg-[#0e1423] sm:bg-transparent rounded-[8px] sm:rounded-none px-[16px] sm:px-0 py-[12px] sm:py-0 text-[12px] sm:text-[14px] md:text-[16px] hover:text-[#527BEB] transition-colors duration-200 whitespace-nowrap'
                    >
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[10px] h-[8px] sm:w-[12px] sm:h-[9px]">
                            <path d="M7.28782 2.16007H0.514302C0.230264 2.16007 1.66361e-05 1.91831 1.66361e-05 1.62005C1.66361e-05 1.3218 0.230264 1.08004 0.514302 1.08004H7.28782C7.49959 0.450815 8.07109 0 8.74286 0C9.41463 0 9.98614 0.450815 10.1979 1.08004H11.4857C11.7698 1.08004 12 1.3218 12 1.62005C12 1.91831 11.7698 2.16007 11.4857 2.16007H10.1979C9.98614 2.78929 9.41463 3.24011 8.74286 3.24011C8.07109 3.24011 7.49959 2.78929 7.28782 2.16007Z" fill="currentColor" />
                            <path d="M11.4857 7.91996C11.7697 7.91996 12 7.67819 12 7.37994C12 7.08169 11.7697 6.83993 11.4857 6.83993H4.71218C4.50041 6.2107 3.92891 5.75989 3.25714 5.75989C2.58537 5.75989 2.01386 6.2107 1.80209 6.83993H0.514285C0.230247 6.83993 0 7.08169 0 7.37994C0 7.67819 0.230247 7.91996 0.514285 7.91996H1.80209C2.01386 8.54918 2.58537 9 3.25714 9C3.92891 9 4.50041 8.54918 4.71218 7.91996H11.4857Z" fill="currentColor" />
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
                            <div className="flex items-center gap-[10px] max-[1024px]:flex-col max-[1024px]:items-start">
                                {/* Filter Controls Row 1 */}
                                <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[15px]">
                                    {/* Price Range */}
                                    <div className='px-[20px] py-[14px] max-w-[225px] bg-[#0e1423] rounded-[12px]'>
                                        <h4 className="flex items-center gap-[9px] text-[#e0e5ec] text-[14px] font-medium mb-[12px]">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0639 5.52337L8.23343 0.586725C7.81396 0.146727 7.21055 -0.0686053 6.62433 0.0193943L2.24004 0.647392C1.89187 0.697392 1.64809 1.03339 1.69583 1.39806C1.74356 1.76272 2.06373 2.01739 2.41317 1.96805L6.79809 1.34006C6.99287 1.31206 7.194 1.38206 7.33976 1.53472L12.1709 6.47137C12.836 7.16803 12.901 8.25803 12.3765 9.03603C12.2275 8.7247 12.0436 8.42803 11.7966 8.16936L7.03869 3.22805C6.61987 2.78938 6.02219 2.57805 5.4296 2.66072L1.04468 3.28872C0.755701 3.33005 0.530376 3.57205 0.49855 3.87605L0.01162 8.4867C-0.0520311 9.09403 0.147833 9.68936 0.561565 10.122L5.28193 15.024C5.88279 15.654 6.68161 16 7.53135 16H7.54217C8.39637 15.9973 9.1971 15.6453 9.79733 15.0087L11.8132 12.87C12.4032 12.244 12.6998 11.4307 12.7189 10.6114L13.0862 10.2274C14.3115 8.92736 14.3045 6.81937 13.0658 5.52271L13.0639 5.52337ZM3.18144 6.66737C2.83009 6.66737 2.54493 6.3687 2.54493 6.00071C2.54875 5.12871 3.81413 5.12937 3.81795 6.00071C3.81795 6.3687 3.5328 6.66737 3.18144 6.66737Z" fill="#E0E5EC" />
                                            </svg>
                                            Цена
                                        </h4>
                                        <div className="flex gap-[5px]">
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="От"
                                                    className="w-full bg-[#151f36] placeholder:text-[#8893ac] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="До"
                                                    className="w-full bg-[#151f36] placeholder:text-[#94A0BD] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gift ID Range */}
                                    <div className='px-[20px] py-[14px] max-w-[225px] bg-[#0e1423] rounded-[12px]'>
                                        <h4 className="flex items-center gap-[9px] text-[#e0e5ec] text-[14px] font-medium mb-[12px]">
                                            <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0639 5.52337L8.23343 0.586725C7.81396 0.146727 7.21055 -0.0686053 6.62433 0.0193943L2.24004 0.647392C1.89187 0.697392 1.64809 1.03339 1.69583 1.39806C1.74356 1.76272 2.06373 2.01739 2.41317 1.96805L6.79809 1.34006C6.99287 1.31206 7.194 1.38206 7.33976 1.53472L12.1709 6.47137C12.836 7.16803 12.901 8.25803 12.3765 9.03603C12.2275 8.7247 12.0436 8.42803 11.7966 8.16936L7.03869 3.22805C6.61987 2.78938 6.02219 2.57805 5.4296 2.66072L1.04468 3.28872C0.755701 3.33005 0.530376 3.57205 0.49855 3.87605L0.01162 8.4867C-0.0520311 9.09403 0.147833 9.68936 0.561565 10.122L5.28193 15.024C5.88279 15.654 6.68161 16 7.53135 16H7.54217C8.39637 15.9973 9.1971 15.6453 9.79733 15.0087L11.8132 12.87C12.4032 12.244 12.6998 11.4307 12.7189 10.6114L13.0862 10.2274C14.3115 8.92736 14.3045 6.81937 13.0658 5.52271L13.0639 5.52337ZM3.18144 6.66737C2.83009 6.66737 2.54493 6.3687 2.54493 6.00071C2.54875 5.12871 3.81413 5.12937 3.81795 6.00071C3.81795 6.3687 3.5328 6.66737 3.18144 6.66737Z" fill="#E0E5EC" />
                                            </svg>
                                            ID подарка
                                        </h4>
                                        <div className="flex gap-[10px]">
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="От"
                                                    className="w-full bg-[#151f36] placeholder:text-[#8893ac] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="До"
                                                    className="w-full bg-[#151f36] placeholder:text-[#94A0BD] rounded-[50px] px-[10px] py-[5px] text-white focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* UI Elements from image */}
                                <div className="flex justify-between gap-[12px] flex-wrap">
                                    <div className='flex flex-1 justify-center gap-[35px] bg-[#0E1423] rounded-[10px] px-[39px] py-[11px]'>
                                        <button className="flex items-center font-medium gap-[10px] text-[#e0e5ec] text-[14px] transition-colors">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0038 7.74141C9.60722 7.95058 9.17485 8.09517 8.72549 8.16889V16C9.10785 15.931 9.47545 15.8046 9.81373 15.6256L14.1863 13.2872C14.737 12.9914 15.1944 12.5669 15.5126 12.0561C15.8309 11.5452 15.9989 10.966 16 10.3762V5.69811C15.9977 5.33906 15.9328 4.98271 15.8077 4.64285L10.0038 7.74141Z" fill="#E0E5EC" />
                                                <path d="M6.72459 6.57861C7.11315 6.78567 7.55356 6.89464 8.00181 6.89464C8.45007 6.89464 8.89048 6.78567 9.27904 6.57861L15.083 3.48005C14.8259 3.20641 14.5226 2.97327 14.1848 2.78976L9.81373 0.448695C9.26193 0.154715 8.63653 0 8 0C7.36347 0 6.73807 0.154715 6.18627 0.448695L1.81373 2.78774C1.48802 2.96444 1.19425 3.18739 0.94314 3.44846L6.72459 6.57861Z" fill="#E0E5EC" />
                                                <path d="M7.27451 8.16889C6.82488 8.09534 6.39223 7.95074 5.99547 7.74141L0.20604 4.60655C0.0720607 4.9572 0.00241748 5.32615 0 5.69811V10.3762C0.00106089 10.966 0.169114 11.5452 0.487379 12.0561C0.805644 12.5669 1.26298 12.9914 1.81373 13.2872L6.18627 15.6256C6.52455 15.8046 6.89215 15.931 7.27451 16V8.16889Z" fill="#E0E5EC" />
                                            </svg>
                                            Модели
                                        </button>
                                        <button className="flex items-center gap-[10px] text-[#e0e5ec] text-[14px] transition-colors font-medium">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0038 7.74141C9.60722 7.95058 9.17485 8.09517 8.72549 8.16889V16C9.10785 15.931 9.47545 15.8046 9.81373 15.6256L14.1863 13.2872C14.737 12.9914 15.1944 12.5669 15.5126 12.0561C15.8309 11.5452 15.9989 10.966 16 10.3762V5.69811C15.9977 5.33906 15.9328 4.98271 15.8077 4.64285L10.0038 7.74141Z" fill="#E0E5EC" />
                                                <path d="M6.72459 6.57861C7.11315 6.78567 7.55356 6.89464 8.00181 6.89464C8.45007 6.89464 8.89048 6.78567 9.27904 6.57861L15.083 3.48005C14.8259 3.20641 14.5226 2.97327 14.1848 2.78976L9.81373 0.448695C9.26193 0.154715 8.63653 0 8 0C7.36347 0 6.73807 0.154715 6.18627 0.448695L1.81373 2.78774C1.48802 2.96444 1.19425 3.18739 0.94314 3.44846L6.72459 6.57861Z" fill="#E0E5EC" />
                                                <path d="M7.27451 8.16889C6.82488 8.09534 6.39223 7.95074 5.99547 7.74141L0.20604 4.60655C0.0720607 4.9572 0.00241748 5.32615 0 5.69811V10.3762C0.00106089 10.966 0.169114 11.5452 0.487379 12.0561C0.805644 12.5669 1.26298 12.9914 1.81373 13.2872L6.18627 15.6256C6.52455 15.8046 6.89215 15.931 7.27451 16V8.16889Z" fill="#E0E5EC" />
                                            </svg>
                                            Задний фон
                                        </button>
                                    </div>
                                    <button className="flex items-center gap-[8px] bg-[#0E1423] text-[#e0e5ec] rounded-[10px] px-[16px] py-[8px] text-[14px] hover:bg-[#1a2332] transition-colors font-medium">
                                        От низкой цены до высокой
                                        <Image src="/assets/svg/arrow-bottom.svg" alt="arrow-down" width={8} height={4} />
                                    </button>
                                    <button className="flex items-center mr-auto gap-[8px] bg-[#0E1423] text-[#e0e5ec] ml-[13px] rounded-[10px] px-[16px] py-[10px] text-[14px] hover:bg-[#1a2332] transition-colors font-medium">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8659 5.4352L13.5904 12.3686C13.2924 13.3815 12.5436 14.141 11.6222 14.5044C11.8656 13.9396 12.0009 13.3181 12.0009 12.6653V5.99798C12.0009 3.42413 9.90676 1.33038 7.3339 1.33038H6.22381C7.04321 0.250826 8.48132 -0.27528 9.85409 0.144138L13.645 1.30837C15.3812 1.84181 16.3773 3.69285 15.8659 5.4352ZM10.6675 5.99798V12.666C10.6675 14.5044 9.17204 16 7.3339 16H3.33359C1.49545 16 0 14.5044 0 12.666V5.99798C0 4.15961 1.49545 2.66398 3.33359 2.66398H7.3339C9.17204 2.66398 10.6675 4.15961 10.6675 5.99798Z" fill="#E0E5EC" />
                                        </svg>
                                        Коллекции
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Gift cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[6px] sm:gap-[7px] md:gap-[8px] lg:gap-[7px] auto-rows-max">
                    {gifts.map((gift) => (
                        <GiftCard
                            key={gift.id}
                            hasCharacter={gift.hasCharacter}
                            title={gift.title}
                            subtitle={gift.subtitle}
                            id={gift.cardId}
                            price={gift.price}
                            tonPrice={gift.tonPrice}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}