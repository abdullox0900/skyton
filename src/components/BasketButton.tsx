'use client'

import Image from 'next/image'

type BasketButtonProps = {
    text: string
    onClick?: () => void
    className?: string
}

const BasketButton = ({ text, onClick, className = '' }: BasketButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 py-[10px] px-[37px]  bg-gradient-to-r from-[#335d96] to-[#4881cf] rounded-full hover:opacity-90 transition-all duration-300 active:scale-95 ${className}`}
        >
            <Image
                src="/assets/svg/basket-icon.svg"
                alt="Basket"
                width={18}
                height={18}
                className="object-contain"
            />
            <span className="text-white font-medium">
                {text}
            </span>
        </button>
    )
}

export default BasketButton
