"use server"

import { fetcher } from "@/utils/fetcher"
import { BaseResponse, BlogPostCardProps, Post, PostError, PostResponse } from "../types"

export async function getPosts() {
    try {
        const { data, errors } = await fetcher<BaseResponse<PostResponse<BlogPostCardProps[]>>, Post, BlogPostCardProps, PostError>({
            method: 'GET',
            url: '/posts',
        })

        if (errors) {
            return {
                data: null,
                errors: errors as PostError
            }
        }

        return {
            data: data as PostResponse<BlogPostCardProps[]>,
            errors: null
        }
    } catch (error) {
        return {
            data: null,
            errors: error as PostError
        }
    }



}