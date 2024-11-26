import React from 'react'
import { getPosts } from '../actions/get-posts'
import BlogPostCard from './post-card'

export async function PostView() {
    const { data, errors } = await getPosts()
    if (errors) {
        return <div>Error</div>
    }
    const { data: posts } = data
    return (
        <div className="h-auto bg-gradient-to-br from-gray-50 to-white px-4 py-12 dark:from-gray-950 dark:to-gray-900">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Latest Posts
                </h1>
                <div className="grid gap-8 md:grid-cols-2">
                    {posts.map((post) => (
                        <BlogPostCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
