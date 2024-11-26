"use server";
import { axioStore } from '@/store/axios-config';
import { isAxiosError } from 'axios';

interface Props<T> {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    datos?: T;
}

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

export async function fetcher<T, M, R, E>({ method, url, datos }: Props<M>): Promise<T> {
    let response;
    try {
        let res;
        switch (method) {
            case 'POST': {
                res = await axioStore.post(url, datos, {
                    headers
                });
                break;
            };
            case 'PUT': {
                res = await axioStore.put(url, datos, {
                    headers
                });
                break;
            };
            case 'DELETE': {
                res = await axioStore.delete(url, {
                    headers
                });
                break;
            };
            default: {
                res = await axioStore.get(url, {
                    headers
                });
            }
        }
        //console.log(res);

        const r = res.data as R

        response = {
            data: r,
            status: res.status,
            errors: null
        }

    } catch (error) {
        if (isAxiosError(error)) {
            response = {
                data: null,
                status: error.response?.status,
                errors: {
                    errors: error.response?.data.errors || [],
                    status: error.response?.status || 0,
                    message: error.response?.data.message || ''
                } as E
            }
        } else {
            response = {
                data: null,
                status: 500,
                errors: {
                    errors: [],
                    status: 0,
                    message: ''
                } as E
            };
        }
    }

    return response as T;
}