"use server";
import axios from "axios";

import { envs } from "@/config/get-env"

const { NEXT_PUBLIC_API_URL } = envs
export const axioStore = axios.create({
    baseURL: NEXT_PUBLIC_API_URL
});