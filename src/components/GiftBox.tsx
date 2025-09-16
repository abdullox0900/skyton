"use client";

import Image from "next/image";

type GiftBoxProps = {
  color: "blue" | "green" | "red";
  months: number;
  width?: number;
  height?: number;
  titleStyle?: string;
  descriptionStyle?: string;
};

const GiftBox = ({
  color,
  months,
  width,
  height,
  titleStyle,
  descriptionStyle,
}: GiftBoxProps) => {
  const gifSrc = `/assets/svg/gif-${color}.svg`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <Image
          src={gifSrc}
          alt={`${color} gift box`}
          width={width || 123}
          height={height || 126}
          className="object-contain"
        />
      </div>
      <div className="text-center">
        <p className={`font-medium text-[16px] text-[#e0e5ec] ${titleStyle}`}>
          Telegram Premium
        </p>
        <p className={`text-sm text-[#e0e5ec] text-[12px] ${descriptionStyle}`}>
          на {months} месяца
        </p>
      </div>
    </div>
  );
};

export default GiftBox;
