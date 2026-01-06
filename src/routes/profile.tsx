import { authClient } from '@/lib/auth-client';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  beforeLoad: async () => {
    const { data } = await authClient.getSession();
    throw redirect({
      to: `/u/@{$username}`,
      params: {
        username: data?.user.name ?? ""
      }
    })
  },
})

