import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    baseURL: process.env.SITE_URL
})

export const { signIn, signUp, useSession } = createAuthClient()