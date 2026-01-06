import WritingEditor from "@/components/layout/new/writing-editor";
import { createFileRoute } from '@tanstack/react-router';


export const Route = createFileRoute('/new/_base/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <div className="bg-white dark:bg-slate-900 w-full">
      <WritingEditor />
    </div>
  )
}
