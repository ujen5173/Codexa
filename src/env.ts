import { createEnv } from '@t3-oss/env-core'
import { config } from 'dotenv'
import { z } from 'zod'

config()

 
export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    SERVER_URL: z.string().url().optional(),
    OAUTH_GOOGLE_CLIENT_ID: z.string(),
    OAUTH_GOOGLE_CLIENT_SECRET: z.string(),
    GITHUB_TOKEN: z.string(),
  },

  clientPrefix: 'VITE_',

  client: {
    VITE_APP_TITLE: z.string().min(1).optional(),
  },
 
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    SERVER_URL: process.env.SERVER_URL,
    OAUTH_GOOGLE_CLIENT_ID: process.env.OAUTH_GOOGLE_CLIENT_ID,
    OAUTH_GOOGLE_CLIENT_SECRET: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,

  },

  emptyStringAsUndefined: true,
})
