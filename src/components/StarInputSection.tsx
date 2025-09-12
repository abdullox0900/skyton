'use client'

import Image from 'next/image'
import BasketButton from './BasketButton'

export default function StarInputSection() {
    return (
        <div className="mb-[20px] md:mb-[10px]">
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#0E1423] rounded-[10px] md:rounded-[15px] py-[12px] md:py-[7px] px-[16px] md:px-[48px]">
                    <div className="w-full md:flex-1 relative mb-[16px] md:mb-0">
                        <div className="absolute left-[-10px] md:left-[-15px] top-1/2 transform -translate-y-1/2">
                            <Image
                                src="/assets/svg/star-icon.svg"
                                alt="Star"
                                width={18}
                                height={17}
                                className="opacity-60 w-[16px] h-[16px] md:w-[18px] md:h-[17px]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Введите желаемое количество звёзд.."
                            className="w-full bg-transparent pl-[15px] text-[#8893ac] focus:outline-none text-[14px] md:text-[16px]"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] md:gap-[34px]">
                        <div className="flex flex-col items-center">
                            <span className="text-[#3eb574] font-semibold text-[16px] md:text-[16px]">89 ₽</span>
                            <span className="text-[#8893ac] text-[12px] md:text-sm">~ 0,349 TON ~</span>
                        </div>
                        <div>
                            <BasketButton text="Купить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
