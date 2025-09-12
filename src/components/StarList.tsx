'use client'

import Image from 'next/image'
import BasketButton from './BasketButton'

interface StarItem {
    stars: number
    price: number
    tonPrice: number
}

const starData: StarItem[] = [
    { stars: 50, price: 89, tonPrice: 0.349 },
    { stars: 100, price: 179, tonPrice: 0.349 },
    { stars: 150, price: 259, tonPrice: 0.349 },
    { stars: 250, price: 423, tonPrice: 0.349 },
    { stars: 350, price: 589, tonPrice: 0.349 },
    { stars: 500, price: 829, tonPrice: 0.349 },
    { stars: 750, price: 1239, tonPrice: 0.349 },
    { stars: 1000, price: 1649, tonPrice: 0.349 },
    { stars: 1500, price: 2469, tonPrice: 0.349 },
    { stars: 2500, price: 4099, tonPrice: 0.349 },
    { stars: 5000, price: 8199, tonPrice: 0.349 },
    { stars: 10000, price: 16399, tonPrice: 0.349 },
    { stars: 25000, price: 40999, tonPrice: 0.349 },
    { stars: 50000, price: 81999, tonPrice: 0.349 },
    { stars: 100000, price: 163999, tonPrice: 0.349 },
    { stars: 150000, price: 244999, tonPrice: 0.349 },
]

const getStarCount = (stars: number): number => {
    if (stars <= 90) return 1
    if (stars <= 100) return 2
    if (stars <= 500) return 3
    if (stars <= 1000) return 4
    if (stars <= 5000) return 5
    if (stars <= 25000) return 6
    if (stars <= 50000) return 7
    if (stars <= 100000) return 10
    return 12
}

const formatPrice = (price: number): string => {
    if (price >= 1000) {
        return price.toLocaleString('ru-RU')
    }
    return price.toString()
}

export default function StarList() {
    return (
        <div className="space-y-[8px] sm:space-y-[10px] md:space-y-[12px] lg:space-y-[16px]">
            {starData.map((item, index) => {
                const starCount = getStarCount(item.stars)

                return (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-[#0E1423] rounded-[8px] sm:rounded-[10px] md:rounded-[15px] py-[12px] sm:py-[14px] md:py-[16px] px-[12px] sm:px-[16px] md:px-[20px] lg:px-[24px] gap-[12px] sm:gap-0"
                    >
                        {/* Left section - User and stars */}
                        <div className="flex items-center justify-between sm:justify-start sm:flex-1 gap-[8px] sm:gap-[12px] md:gap-[16px]">
                            {/* User info */}
                            <div className="flex items-center gap-[6px] sm:gap-[8px] md:gap-[12px]">
                                <div className="flex-shrink-0">
                                    <Image
                                        src="/assets/svg/user-icon.svg"
                                        alt="User"
                                        width={12}
                                        height={14}
                                        className="w-[9px] h-[11px] sm:w-[10px] sm:h-[12px] md:w-[12px] md:h-[14px] opacity-60"
                                    />
                                </div>
                                <div className="text-[#94A0BD] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">SkyTon</div>
                            </div>

                            {/* Stars and count */}
                            <div className="flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]">
                                {/* Dynamic star icons - stacked/overlapped */}
                                <div className="flex items-center relative">
                                    {Array.from({ length: starCount }, (_, starIndex) => (
                                        <Image
                                            key={starIndex}
                                            src="/assets/svg/star-color-icon.svg"
                                            alt="Star"
                                            width={20}
                                            height={18}
                                            className="w-[14px] h-[12px] sm:w-[16px] sm:h-[14px] md:w-[18px] md:h-[16px] lg:w-[20px] lg:h-[18px]"
                                            style={{
                                                marginLeft: starIndex > 0 ? '-12px' : '0',
                                                zIndex: starCount - starIndex,
                                                filter: 'drop-shadow(0 0px 1px #0E1423)'
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Star count number */}
                                <span className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium">
                                    {item.stars.toLocaleString('ru-RU')}
                                </span>
                            </div>
                        </div>

                        {/* Right section - Price and button */}
                        <div className="flex items-center justify-between sm:justify-end gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24px]">
                            {/* Price */}
                            <div className="flex flex-col items-center sm:items-end">
                                <span className="text-[#3eb574] font-semibold text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                                    {formatPrice(item.price)} ₽
                                </span>
                                <span className="text-[#8893ac] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]">
                                    ~ {item.tonPrice} TON ~
                                </span>
                            </div>

                            {/* Buy button */}
                            <div className="flex-shrink-0">
                                <BasketButton text="Купить" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
