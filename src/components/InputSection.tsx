'use client'

import Image from 'next/image'

interface InputSectionProps {
    placeholder?: string
    linkText?: string
    onLinkClick?: () => void
    icon?: string
    iconAlt?: string
}

export default function InputSection({
    placeholder = "Введите Telegram юзернейм получателя..",
    linkText = "Использовать мой Telegram юзернейм",
    onLinkClick,
    icon = "/assets/svg/telegram-small-icon.svg",
    iconAlt = "Telegram"
}: InputSectionProps) {
    return (
        <div className="mb-[20px] md:mb-[10px]">
            <div>
                <div className="flex flex-col items-center md:flex-row gap-[24px] sm:gap-[36px] md:gap-[48px] lg:gap-[72px]">
                    <div className="w-full md:flex-1 relative bg-[#0E1423] rounded-[10px] md:rounded-[15px] py-[15px] md:py-[17px] pl-[50px] md:pl-[60px] pr-[16px] md:pr-[48px] max-w-[400px]">
                        <div className="absolute left-[20px] md:left-[32px] top-1/2 transform -translate-y-1/2">
                            <Image
                                src={icon}
                                alt={iconAlt}
                                width={18}
                                height={17}
                                className="opacity-60 w-[16px] h-[16px] md:w-[18px] md:h-[17px]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full bg-transparent pl-0 text-[#8893ac] focus:outline-none text-[14px] md:text-[16px]"
                        />
                    </div>
                    <div className="text-center md:text-right">
                        <a
                            href="#"
                            className="text-[#84A1E9] text-[14px] md:text-[16px] underline"
                            onClick={(e) => {
                                e.preventDefault()
                                onLinkClick?.()
                            }}
                        >
                            {linkText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
