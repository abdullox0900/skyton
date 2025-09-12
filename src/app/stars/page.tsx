import Hero from '@/components/Hero'
import InputSection from '@/components/InputSection'
import StarList from '@/components/StarList'
import Image from 'next/image'

export default function StarsPage() {
    return (
        <div>
            <Hero
                title="Удобный, Практичный,"
                titleSecondLine="Единственный."
                showSubtitle={false}
                showButton={false}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[790px] pb-[60px] md:pb-[80px] lg:pb-[100px]">
                <InputSection
                    placeholder="Введите Telegram юзернейм получателя.."
                    icon="/assets/svg/telegram-small-icon.svg"
                    iconAlt="Telegram"
                />

                {/* Stars input section - Responsive */}
                <div className="mb-[20px] md:mb-[10px]">
                    <div>
                        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-[#0E1423] rounded-[10px] md:rounded-[15px] py-[16px] md:py-[12px] lg:py-[17px] px-[16px] sm:px-[20px] md:px-[32px] lg:px-[48px] gap-[16px] md:gap-0">
                            {/* Input section */}
                            <div className="w-full md:flex-1 relative">
                                <div className="absolute left-[-8px] md:left-[-10px] lg:left-[-15px] top-1/2 transform -translate-y-1/2">
                                    <Image
                                        src="/assets/svg/star-icon.svg"
                                        alt="Star"
                                        width={18}
                                        height={17}
                                        className="opacity-60 w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[17px]"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Введите желаемое количество звёзд.."
                                    className="w-full bg-transparent pl-[12px] md:pl-[15px] text-[#8893ac] focus:outline-none text-[14px] md:text-[16px] py-[4px] md:py-0"
                                />
                            </div>

                            {/* Price and button section */}
                        </div>
                    </div>
                </div>

                <StarList />
            </div>
        </div>
    )
}