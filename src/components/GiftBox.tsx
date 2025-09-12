'use client'

import Image from 'next/image'

type GiftBoxProps = {
    color: 'blue' | 'green' | 'red'
    months: number
}

const GiftBox = ({ color, months }: GiftBoxProps) => {
    const gifSrc = `/assets/svg/gif-${color}.svg`

    return (
        <div className="flex flex-col items-center">
            <div className="mb-2">
                <Image
                    src={gifSrc}
                    alt={`${color} gift box`}
                    width={123}
                    height={126}
                    className="object-contain"
                />
            </div>
            <div className="text-center">
                <p className="font-medium text-[16px] text-[#e0e5ec]">Telegram Premium</p>
                <p className="text-sm text-[#e0e5ec] text-[12px]">на {months} месяца</p>
            </div>
        </div>
    )
}

export default GiftBox
