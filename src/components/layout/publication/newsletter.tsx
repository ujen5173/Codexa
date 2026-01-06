import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Layers } from 'lucide-react'

const PublicationNewsletter = () => {
  return (
    <div className="flex flex-col justify-center bg-slate-100 dark:bg-slate-900 p-6 border border-border dark:border-slate-900 dark:hover:border-slate-600/60 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white/5 p-3 rounded-md text-slate-300">
          <Layers className="size-5" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base">Subscribe to the newsletter</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">Get new posts in your inbox.</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="name@codexa.com"
          className='rounded-md'
          size="sm"
          />
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 px-4 rounded-md h-9 font-medium text-white">
          Subscribe
        </Button>
      </div>
    </div>)
}

export default PublicationNewsletter