'use client'

import Image from 'next/image'

type TelegramButtonProps = {
    text: string
    onClick?: () => void
    className?: string
}

const TelegramButton = ({ text, onClick, className = '' }: TelegramButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 py-3 px-6 bg-[#5B86E5] rounded-full hover:opacity-90 transition-all duration-300 active:scale-95 ${className}`}
        >
            <Image
                src="/assets/svg/telegram-small-icon.svg"
                alt="Telegram"
                width={18}
                height={17}
                className="object-contain"
            />
            <span className="text-white font-medium">
                {text}
            </span>
        </button>
    )
}

export default TelegramButton
