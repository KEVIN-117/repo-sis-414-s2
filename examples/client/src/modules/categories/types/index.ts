export interface Category {
    id: string;
    name: string;
    description: string;
    color?: string;
}

export interface CategoriesResponse {
    categories: Category[];
    status: number;
}

export interface BaseResponse {
    data: CategoriesResponse
    status: number;
    errors: CategoryErrors;
}

export interface CategoryErrors {
    errors: string[];
    status: number;
    message: string;
}