import { auth } from '@/lib/auth'
import { initTRPC } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.context<{ headers: Headers }>().create({
  transformer: superjson,
})

export const createTRPCRouter = t.router
export const publicProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({ headers: ctx.headers })
  return next({
    ctx: {
      ...ctx,
      session,
      userId: session?.user?.id,
    },
  })
})
