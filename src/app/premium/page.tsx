
import BasketButton from '@/components/BasketButton'
import GiftBox from '@/components/GiftBox'
import Hero from '@/components/Hero'
import InputSection from '@/components/InputSection'
import Image from 'next/image'

export default function PremiumPage() {
    return (
        <div>
        <Hero
            title="Удобный, Практичный,"
            titleSecondLine="Единственный."
            showSubtitle={false}
            showButton={false}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[790px] pb-[60px] md:pb-[80px] lg:pb-[100px]">

            {/* Input section */}
            <InputSection />

            {/* Stars input section */}
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

            {/* Gift boxes */}
            <div className="bg-[#0e1423] rounded-[10px] md:rounded-[15px] py-[24px] sm:py-[32px] md:py-[48px] px-[16px] sm:px-[32px] md:px-[64px] lg:px-[98px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px] md:gap-[40px]">
                    <div className="flex flex-col items-center">
                        <GiftBox color="green" months={3} />
                        <div className="mt-[12px] md:mt-[6px]">
                            <BasketButton text="Купить" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <GiftBox color="blue" months={6} />
                        <div className="mt-[12px] md:mt-[6px]">
                            <BasketButton text="Купить" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
                        <GiftBox color="red" months={12} />
                        <div className="mt-[12px] md:mt-[6px]">
                            <BasketButton text="Купить" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
