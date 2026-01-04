import { db } from "@/db";
import { auth } from "@/lib/auth";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<{ headers: Headers }>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({ headers: ctx.headers });
  return next({
    ctx: {
      ...ctx,
      session,
      db,
    },
  });
});

const enforceUserIsAuthed = t.middleware(async ({ ctx, next }) => {
  const session = await auth.api.getSession({ headers: ctx.headers });

  if (!session?.user.id) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      ...ctx,
      session,
      db,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
