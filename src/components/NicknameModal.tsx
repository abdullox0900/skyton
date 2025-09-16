"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

interface NicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
  price: string;
}

export default function NicknameModal({ isOpen, onClose }: NicknameModalProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    // Handle registration logic here
    console.log("Registering nickname:", inputValue);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 t">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4 mx-auto">
        <DialogPanel className="mx-auto max-w-[790px] w-full bg-[#0E1423] rounded-[20px] sm:rounded-[50px] pt-[32px] pb-[30px] px-[20px] sm:pt-[64px] sm:pb-[60px] sm:px-[88px] shadow-xl">
          <DialogTitle className="text-center text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-[#E0E5EC] font-bold mb-[16px] sm:mb-[22px]">
            Придумайте себе имя
          </DialogTitle>

          <p className="text-center text-[#999B9E] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] mb-[20px] sm:mb-[27px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] font-light">
            Имя нужно для того, чтобы другие пользователи могли видеть вас и
            взаимодействовать с вами и вашими товарами.
          </p>

          <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[15px]">
            <div className="flex-1 relative">
              <div className="absolute left-[15px] sm:left-[20px] md:left-[30px] top-1/2 transform -translate-y-1/2">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[8px] h-[10px] sm:w-[9px] sm:h-[12px] md:w-[10px] md:h-[14px]"
                >
                  <path
                    d="M4.44358 5.7269C4.45358 5.2426 4.58525 5.09305 4.99639 5.0905C5.40752 5.09369 5.54864 5.25724 5.55586 5.7148C5.54753 6.22074 5.42752 6.36011 5.00306 6.36329C4.58025 6.36074 4.45358 6.21756 4.44358 5.7269ZM10 7.63607C10 11.1534 9.39441 12.95 9.3683 13.0244C9.31052 13.1931 9.19273 13.3248 9.04439 13.3878C8.9855 13.4126 7.56986 14 4.99972 14C2.42958 14 1.01395 13.4126 0.955053 13.3878C0.806711 13.3248 0.688927 13.1931 0.631146 13.0244C0.605589 12.95 0 11.1534 0 7.63607C0 4.11873 0.605589 2.3222 0.631146 2.24774C0.69115 2.07337 0.816157 1.93782 0.971165 1.87799C1.00228 1.8659 1.67176 1.61262 2.81071 1.43761C3.11295 0.47093 3.83355 0 4.99972 0C6.1659 0 6.88649 0.471567 7.18873 1.43761C8.32768 1.61262 8.99717 1.86654 9.02828 1.87799C9.18384 1.93782 9.3083 2.07273 9.3683 2.24774C9.39441 2.3222 10 4.11873 10 7.63607ZM3.33241 5.73899C3.35185 6.93795 3.958 7.62971 5.00306 7.63607C6.04089 7.62907 6.64759 6.93731 6.66704 5.71544C6.64926 4.55212 6.01145 3.82472 4.99639 3.81772C3.973 3.82472 3.3513 4.5343 3.33241 5.71544V5.73899ZM7.74432 9.96591C7.46875 9.09214 6.92094 8.5022 6.27813 8.38702C5.4353 8.23556 4.56359 8.23492 3.72021 8.38702C3.07795 8.5022 2.53014 9.09214 2.25457 9.96591C2.15012 10.2968 2.29957 10.6615 2.58848 10.7805C2.8696 10.8995 3.19573 10.7321 3.29963 10.398C3.43352 9.97418 3.6602 9.68526 3.89244 9.64389C4.62248 9.51343 5.37696 9.51343 6.10645 9.64389C6.33868 9.68526 6.56592 9.97482 6.69926 10.398C6.80371 10.7289 7.12317 10.8995 7.41041 10.7805C7.69932 10.6608 7.84821 10.2962 7.74432 9.96591Z"
                    fill="#8893AC"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите никнейм до 16 символов.."
                className="w-full bg-[#151F36] rounded-[50px] pl-[35px] sm:pl-[40px] md:pl-[50px] pr-4 py-[12px] sm:py-[16px] md:py-[20px] text-white placeholder:text-[#8893AC] focus:outline-none focus:border-[#527BEB] transition-colors text-[14px] sm:text-[16px]"
                maxLength={16}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
              className="bg-[#527BEB] hover:bg-[#4A6FD8] disabled:bg-[#3A4A6B] disabled:cursor-not-allowed text-white font-semibold px-4 sm:px-6 py-[12px] sm:py-3 rounded-[50px] transition-colors whitespace-nowrap text-[14px] sm:text-[16px] w-full sm:w-auto"
            >
              Зарегистрировать
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
