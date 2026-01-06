
import { createTRPCRouter } from './init'

import * as trpcRouters from "./routers"

export const trpcRouter = createTRPCRouter(
  trpcRouters
)

export type TRPCRouter = typeof trpcRouter
