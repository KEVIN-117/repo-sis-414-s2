import { Category } from "@/modules/categories/types";

export interface BaseResponse<T> {
    data: T;
    status: number;
    errors: PostError;
}

export interface PostResponse<T> {
    data: T;
}

export interface BlogPostCardProps {
    id: number
    user_id: number
    author: {
        id: number
        name: string
        email: string
        image?: string
    }
    title: string
    content: string
    summary: string
    published_at: string
    category: Category
    slug: string
    created_at: string
    updated_at: string
    status: string
    readTime: string
    image_url: string
}


export interface Post {
    user_id: string; // UUID del usuario
    title: string; // Título del artículo
    content: string; // Contenido completo del artículo
    summary: string; // Resumen del artículo
    published_at: string; // Fecha y hora de publicación en formato ISO
    category_id: string; // UUID de la categoría
}


export interface PostError {
    errors: string[];
    status: number;
    message: string;
}