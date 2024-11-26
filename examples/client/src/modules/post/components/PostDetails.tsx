import { Facebook, Twitter, Linkedin } from 'lucide-react'
import { convertToHtml, convertToHtmlShowdown } from '@/utils/convertToHtml'
import { BlogPostCardProps } from '../types'
import { marked } from 'marked'
import { PostHeader } from './post-header'



export async function PostDetails({ post }: { post: BlogPostCardProps }) {

    const { title,
        author,
        published_at,
        readTime,
        image_url,
        status,
        summary,
        category,
        content,
    } = post

    const htmlSummary = { __html: convertToHtml(summary) }
    const htmlContent = { __html: convertToHtmlShowdown(content) }//{ __html: convertToHtml(content) }

    async function extractTableOfContentsFromMarkdown(content: string) {
        // Convertimos el contenido de Markdown a HTML
        const htmlContent = await marked(content);

        // Patrón para buscar encabezados h2 con ID
        const regex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;

        // Extraemos coincidencias
        const matches = htmlContent.matchAll(regex);

        // Formateamos los datos en un arreglo
        const tableOfContents = Array.from(matches).map((match) => ({
            id: match[1],
            title: match[2],
        }));

        return tableOfContents;
    }
    const tableOfContents = await extractTableOfContentsFromMarkdown(content);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">

            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10" />

            <div className="relative">
                {/* Main Content */}
                <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
                    {/* Back Button */}

                    <PostHeader category={category.name} title={title} author={author.name} date={published_at} readTime={readTime} />

                    <div className="grid gap-8 lg:grid-cols-[250px_1fr_250px]">
                        {/* Table of Contents - Desktop */}
                        <div className="hidden lg:block">
                            <div className="sticky top-8">
                                <h2 className="mb-4 font-semibold text-gray-900 dark:text-white">Table of contents</h2>
                                <nav className="space-y-2">
                                    {tableOfContents.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Article Content */}
                        <article className="prose prose-lg max-w-none dark:prose-invert">
                            <div className="mb-8 text-center">
                                <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    {category.name}
                                </div>
                                <div>
                                    <div className="relative  h-[50vh] w-auto">
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
                                        {status === 'published' && (
                                            <div className="absolute right-2 top-2 rounded-full bg-green-400 px-2 py-1 text-xs font-medium text-green-900">
                                                Published
                                            </div>
                                        )}
                                    </div>
                                    <div dangerouslySetInnerHTML={htmlSummary} className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-300" />
                                </div>
                            </div>

                            <div className="md prose-blue prose-lg" dangerouslySetInnerHTML={htmlContent}>

                                {/* Add more content sections as needed */}
                            </div>
                        </article>

                        {/* Share and CTA - Desktop */}
                        <div className="hidden lg:block">
                            <div className="sticky top-8 space-y-8">
                                {/* Share Buttons */}
                                <div>
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Share</h3>
                                    <div className="flex flex-col space-y-2">
                                        <button className="flex items-center space-x-2 rounded-full bg-[#1DA1F2] p-2 text-white hover:bg-[#1a8cd8]">
                                            <Twitter className="h-5 w-5" />
                                            <span>Twitter</span>
                                        </button>
                                        <button className="flex items-center space-x-2 rounded-full bg-[#4267B2] p-2 text-white hover:bg-[#365899]">
                                            <Facebook className="h-5 w-5" />
                                            <span>Facebook</span>
                                        </button>
                                        <button className="flex items-center space-x-2 rounded-full bg-[#0077B5] p-2 text-white hover:bg-[#006097]">
                                            <Linkedin className="h-5 w-5" />
                                            <span>LinkedIn</span>
                                        </button>
                                    </div>
                                </div>

                                {/* CTA Box */}
                                <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-900/50">
                                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                                        Try DigitalOcean for free
                                    </h3>
                                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                                        Click below to sign up and get $200 of credit to try our products over 60 days.
                                    </p>
                                    <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                                        Sign up now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

