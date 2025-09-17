"use client";

import BasketButton from "@/components/BasketButton";
import GiftBox from "@/components/GiftBox";
import Hero from "@/components/Hero";
import HomeGiftCard from "@/components/HomeGiftCard";
import ProfileSection from "@/components/ProfileSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Function to calculate star icon count based on star amount
  const getStarCount = (starAmount: string): number => {
    const stars = parseInt(starAmount.replace(/\D/g, ""));
    if (stars <= 90) return 1;
    if (stars <= 100) return 2;
    if (stars <= 500) return 3;
    if (stars <= 1000) return 4;
    if (stars <= 5000) return 5;
    if (stars <= 25000) return 6;
    if (stars <= 50000) return 7;
    if (stars <= 100000) return 10;
    return 12;
  };

  // Sample data for each section
  const nicknameItems = [
    {
      name: "@bump",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      name: "@shah",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      name: "@analchick",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      name: "@chlen",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      name: "@bump",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      name: "@shah",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
  ];

  const numberItems = [
    {
      number: "+ 888 0807 0605",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      number: "+ 888 0919 2460",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      number: "+ 888 0831 2929",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      number: "+ 888 0540 6195",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      number: "+ 888 0807 0605",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
    {
      number: "+ 888 0919 2460",
      price: "1 555 389 ₽",
      tonPrice: "~ 5 569 TON ~",
      tonPrice2: "~ 5 569 TON ~",
    },
  ];

  const giftItems = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    hasCharacter: true,
    title: "Future Gifts",
    subtitle: "Holder",
    cardId: "#35841",
    price: "1.751",
    tonPrice: "1.751",
  }));

  const starItems = [
    { amount: "50 звёзд", price: "59 ₽", tonPrice: "~ 0.23 TON ~" },
    { amount: "500 звёзд", price: "829 ₽", tonPrice: "~ 3.26 TON ~" },
    { amount: "100 звёзд", price: "179 ₽", tonPrice: "~ 0.68 TON ~" },
    { amount: "1000 звёзд", price: "1 649 ₽", tonPrice: "~ 6.35 TON ~" },
    { amount: "250 звёзд", price: "423.99 ₽", tonPrice: "~ 1.62 TON ~" },
    { amount: "2500 звёзд", price: "4 099 ₽", tonPrice: "~ 16.74 TON ~" },
  ];

  const premiumBoxes = [
    {
      color: "green" as const,
      months: 3,
      price: "569 ₽",
      tonPrice: "~ 2,267 TON ~",
    },
    {
      color: "blue" as const,
      months: 6,
      price: "1,397 ₽",
      tonPrice: "~ 5,567 TON ~",
    },
    {
      color: "red" as const,
      months: 12,
      price: "2,539 ₽",
      tonPrice: "~ 10,118 TON ~",
    },
  ];

  return (
    <div>
      <Hero
        title="Удобный, Практичный,"
        titleSecondLine="Единственный."
        subtitle="Ваша уникальность теперь имеет цену, и каждый актив в Skyton подтверждает, что она выше, чем просто символы на экране."
        showSubtitle={true}
        showButton={true}
        buttonText="Начать после авторизации"
      />

      <div className="max-w-[1370px] bg-[#0E1423] p-4 sm:p-[60px] mx-auto mb-[315px] rounded-[20px] sm:rounded-[50px]">
        {/* Никнеймы Telegram Section */}
        <section className="mb-8 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-6 gap-3">
            <div className="flex items-center gap-3 sm:gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#527BEB] rounded-[10px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0005 0C8.08418 0.00315335 5.28824 1.16273 3.22611 3.22431C1.16399 5.28589 0.00409797 8.08109 0.000943779 10.9966C-0.113635 19.7701 10.2296 25.1355 17.3252 19.9927C17.4739 19.8893 17.6007 19.7574 17.6983 19.6048C17.7959 19.4522 17.8623 19.2818 17.8938 19.1034C17.9253 18.925 17.9212 18.7422 17.8817 18.5654C17.8423 18.3886 17.7683 18.2213 17.664 18.0732C17.5597 17.9251 17.4272 17.7991 17.274 17.7023C17.1208 17.6056 16.95 17.5401 16.7714 17.5096C16.5928 17.4791 16.4099 17.4842 16.2333 17.5245C16.0567 17.5649 15.8898 17.6398 15.7422 17.7449C10.4688 21.6102 2.62525 17.5451 2.75083 10.9966C3.18347 0.0641461 18.8184 0.0659788 19.2501 10.9966V12.3712C19.2501 12.7357 19.1053 13.0854 18.8474 13.3432C18.5896 13.6009 18.2398 13.7458 17.8752 13.7458C17.5105 13.7458 17.1608 13.6009 16.9029 13.3432C16.6451 13.0854 16.5002 12.7357 16.5002 12.3712V10.9966C16.2692 3.7306 5.73078 3.73151 5.50071 10.9966C5.50986 12.0622 5.82768 13.1023 6.41572 13.9911C7.00375 14.8799 7.8368 15.5793 8.8141 16.0047C9.79139 16.4301 10.871 16.5633 11.9225 16.3881C12.9739 16.213 13.952 15.737 14.7385 15.0177C15.2845 15.6569 16.0128 16.1141 16.8259 16.3279C17.6391 16.5418 18.4981 16.5021 19.2881 16.2142C20.078 15.9263 20.7611 15.4039 21.2458 14.7171C21.7305 14.0302 21.9936 13.2117 22 12.3712V10.9966C21.9968 8.08109 20.837 5.28589 18.7748 3.22431C16.7127 1.16273 13.9168 0.00315335 11.0005 0ZM11.0005 13.7458C10.2712 13.7458 9.57171 13.4561 9.05601 12.9405C8.54031 12.425 8.25059 11.7257 8.25059 10.9966C8.25059 10.2675 8.54031 9.56823 9.05601 9.05266C9.57171 8.5371 10.2712 8.24745 11.0005 8.24745C11.7298 8.24745 12.4292 8.5371 12.9449 9.05266C13.4606 9.56823 13.7504 10.2675 13.7504 10.9966C13.7504 11.7257 13.4606 12.425 12.9449 12.9405C12.4292 13.4561 11.7298 13.7458 11.0005 13.7458Z"
                    fill="#E0E5EC"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-xl font-semibold text-[#E0E5EC]">
                Никнеймы Telegram
              </h2>
              <span className="text-xs sm:text-sm ml-[5px] text-[#9A9EA4] hidden sm:inline">
                Последние предложения
              </span>
            </div>
            <Link
              href="/nicknames"
              className="flex items-center justify-center gap-2 text-[#527BEB] hover:text-white transition-colors bg-[#192440] py-[8px] px-4 sm:px-[36px] rounded-[50px] w-full sm:w-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13238 3.5179C7.86222 2.63459 8.36253 1.70045 9.24808 1.43462L13.7917 0.0721533C14.6748 -0.19284 15.6054 0.308814 15.8689 1.19213L16.3275 2.72709C16.5902 3.60623 16.0923 4.53288 15.2135 4.7987L10.6831 6.17034C9.80342 6.437 8.87284 5.94118 8.60434 5.06203L8.13238 3.5179ZM15.6262 6.1645L11.0917 7.5378C10.2078 7.8053 9.71003 8.73944 9.98104 9.62192L10.4388 11.1119C10.7073 11.986 11.6296 12.481 12.5068 12.221L17.063 10.8719C17.9577 10.6069 18.4605 9.66025 18.1795 8.77111L17.7 7.25698C17.424 6.387 16.5001 5.89951 15.6262 6.1645ZM19.9606 12.3502C19.8188 11.9127 19.3494 11.671 18.9116 11.8119L9.71504 14.7651L6.15615 2.69542C5.8668 1.70961 5.20556 0.904633 4.29416 0.428811C3.38442 -0.0470104 2.34544 -0.129508 1.369 0.19465L0.570169 0.460477C0.13323 0.606307 -0.10275 1.07796 0.0431739 1.51462C0.188264 1.95044 0.658558 2.18877 1.098 2.04127L1.89683 1.77544C2.438 1.59462 3.01503 1.64128 3.52118 1.90544C4.02732 2.1696 4.39505 2.61709 4.55599 3.16541L8.06818 15.0735C7.88306 15.0293 7.69128 15.0001 7.49282 15.0001C6.11112 15.0001 4.99126 16.1193 4.99126 17.5001C4.99126 18.8809 6.11112 20 7.49282 20C8.87451 20 9.99438 18.8809 9.99438 17.5001C9.99438 17.1384 9.91349 16.7967 9.77424 16.4859L19.4211 13.3968C19.8597 13.256 20.1007 12.7868 19.9598 12.3485L19.9606 12.3502Z"
                  fill="#84A1E9"
                />
              </svg>
              <span className="text-[16px] sm:text-[20px] text-[#84A1E9]">
                Показать полный ассортимент
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[29px]">
            {nicknameItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-0 bg-[#192440] sm:bg-transparent rounded-lg sm:rounded-none"
              >
                <div>
                  <p className="text-[#E0E5EC] font-medium text-base sm:text-base">
                    {item.name}
                  </p>
                  <p className="text-[#8893AC] text-sm sm:text-sm">
                    {item.tonPrice}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-3">
                  <div className="flex flex-col items-end gap-[2px]">
                    <span className="text-[#3EB574] font-semibold text-base sm:text-base">
                      {item.price}
                    </span>
                    <span className="text-[#8893AC] text-sm sm:text-sm">
                      {item.tonPrice2}
                    </span>
                  </div>
                  <BasketButton text="Купить" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Номера Telegram Section */}
        <section className="mb-8 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-6 gap-3">
            <div className="flex items-center gap-3 sm:gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#527BEB] rounded-[10px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.72509C0 12.7262 9.28434 22 16.2774 22C17.808 22 19.2377 21.4227 20.2917 20.3688L21.2083 19.315C22.2714 18.252 22.2714 16.4559 21.1624 15.3471C21.1349 15.3196 18.9261 13.6243 18.9261 13.6243C17.8263 12.5796 16.0941 12.5796 15.0034 13.6243L13.6653 14.6965C10.7324 13.4502 8.65194 11.3608 7.31383 8.32761L8.37699 6.98969C9.43099 5.8992 9.43099 4.15808 8.37699 3.06758C8.37699 3.06758 6.68143 0.859107 6.65393 0.831615C5.54494 -0.277205 3.74856 -0.277205 2.63957 0.831615L1.67723 1.66552C0.577406 2.75601 0 4.18557 0 5.71592V5.72509Z"
                    fill="#E0E5EC"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-xl font-semibold text-[#E0E5EC]">
                Номера Telegram
              </h2>
              <span className="text-xs sm:text-sm ml-[5px] text-[#9A9EA4] hidden sm:inline">
                Последние предложения
              </span>
            </div>
            <Link
              href="/numbers"
              className="flex items-center justify-center gap-2 text-[#527BEB] hover:text-white transition-colors bg-[#192440] py-[8px] px-4 sm:px-[36px] rounded-[50px] w-full sm:w-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13238 3.5179C7.86222 2.63459 8.36253 1.70045 9.24808 1.43462L13.7917 0.0721533C14.6748 -0.19284 15.6054 0.308814 15.8689 1.19213L16.3275 2.72709C16.5902 3.60623 16.0923 4.53288 15.2135 4.7987L10.6831 6.17034C9.80342 6.437 8.87284 5.94118 8.60434 5.06203L8.13238 3.5179ZM15.6262 6.1645L11.0917 7.5378C10.2078 7.8053 9.71003 8.73944 9.98104 9.62192L10.4388 11.1119C10.7073 11.986 11.6296 12.481 12.5068 12.221L17.063 10.8719C17.9577 10.6069 18.4605 9.66025 18.1795 8.77111L17.7 7.25698C17.424 6.387 16.5001 5.89951 15.6262 6.1645ZM19.9606 12.3502C19.8188 11.9127 19.3494 11.671 18.9116 11.8119L9.71504 14.7651L6.15615 2.69542C5.8668 1.70961 5.20556 0.904633 4.29416 0.428811C3.38442 -0.0470104 2.34544 -0.129508 1.369 0.19465L0.570169 0.460477C0.13323 0.606307 -0.10275 1.07796 0.0431739 1.51462C0.188264 1.95044 0.658558 2.18877 1.098 2.04127L1.89683 1.77544C2.438 1.59462 3.01503 1.64128 3.52118 1.90544C4.02732 2.1696 4.39505 2.61709 4.55599 3.16541L8.06818 15.0735C7.88306 15.0293 7.69128 15.0001 7.49282 15.0001C6.11112 15.0001 4.99126 16.1193 4.99126 17.5001C4.99126 18.8809 6.11112 20 7.49282 20C8.87451 20 9.99438 18.8809 9.99438 17.5001C9.99438 17.1384 9.91349 16.7967 9.77424 16.4859L19.4211 13.3968C19.8597 13.256 20.1007 12.7868 19.9598 12.3485L19.9606 12.3502Z"
                  fill="#84A1E9"
                />
              </svg>
              <span className="text-[16px] sm:text-[20px] text-[#84A1E9]">
                Показать полный ассортимент
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[29px]">
            {numberItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 sm:p-0 bg-[#192440] sm:bg-transparent rounded-lg sm:rounded-none"
              >
                <div>
                  <p className="text-[#E0E5EC] font-medium text-base sm:text-base">
                    {item.number}
                  </p>
                  <p className="text-[#8893AC] text-sm sm:text-sm">
                    {item.tonPrice}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-3">
                  <div className="flex flex-col items-end gap-[2px]">
                    <span className="text-[#3EB574] font-semibold text-base sm:text-base">
                      {item.price}
                    </span>
                    <span className="text-[#8893AC] text-sm sm:text-sm">
                      {item.tonPrice2}
                    </span>
                  </div>
                  <BasketButton text="Купить" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Подарки Telegram Section */}
        <section className="mb-8 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-6 gap-3">
            <div className="flex items-center gap-3 sm:gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#527BEB] rounded-[10px]">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.83333 13.75H10.0833V22H6.41667C5.20109 22 4.0353 21.5171 3.17576 20.6576C2.31622 19.798 1.83333 18.6322 1.83333 17.4167V13.75ZM22 10.0833C22 10.5696 21.8068 11.0359 21.463 11.3797C21.1192 11.7235 20.6529 11.9167 20.1667 11.9167H11.9167V8.21058C11.6087 8.23442 11.3016 8.25 11 8.25C10.6984 8.25 10.3913 8.23442 10.0833 8.21058V11.9167H1.83333C1.3471 11.9167 0.880788 11.7235 0.536971 11.3797C0.193154 11.0359 0 10.5696 0 10.0833C0 9.11087 0.386308 8.17824 1.07394 7.49061C1.76158 6.80298 2.69421 6.41667 3.66667 6.41667H5.25983C4.74155 5.9598 4.33015 5.39447 4.05482 4.7608C3.77948 4.12712 3.64697 3.44062 3.66667 2.75C3.66667 2.50688 3.76324 2.27373 3.93515 2.10182C4.10706 1.92991 4.34022 1.83333 4.58333 1.83333C4.82645 1.83333 5.05961 1.92991 5.23151 2.10182C5.40342 2.27373 5.5 2.50688 5.5 2.75C5.5 5.1535 7.67342 5.98583 9.32617 6.27092C8.71614 5.1893 8.34891 3.98784 8.25 2.75C8.25 2.02065 8.53973 1.32118 9.05546 0.805456C9.57118 0.289731 10.2707 0 11 0C11.7293 0 12.4288 0.289731 12.9445 0.805456C13.4603 1.32118 13.75 2.02065 13.75 2.75C13.6511 3.98784 13.2839 5.1893 12.6738 6.27092C14.3266 5.98583 16.5 5.1535 16.5 2.75C16.5 2.50688 16.5966 2.27373 16.7685 2.10182C16.9404 1.92991 17.1736 1.83333 17.4167 1.83333C17.6598 1.83333 17.8929 1.92991 18.0648 2.10182C18.2368 2.27373 18.3333 2.50688 18.3333 2.75C18.353 3.44062 18.2205 4.12712 17.9452 4.7608C17.6699 5.39447 17.2585 5.9598 16.7402 6.41667H18.3333C19.3058 6.41667 20.2384 6.80298 20.9261 7.49061C21.6137 8.17824 22 9.11087 22 10.0833ZM10.0833 2.75C10.194 3.72426 10.5062 4.66483 11 5.51192C11.4938 4.66483 11.806 3.72426 11.9167 2.75C11.9167 2.50688 11.8201 2.27373 11.6482 2.10182C11.4763 1.92991 11.2431 1.83333 11 1.83333C10.7569 1.83333 10.5237 1.92991 10.3518 2.10182C10.1799 2.27373 10.0833 2.50688 10.0833 2.75ZM11.9167 22H15.5833C16.1852 22 16.7812 21.8814 17.3373 21.6511C17.8934 21.4208 18.3986 21.0832 18.8242 20.6576C19.2498 20.232 19.5874 19.7267 19.8178 19.1706C20.0481 18.6146 20.1667 18.0186 20.1667 17.4167V13.75H11.9167V22Z"
                    fill="#E0E5EC"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-xl font-semibold text-[#E0E5EC]">
                Подарки Telegram
              </h2>
              <span className="text-xs sm:text-sm ml-[5px] text-[#9A9EA4] hidden sm:inline">
                Последние предложения
              </span>
            </div>
            <Link
              href="/numbers"
              className="flex items-center justify-center gap-2 text-[#527BEB] hover:text-white transition-colors bg-[#192440] py-[8px] px-4 sm:px-[36px] rounded-[50px] w-full sm:w-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13238 3.5179C7.86222 2.63459 8.36253 1.70045 9.24808 1.43462L13.7917 0.0721533C14.6748 -0.19284 15.6054 0.308814 15.8689 1.19213L16.3275 2.72709C16.5902 3.60623 16.0923 4.53288 15.2135 4.7987L10.6831 6.17034C9.80342 6.437 8.87284 5.94118 8.60434 5.06203L8.13238 3.5179ZM15.6262 6.1645L11.0917 7.5378C10.2078 7.8053 9.71003 8.73944 9.98104 9.62192L10.4388 11.1119C10.7073 11.986 11.6296 12.481 12.5068 12.221L17.063 10.8719C17.9577 10.6069 18.4605 9.66025 18.1795 8.77111L17.7 7.25698C17.424 6.387 16.5001 5.89951 15.6262 6.1645ZM19.9606 12.3502C19.8188 11.9127 19.3494 11.671 18.9116 11.8119L9.71504 14.7651L6.15615 2.69542C5.8668 1.70961 5.20556 0.904633 4.29416 0.428811C3.38442 -0.0470104 2.34544 -0.129508 1.369 0.19465L0.570169 0.460477C0.13323 0.606307 -0.10275 1.07796 0.0431739 1.51462C0.188264 1.95044 0.658558 2.18877 1.098 2.04127L1.89683 1.77544C2.438 1.59462 3.01503 1.64128 3.52118 1.90544C4.02732 2.1696 4.39505 2.61709 4.55599 3.16541L8.06818 15.0735C7.88306 15.0293 7.69128 15.0001 7.49282 15.0001C6.11112 15.0001 4.99126 16.1193 4.99126 17.5001C4.99126 18.8809 6.11112 20 7.49282 20C8.87451 20 9.99438 18.8809 9.99438 17.5001C9.99438 17.1384 9.91349 16.7967 9.77424 16.4859L19.4211 13.3968C19.8597 13.256 20.1007 12.7868 19.9598 12.3485L19.9606 12.3502Z"
                  fill="#84A1E9"
                />
              </svg>
              <span className="text-[16px] sm:text-[20px] text-[#84A1E9]">
                Показать полный ассортимент
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {giftItems.map((gift) => (
              <HomeGiftCard
                key={gift.id}
                title={gift.title}
                subtitle={gift.subtitle}
                id={gift.cardId}
                price={gift.price}
                tonPrice={gift.tonPrice}
              />
            ))}
          </div>
        </section>

        {/* Звёзды Telegram Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-[30px] sm:mb-6 gap-3">
            <div className="flex items-center gap-[10px] sm:gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#527BEB] rounded-[10px]">
                <svg
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4299 10.5068C21.4299 10.0765 21.1805 9.68165 20.7835 9.48596C19.7671 8.98471 18.6786 8.52351 17.459 8.07491C15.4428 7.32647 13.9738 5.88223 13.2104 3.90356C12.753 2.70308 12.2826 1.63421 11.7733 0.636288C11.5735 0.247191 11.1623 0 10.7144 0C10.2665 0 9.85282 0.247191 9.65545 0.637432C9.14727 1.63192 8.67809 2.70079 8.22073 3.89898C7.45727 5.88109 5.98709 7.32532 3.97445 8.07262C2.74773 8.52466 1.65809 8.98585 0.645273 9.48596C0.249364 9.6805 0 10.0753 0 10.5056C0 10.9359 0.249364 11.3307 0.646454 11.5264C1.66518 12.0277 2.75364 12.49 3.97091 12.9363C5.98709 13.6848 7.45609 15.129 8.21955 17.1088C8.67927 18.3139 9.14845 19.3805 9.65545 20.3749C9.85518 20.7652 10.2653 21.0124 10.7144 21.0124C11.1635 21.0124 11.5747 20.7652 11.7733 20.3749C12.2826 19.3805 12.7518 18.3116 13.208 17.1123C13.9726 15.1301 15.444 13.6859 17.4543 12.9386C18.6763 12.49 19.7647 12.0288 20.7835 11.5276C21.1805 11.3319 21.4299 10.9382 21.4299 10.5068Z"
                    fill="#E0E5EC"
                  />
                  <path
                    d="M19.0214 4.75385C19.3227 4.90262 19.6194 5.02507 19.9113 5.13265C20.1559 5.2242 20.3273 5.39357 20.4195 5.63046C20.5282 5.92 20.6523 6.20838 20.8024 6.50364C20.9997 6.89503 21.411 7.14451 21.8613 7.14451H21.8636C22.3127 7.14451 22.724 6.89732 22.9225 6.50707C23.0726 6.21296 23.1955 5.92343 23.3055 5.63618C23.4 5.39357 23.5714 5.2242 23.8113 5.13493C24.1079 5.02622 24.4034 4.90377 24.7047 4.75499C25.1018 4.56045 25.3512 4.16448 25.3512 3.73419C25.3512 3.30389 25.1006 2.90907 24.7035 2.71452C24.4034 2.56804 24.1079 2.44559 23.8148 2.33687C23.5714 2.24646 23.4 2.07709 23.3066 1.83677C23.1955 1.54723 23.0726 1.2577 22.9214 0.962443C22.7228 0.573346 22.3115 0.326155 21.8625 0.326155H21.8601C21.4098 0.326155 20.9997 0.57449 20.8012 0.965876C20.6523 1.25999 20.5282 1.54952 20.4206 1.83333C20.3261 2.07595 20.1547 2.24532 19.9148 2.33458C19.617 2.44444 19.3215 2.56575 19.0202 2.71452C18.6231 2.90907 18.3737 3.30389 18.3737 3.73419C18.3737 4.16448 18.6231 4.5593 19.0202 4.75385H19.0214Z"
                    fill="#E0E5EC"
                  />
                  <path
                    d="M25.3524 16.9337C24.9777 16.7495 24.6078 16.5961 24.2438 16.4634C23.8432 16.3146 23.5513 16.0262 23.4012 15.6348C23.2629 15.2732 23.1081 14.9116 22.9214 14.5454C22.7216 14.1551 22.3104 13.9079 21.8625 13.9079C21.4122 13.9079 21.0009 14.1563 20.8035 14.5476C20.618 14.9139 20.4632 15.2743 20.3285 15.6291C20.1748 16.0262 19.8829 16.3146 19.4882 16.4611C19.1195 16.5961 18.7484 16.7495 18.3749 16.9349C17.979 17.1306 17.7296 17.5242 17.7296 17.9545C17.7296 18.3848 17.979 18.7785 18.3749 18.9742C18.7484 19.1584 19.1171 19.3107 19.4846 19.4468C19.8829 19.5945 20.1748 19.8817 20.3261 20.2742C20.4632 20.6347 20.618 20.9964 20.8047 21.3614C21.0033 21.7517 21.4134 21.9989 21.8636 22C22.3127 22 22.7228 21.754 22.9225 21.3637C23.1105 20.9975 23.2653 20.6359 23.4024 20.2777C23.5536 19.8817 23.8455 19.5945 24.2438 19.4468C24.6125 19.3107 24.9801 19.1596 25.3535 18.9753C25.7506 18.7796 26 18.3848 26 17.9545C26 17.5242 25.7506 17.1294 25.3535 16.9337H25.3524Z"
                    fill="#E0E5EC"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-xl font-semibold text-white">
                Звёзды Telegram
              </h2>
              <span className="text-[14px] sm:text-sm ml-[10px] text-[#8893ac] hidden sm:inline">
                Последние предложения
              </span>
            </div>
            <Link
              href="/numbers"
              className="flex items-center gap-2 text-[#527BEB] hover:text-white transition-colors bg-[#192440] py-[8px] px-[36px] rounded-[50px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13238 3.5179C7.86222 2.63459 8.36253 1.70045 9.24808 1.43462L13.7917 0.0721533C14.6748 -0.19284 15.6054 0.308814 15.8689 1.19213L16.3275 2.72709C16.5902 3.60623 16.0923 4.53288 15.2135 4.7987L10.6831 6.17034C9.80342 6.437 8.87284 5.94118 8.60434 5.06203L8.13238 3.5179ZM15.6262 6.1645L11.0917 7.5378C10.2078 7.8053 9.71003 8.73944 9.98104 9.62192L10.4388 11.1119C10.7073 11.986 11.6296 12.481 12.5068 12.221L17.063 10.8719C17.9577 10.6069 18.4605 9.66025 18.1795 8.77111L17.7 7.25698C17.424 6.387 16.5001 5.89951 15.6262 6.1645ZM19.9606 12.3502C19.8188 11.9127 19.3494 11.671 18.9116 11.8119L9.71504 14.7651L6.15615 2.69542C5.8668 1.70961 5.20556 0.904633 4.29416 0.428811C3.38442 -0.0470104 2.34544 -0.129508 1.369 0.19465L0.570169 0.460477C0.13323 0.606307 -0.10275 1.07796 0.0431739 1.51462C0.188264 1.95044 0.658558 2.18877 1.098 2.04127L1.89683 1.77544C2.438 1.59462 3.01503 1.64128 3.52118 1.90544C4.02732 2.1696 4.39505 2.61709 4.55599 3.16541L8.06818 15.0735C7.88306 15.0293 7.69128 15.0001 7.49282 15.0001C6.11112 15.0001 4.99126 16.1193 4.99126 17.5001C4.99126 18.8809 6.11112 20 7.49282 20C8.87451 20 9.99438 18.8809 9.99438 17.5001C9.99438 17.1384 9.91349 16.7967 9.77424 16.4859L19.4211 13.3968C19.8597 13.256 20.1007 12.7868 19.9598 12.3485L19.9606 12.3502Z"
                  fill="#84A1E9"
                />
              </svg>
              <span className="text-[20px] text-[#84A1E9]">
                Показать полный ассортимент
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-[32px] sm:gap-y-[36px]">
            {starItems.map((item, index) => {
              const starCount = getStarCount(item.amount);

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#192440] sm:bg-[#0E1423] p-3 sm:p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4 sm:gap-[32px]">
                    {/* Dynamic star icons - stacked/overlapped */}
                    <div className="flex items-center relative">
                      {Array.from({ length: starCount }, (_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/assets/svg/star-color-icon.svg"
                          alt="Star"
                          width={20}
                          height={20}
                          className="w-[18px] h-[18px] sm:w-6 sm:h-6"
                          style={{
                            marginLeft: starIndex > 0 ? "-16px" : "0",
                            zIndex: starCount - starIndex,
                            filter: "drop-shadow(0 0px 1px #0E1423)",
                          }}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="text-[#e0e5ec] font-medium text-base sm:text-[20px]">
                        {item.amount}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-[36px]">
                    <div className="flex flex-col items-end">
                      <span className="font-semibold text-base sm:text-[20px] text-[#3EB574]">
                        {item.price}
                      </span>
                      <p className="text-[#8893AC] text-sm sm:text-[14px]">
                        {item.tonPrice}
                      </p>
                    </div>
                    <BasketButton text="Купить" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Премиум Telegram Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-6 gap-3">
            <div className="flex items-center gap-3 sm:gap-3">
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#527BEB] rounded-[10px]">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.766 2.1971C22.4006 2.04166 21.9981 2.00081 21.6099 2.07973C21.2217 2.15866 20.8653 2.35379 20.586 2.64028L18 5.281L13.414 0.597964C13.0389 0.215088 12.5303 0 12 0C11.4697 0 10.9611 0.215088 10.586 0.597964L6 5.281L3.414 2.64028C3.1343 2.35475 2.77797 2.16031 2.39006 2.08154C2.00216 2.00277 1.60009 2.04322 1.23469 2.19776C0.869291 2.3523 0.556965 2.614 0.337197 2.94978C0.117428 3.28556 8.44486e-05 3.68033 0 4.0842V14.8942C0.00158786 16.2478 0.528882 17.5456 1.46622 18.5028C2.40356 19.4599 3.67441 19.9984 5 20H19C20.3256 19.9984 21.5964 19.4599 22.5338 18.5028C23.4711 17.5456 23.9984 16.2478 24 14.8942V4.0842C24.0001 3.6803 23.8829 3.28544 23.6633 2.94954C23.4436 2.61364 23.1314 2.35179 22.766 2.1971Z"
                    fill="#E0E5EC"
                  />
                  <path
                    d="M16 8.28349L14.4183 15.667C14.4183 15.667 14.1973 16.179 13.5888 15.9332L9.9226 13.335C10.4154 12.9249 14.2383 9.74255 14.4055 9.59823C14.6639 9.37489 14.5035 9.24197 14.2031 9.41088L8.55638 12.7312L6.37785 12.0521C6.37785 12.0521 6.03488 11.9395 6.00187 11.6937C5.96867 11.4479 6.38898 11.3148 6.38898 11.3148L15.2701 8.0889C15.2701 8.0889 16 7.79195 16 8.28349Z"
                    fill="#527BEB"
                  />
                </svg>
              </div>
              <h2 className="text-[20px] sm:text-xl font-semibold text-white">
                Премиум Telegram
              </h2>
              <span className="text-xs sm:text-sm ml-[5px] text-[#9A9EA4] hidden sm:inline">
                Последние предложения
              </span>
            </div>
            <Link
              href="/numbers"
              className="flex items-center justify-center gap-2 text-[#527BEB] hover:text-white transition-colors bg-[#192440] py-[8px] px-4 sm:px-[36px] rounded-[50px] w-full sm:w-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.13238 3.5179C7.86222 2.63459 8.36253 1.70045 9.24808 1.43462L13.7917 0.0721533C14.6748 -0.19284 15.6054 0.308814 15.8689 1.19213L16.3275 2.72709C16.5902 3.60623 16.0923 4.53288 15.2135 4.7987L10.6831 6.17034C9.80342 6.437 8.87284 5.94118 8.60434 5.06203L8.13238 3.5179ZM15.6262 6.1645L11.0917 7.5378C10.2078 7.8053 9.71003 8.73944 9.98104 9.62192L10.4388 11.1119C10.7073 11.986 11.6296 12.481 12.5068 12.221L17.063 10.8719C17.9577 10.6069 18.4605 9.66025 18.1795 8.77111L17.7 7.25698C17.424 6.387 16.5001 5.89951 15.6262 6.1645ZM19.9606 12.3502C19.8188 11.9127 19.3494 11.671 18.9116 11.8119L9.71504 14.7651L6.15615 2.69542C5.8668 1.70961 5.20556 0.904633 4.29416 0.428811C3.38442 -0.0470104 2.34544 -0.129508 1.369 0.19465L0.570169 0.460477C0.13323 0.606307 -0.10275 1.07796 0.0431739 1.51462C0.188264 1.95044 0.658558 2.18877 1.098 2.04127L1.89683 1.77544C2.438 1.59462 3.01503 1.64128 3.52118 1.90544C4.02732 2.1696 4.39505 2.61709 4.55599 3.16541L8.06818 15.0735C7.88306 15.0293 7.69128 15.0001 7.49282 15.0001C6.11112 15.0001 4.99126 16.1193 4.99126 17.5001C4.99126 18.8809 6.11112 20 7.49282 20C8.87451 20 9.99438 18.8809 9.99438 17.5001C9.99438 17.1384 9.91349 16.7967 9.77424 16.4859L19.4211 13.3968C19.8597 13.256 20.1007 12.7868 19.9598 12.3485L19.9606 12.3502Z"
                  fill="#84A1E9"
                />
              </svg>
              <span className="text-[16px] sm:text-[20px] text-[#84A1E9]">
                Показать полный ассортимент
              </span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-[129px]">
            {premiumBoxes.map((box, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full sm:w-auto"
              >
                <div className="mb-4 sm:mb-[10px] w-full sm:w-auto max-w-[180px] sm:max-w-none mx-auto transform scale-75 sm:scale-100">
                  <GiftBox
                    color={box.color}
                    months={box.months}
                    width={238}
                    height={243}
                    titleStyle="text-[16px] sm:text-[24px] text-[#E0E5EC]"
                    descriptionStyle="text-[16px] sm:text-[24px] text-[#E0E5EC]"
                  />
                </div>
                <BasketButton text={box.price} />
                <div className="text-[#8893AC] text-[12px] sm:text-[14px] mt-2 text-center">
                  {box.tonPrice}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Profile Section */}
      <ProfileSection />
    </div>
  );
}
