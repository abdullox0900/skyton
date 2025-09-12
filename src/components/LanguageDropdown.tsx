'use client'

import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import React from 'react'

interface Language {
    key: string
    label: string
    flag: string
}

const languages: Language[] = [
    { key: 'ru', label: 'Русский', flag: 'ru' },
    { key: 'en', label: 'English', flag: 'us' },
    { key: 'zh', label: '中文', flag: 'cn' },
    { key: 'hi', label: 'हिंदी', flag: 'in' },
    { key: 'es', label: 'Español', flag: 'es' },
    { key: 'fr', label: 'Français', flag: 'fr' },
    { key: 'ar', label: 'العربية', flag: 'sa' },
]

const LanguageDropdown: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(languages[0])

    const handleLanguageChange = (language: Language) => {
        setSelectedLanguage(language)
        // You can add language change logic here
    }

    const items: MenuProps['items'] = languages.map((language) => ({
        key: language.key,
        label: (
            <div
                className="flex items-center gap-3 px-1 py-1 hover:bg-white/10 rounded cursor-pointer transition-colors"
                onClick={() => handleLanguageChange(language)}
            >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                    <span className={`fi fi-${language.flag} text-[170px]`}></span>
                </div>
                <span className="text-sm font-medium text-white">{language.label}</span>
            </div>
        ),
    }))

    return (
        <Dropdown
            menu={{ items }}
            trigger={['click']}
            placement="bottomRight"
            overlayClassName="language-dropdown"
        >
            <Button
                className="!bg-transparent !border-transparent hover:!bg-transparent hover:!border-transparent !rounded-full !h-10 !px-3 flex items-center justify-center gap-2 transition-all"
                onClick={(e) => e.preventDefault()}
            >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                    <span className={`fi fi-${selectedLanguage.flag} text-[170px]`}></span>
                </div>
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.09234" y1="0.23871" x2="4.76234" y2="3.9087" stroke="#8893AC" strokeWidth="0.584359" />
                    <line y1="-0.292179" x2="5.738" y2="-0.292179" transform="matrix(-0.707107 0.707107 0.707107 0.707107 9 0.445312)" stroke="#8893AC" strokeWidth="0.584359" />
                </svg>
            </Button>
        </Dropdown>
    )
}

export default LanguageDropdown
