"use client";

import Image from "next/image";

interface HomeGiftCardProps {
  title?: string;
  subtitle?: string;
  id?: string;
  price?: string;
  tonPrice?: string;
}

export default function HomeGiftCard({
  subtitle = "Holder",
  id = "#35841",
  price = "1.751",
}: HomeGiftCardProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-[#0E1423] rounded-[20px] w-full max-w-[180px]">
        {/* Card container */}
        <div
          className="relative w-full aspect-square rounded-[20px] overflow-hidden"
          style={{
            background:
              "radial-gradient(75.27% 122.66% at -26.84% 50%, #7785a2 0%, #354057 100%)",
          }}
        >
          {/* Character background image */}
          <div
            className="w-full h-full absolute inset-0 z-10"
            style={{
              backgroundImage: "url(/assets/img/card-bg-img.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Center card image */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Image
              src="/assets/svg/card-img.svg"
              alt="Card Image"
              width={117}
              height={117}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="mt-[7px] w-full max-w-[180px]">
        <div className="flex items-center justify-between mb-[12px] px-1">
          <span className="text-[#e0e5ec] text-[16px] font-medium">
            {subtitle}
          </span>
          <span className="text-[#94A0BD] text-[14px]">{id}</span>
        </div>

        {/* Price button */}
        <button className="w-full transition-colors bg-[#527BEB] duration-200 rounded-[15px] py-[10px] px-[20px] flex items-center justify-center gap-2 transform active:scale-[0.98]">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2741 0.769531L2.75215 0.769531C0.651791 0.769531 -0.668432 3.04618 0.351741 4.90345L7.43294 17.1854C7.91302 17.9642 9.05321 17.9642 9.53329 17.1854L16.6145 4.90345C17.6947 3.04618 16.3744 0.769531 14.2741 0.769531ZM7.49295 13.4709L5.93269 10.4753L2.21206 3.82504C1.97202 3.40565 2.27207 2.86645 2.81216 2.86645L7.49295 2.86645L7.49295 13.4709ZM14.8142 3.82504L11.0936 10.4753L9.53329 13.4709V2.86645L14.2141 2.86645C14.7542 2.86645 15.0542 3.40565 14.8142 3.82504Z"
              fill="#E0E5EC"
            />
          </svg>

          <div className="text-[#E0E5EC] font-semibold text-[16px]">
            {price}
          </div>
        </button>
      </div>
    </div>
  );
}
