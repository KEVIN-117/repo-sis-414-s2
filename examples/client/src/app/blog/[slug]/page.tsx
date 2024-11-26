import { getPost } from '@/modules/post/actions/get-post'
import { PostDetails } from '@/modules/post/components/PostDetails'
import { BlogPostCardProps } from '@/modules/post/types';
import React from 'react'



async function BlogPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const { data, errors } = await getPost({ slug });

    if (errors) {
        return <div>Error</div>
    }
    const { data: post } = data as { data: BlogPostCardProps }
    return (
        <PostDetails post={post} />
    )
}

export default BlogPage