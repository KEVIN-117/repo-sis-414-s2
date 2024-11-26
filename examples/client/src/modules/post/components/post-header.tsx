import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

interface BlogHeaderProps {
    category: string
    title: string
    author: string
    date: string
    readTime: string
}

export function PostHeader({
    category = "Cloud Education",
    title = "Top 10 Reasons to Choose DigitalOcean's Managed Kafka Solution",
    author = "Faye Hutsell",
    date = "April 23, 2024",
    readTime = "4 min read"
}: BlogHeaderProps) {
    return (
        <div className="relative min-h-[40vh] w-full my-14 overflow-hidden custom-bg px-4 pb-16 pt-24 rounded-2xl shadow-xl shadow-[#5d41a7] text-white">
            {/* Wavy Background Pattern */}
            <div
                className="absolute set-glow-gb inset-0"
                
            />

            {/* Decorative Squares */}
            <div className="absolute right-4 top-4 flex space-x-1">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog Home
                </Link>
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-4xl text-center backdrop-blur-sm bg-stone-900/50 py-5 rounded-2xl">
                <div className="mb-6 inline-block rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white shadow-sm">
                    {category}
                </div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    {title}
                </h1>
                <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                        {/* <Image
                                            src={author.image}
                                            alt={author.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        /> */}
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{author}</span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <time className="text-gray-500 dark:text-gray-400">{date}</time>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{readTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

