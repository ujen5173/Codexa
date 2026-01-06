import WritingSidebar from '@/components/layout/new/writing-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/new/_base')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <WritingSidebar
        isOpen={true}
        onClose={() => { }}
        onNewArticle={() => { }}
        onSelectArticle={(id: string) => { }}

      />
      <main className='flex-1'>
        <Outlet />
      </main>
    </SidebarProvider>

  )
}
