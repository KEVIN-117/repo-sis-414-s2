import { z } from 'zod'

interface IEnvs {
    NEXT_PUBLIC_API_BASE_URL: string
}

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string(),   
})

const { error, data } = envSchema.safeParse(process.env);

if (error) {
    throw new Error(`Env validation error: ${error.message}`)
}

export const envs = data as IEnvs;