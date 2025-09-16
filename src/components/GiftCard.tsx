'use client'


interface GiftCardProps {
    hasCharacter?: boolean
    title?: string
    subtitle?: string
    id?: string
    price?: string
    tonPrice?: string
}

export default function GiftCard({
    hasCharacter = false,
    title = "Holder",
    subtitle = "Future Gifts",
    id = "#35841",
    price = "446.258 ₽",
    tonPrice = "~ 1.751 TON ~"
}: GiftCardProps) {
    return (
        <div className="flex flex-col items-center w-full max-w-[161px] mx-auto">
            <div className='bg-[#0E1423] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] w-full'>
                {/* Card container */}
                <div
                    className="relative w-full aspect-square max-w-[140px] sm:max-w-[150px] md:max-w-[160px] mx-auto rounded-[16px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden z-20"
                    style={{ background: 'radial-gradient(75.27% 122.66% at -26.84% 50%, #7785a2 0%, #354057 100%)' }}
                >
                    {/* Background image only when there's a character */}
                    {hasCharacter && (
                        <div className='w-full h-full absolute inset-0 z-20' style={{
                            backgroundImage: 'url(/assets/img/card-bg-img.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                    )}

                    {/* Empty state pattern - show when no character */}
                    {!hasCharacter && (
                        <div className="absolute inset-0 rounded-[16px] sm:rounded-[18px] md:rounded-[20px]" >
                            {/* Pattern overlay for empty cards */}
                            <div className="w-full h-full">
                                {/* Pattern dots/leaves arranged in a grid */}
                                {Array.from({ length: 12 }, (_, index) => (
                                    <div
                                        key={index}
                                        className="absolute w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] opacity-40"
                                        style={{
                                            left: `${20 + (index % 3) * 30}%`,
                                            top: `${15 + Math.floor(index / 3) * 25}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-[#84a1e9] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-[4px] sm:mt-[5px] md:mt-[6px] mb-[4px] sm:mb-[5px] text-center px-2">
                    {title}
                </div>
            </div>

            {/* Card info */}
            <div className="mt-[8px] sm:mt-[10px] md:mt-[12px] w-full max-w-[161px]">
                <div className="flex items-center justify-between mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px] px-1">
                    <span className="text-[#e0e5ec] text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium truncate">
                        {subtitle}
                    </span>
                    <span className="text-[#94A0BD] text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] ml-2 whitespace-nowrap">
                        {id}
                    </span>
                </div>

                {/* Price button */}
                <button className="w-full transition-colors duration-200 rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[100px] py-[6px] sm:py-[7px] md:py-[8px] lg:py-[7px] px-[8px] sm:px-[10px] md:px-[12px] lg:px-[20px] mb-[3px] sm:mb-[4px]" style={{ background: 'linear-gradient(90deg, #335d96 0%, #4881cf 100%)' }}>
                    <div className="text-[#c0d2ff] font-semibold text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-[1px] sm:mb-[2px]">
                        {price}
                    </div>
                </button>
                <div className="text-[#84a1e9] text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] text-center">
                    {tonPrice}
                </div>
            </div>
        </div>
    )
}
