// TODO: use `https://api.dicebear.com/9.x/<styleName>/svg` for generating interesting user profile pics.

import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { config } from "dotenv";
import { env } from "process";
import { platformName } from "./constants";

config();

export const auth = betterAuth({
  appName: platformName,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    google: {
      clientId: env.OAUTH_GOOGLE_CLIENT_ID!,
      clientSecret: env.OAUTH_GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [tanstackStartCookies()],
});
