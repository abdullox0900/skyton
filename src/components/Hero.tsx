import Image from 'next/image'

interface HeroProps {
    title: string
    titleSecondLine?: string
    subtitle?: string
    showSubtitle?: boolean
    showButton?: boolean
    buttonText?: string
}

export default function Hero({
    title,
    titleSecondLine,
    subtitle,
    showSubtitle = true,
    showButton = true,
    buttonText = "Начать после авторизации"
}: HeroProps) {
    return (
        <div className="mt-[80px] md:mt-[100px] lg:mt-[136px] mb-[80px] md:mb-[100px] lg:mb-[150px]">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center px-4 mx-auto" style={{ maxWidth: '1034px' }}>
                {/* Background decorative images - Responsive positioning */}
                <div className="absolute left-0 md:left-[50px] lg:left-[100px] top-1/2 transform -translate-y-[80px] hidden md:block">
                    <Image
                        src="/assets/svg/hero-left-img.svg"
                        alt="Hero decoration left"
                        width={80}
                        height={80}
                        className="object-cover md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                    />
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-[100px] md:-translate-y-[150px] lg:-translate-y-[180px] hidden md:block">
                    <Image
                        src="/assets/svg/hero-right-img.svg"
                        alt="Hero decoration right"
                        width={150}
                        height={150}
                        className="object-cover md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]"
                    />
                </div>

                {/* Hero Content */}
                <div className="text-center mx-auto relative z-10 w-full">
                    {/* Main Title - Responsive font sizes */}
                    <h1 className={`font-bold leading-tight ${titleSecondLine ? 'text-[36px] sm:text-[42px] md:text-[48px] mb-4 md:mb-6' : 'text-[36px] md:text-[48px] lg:text-[60px] mb-6'}`} style={{ color: '#E0E5EC' }}>
                        {title}
                        {titleSecondLine && (
                            <>
                                <br />
                                <span className="block text-[36px] sm:text-[42px] md:text-[60px] lg:text-[75px]">{titleSecondLine}</span>
                            </>
                        )}
                    </h1>

                    {/* Subtitle - Responsive text and spacing */}
                    {showSubtitle && subtitle && (
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-[30px] md:mb-[40px] lg:mb-[56px] px-2" style={{ color: '#999B9E' }}>
                            {subtitle}
                        </p>
                    )}

                    {/* CTA Button - Responsive sizing */}
                    {showButton && (
                        <button
                            className="inline-flex items-center justify-center gap-2 md:gap-3 px-[20px] sm:px-[24px] md:px-[27px] py-[12px] sm:py-[14px] md:py-[16px] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium text-white rounded-[10px] md:rounded-[15px] hover:opacity-90 transition-all duration-300 active:scale-95 w-full sm:w-auto max-w-[320px] sm:max-w-none mx-auto"
                            style={{ backgroundColor: '#527BEB' }}
                        >
                            {buttonText}
                            <Image
                                src="/assets/svg/arrow-right.svg"
                                alt="Arrow right"
                                width={16}
                                height={16}
                                className="ml-0 md:ml-1 w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                            />
                        </button>
                    )}
                </div>
            </section>
        </div>
    )
}
