"use server";

import { fetcher } from "@/utils/fetcher";
import { BaseResponse, CategoriesResponse, Category, CategoryErrors } from "../types";

export async function getCategories() {
    try {

        const { data, errors } = await fetcher<BaseResponse, Category, CategoriesResponse, CategoryErrors>({
            url: '/categories',
            method: 'GET'
        })

        if (errors) {
            return {
                data: null,
                errors: errors as CategoryErrors
            };
        }
        return {
            data: data as CategoriesResponse,
            errors: null
        };

    } catch (error) {
        return {
            data: null,
            errors: error as CategoryErrors
        };
    }
}