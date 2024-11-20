import { z } from "zod";

interface Env {
    NEXT_PUBLIC_API_URL: string;
}

const envSchema = z.object({
    NEXT_PUBLIC_API_URL: z.string()
})

const { data, error } = envSchema.safeParse(process.env);

if (error) {
    throw new Error(`Env validation error: ${error.message}`);
}


export const envs = data as Env;