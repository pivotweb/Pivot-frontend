// components/Header.tsx
import React from 'react'
import clsx from 'clsx' // optional: remove clsx if you don’t use it

/**
 * Maps each nav label to a multiplier of the viewport height.
 * 0   → top of the page
 * 0.2 → 20 % of current screen height
 * 0.4 → 40 %, 0.6 → 60 %, etc.
 */
const SCROLL_POS: Record<string, number> = {
    Home: 0,
    About: 1.33,
    '2025 Edition': 3,
    '2024 Recap': 4.85,
    'Get Involved': 6.75,
    Gallery: 7.43,
    Contact: 10.5, // ► tweak or remove if your page isn’t that tall
}

export const Header: React.FC = () => {
    /** Scroll helper  */
    const scrollTo = (multiplier: number) => {
        const y = window.innerHeight * multiplier
        window.scrollTo({ top: y, behavior: 'smooth' })
    }

    /** Render  */
    return (
        <header className="sticky top-0 z-50 bg-white flex flex-row items-center justify-between py-4 px-4 md:px-8">
            <img src="images/logo2.jpeg" alt="The Pivot" className="w-40" />

            <nav className="flex space-x-6">
                {Object.keys(SCROLL_POS).map((label) => (
                    <a
                        key={label}
                        href="#!"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollTo(SCROLL_POS[label])
                        }}
                        className={clsx(
                            'text-black text-lg transition-colors duration-200',
                            'hover:text-[#F06621]',
                        )}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    )
}
