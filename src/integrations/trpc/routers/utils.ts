import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "../init";

export const utilsRouter = createTRPCRouter({
  changelog: publicProcedure.query(async () => {
    const res = await fetch(
        `https://api.github.com/repos/ujen5173/-theReadora-/commits?per_page=1`,
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: `Bearer ${env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
        }
      );
      const r = await res.json();

 
      return r;
  })
});

