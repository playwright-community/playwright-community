import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface MainLayoutProps {
    title: string
    description: string
    image?: string
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children, title, description, image }) => {
    const fullTitle = `${title} - Playwright Community`
    const baseURL = "https://" + (process.env.NEXT_PUBLIC_VERCEL_URL || "")
    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="title" content={fullTitle} />
                <meta name="description" content={description} />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎭</text></svg>" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content="summary" />
                {image && <>
                    <meta property="og:image" content={baseURL + image} />
                    <meta name="twitter:image" content={baseURL + image} />
                </>}
                <meta property="twitter:title" content={fullTitle} />
                <meta property="twitter:description" content={description} />
            </Head>
            {JSON.stringify(process.env)}
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

            <div className="container mx-auto p-3">
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