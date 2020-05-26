import React from 'react'
import Link from 'next/link'

const MainLayout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <nav className="w-full py-4 px-3 bg-blue-800 shadow">
                <div className="w-full container mx-auto items-center justify-between">
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <span>
                            <Link href="/">
                                <a className="hover:text-gray-200">
                                    Playwright Community
                                </a>
                            </Link>
                        </span>
                        <span className="float-right">
                            <a className="hover:text-gray-200 hover:underspan px-5 hidden md:inline" href="https://try.playwright.tech">Try Playwright</a>
                            <a className="hover:text-gray-200 hover:underspan float-right" href="https://github.com/microsoft/playwright">Playwright on GitHub</a>
                        </span>
                    </ul>
                </div>
            </nav>

            <div className="container mx-auto px-3">
                {children}
            </div>
            <footer className="w-full border-t bg-white py-4">
                <div className="w-full container mx-auto flex flex-col items-center">
                    <div>
                        ©
                        <a href="https://connect.schmitt.mx" className="ml-1">
                            Max Schmitt
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainLayout