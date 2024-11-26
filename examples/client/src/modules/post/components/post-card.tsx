import Image from 'next/image'
import Link from 'next/link'

import { Clock, Calendar } from 'lucide-react'
import { BlogPostCardProps } from '../types'
import { convertToHtml } from '@/utils/convertToHtml'


export default function BlogPostCard({
    title,
    author,
    published_at,
    readTime,
    image_url,
    slug,
    summary,
    status,
    category,
}: BlogPostCardProps) {


    const htmlSummary = { __html: convertToHtml(summary) }
    return (
        <Link
            href={`/blog/${slug}`}
            className="group flex flex-col h-[70vh] overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
        >
            <div className="relative flex-1 h-full w-full overflow-hidden sm:h-56">
                <img
                    src={image_url}
                    alt=""
                    className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-30 bg-gradient-to-br from-blue-500/20 to-green-500/20" />
                {status === 'draft' && (
                    <div className="absolute right-2 top-2 rounded-full bg-yellow-400 px-2 py-1 text-xs font-medium text-yellow-900">
                        Draft
                    </div>
                )}
            </div>

            <div className="flex flex-col p-6">
                <div className='flex justify-between items-center'>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white sm:text-2xl">
                        {title}
                    </h2>

                    <ul className="flex space-x-2">
                        <li className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {category.name}
                        </li>
                    </ul>

                </div>
                <div dangerouslySetInnerHTML={htmlSummary} className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-300" />

                <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                            {author.image ? (
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-blue-500 text-sm font-medium text-white">
                                    {author.name[0]}
                                </div>
                            )}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                            {author.name}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={new Date(published_at).toISOString()}>
                                {new Date(published_at).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </time>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{readTime} read</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

