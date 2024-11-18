import { envs } from "@/config/get-envs";

interface IProps<T> {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: T,
}
export const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}
export async function fetcher<T, E, C>(props: IProps<T>): Promise<T> {
    let data;
    try {
        const { NEXT_PUBLIC_API_BASE_URL } = envs;
        const { method, url, body } = props;
        const URL = `${NEXT_PUBLIC_API_BASE_URL}${url}`;
        let res;
        if (method === 'POST' || method === 'PUT') {
            res = await fetch(URL, {
                body: JSON.stringify(body),
                method: method,
                headers: headers
            })
        } else {
            res = await fetch(URL, {
                headers: headers,
            })
        }
        const dataRes = await res.json() as C;

        if (res.ok) {
            data = {
                status: res.status,
                data: dataRes,
                error: {} as E
            } as T;
        }


    } catch (error) {
        data = {
            status: 500,
            data: [],
            error: error as E
        } as T;
    }
    return data as T;
}