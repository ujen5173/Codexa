import ArticleCard from '@/components/common/article-card'
import { Button } from '@/components/ui/button'
import { data } from '@/lib/constants'
import { createFileRoute } from '@tanstack/react-router'
import { FireIcon } from 'hugeicons-react'
import { Clock4, Hash, Link as LinkIcon } from 'lucide-react'
import { Img } from 'react-image'

export const Route = createFileRoute('/_app/tag/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  // Mock data for followers and articles
  const followersCount = "6.7K"
  const articlesCount = "5.9K"

  return <main className="flex-8 space-y-8 rounded-sm">
    <div className="relative flex md:flex-row flex-col justify-between items-center gap-8 bg-slate-50 dark:bg-slate-900 p-6 border border-border-light dark:border-white/5 rounded-xl overflow-hidden">
      <div className="z-10 relative flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="font-bold text-slate-900 dark:text-white text-3xl capitalize tracking-tight">
            {slug.replace(/-/g, ' ')}
          </h1>
          <div className="flex flex-wrap gap-2 text-slate-500 dark:text-slate-400 text-sm md:text-base">
            <span className="font-medium text-slate-700 dark:text-slate-300">#{slug}</span>
            <span className="opacity-50">•</span>
            <span>{followersCount} followers</span>
            <span className="opacity-50">•</span>
            <span>{articlesCount} articles</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full text-white">
            Follow tag
          </Button>
          <Button size="sm" variant="secondary" className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 border-none rounded-full text-slate-900 dark:text-white">
            Write an article
          </Button>
          <Button size="icon-sm" variant="outline" className="bg-transparent border-slate-200 dark:border-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white dark:text-slate-400">
            <LinkIcon />
          </Button>
        </div>
      </div>

      <div className="top-5 right-5 absolute flex justify-center items-center">
        <div className="-top-[10.2rem] -right-[10.2rem] absolute w-max">
          <Img
            src="/tag-background.svg"
            width={200}
            height={200}
            className="opacity-50 size-96"
            alt=""
          />
        </div>

        <div className="z-10 relative flex flex-shrink-0 justify-center items-center bg-white dark:bg-slate-100 shadow-2xl rounded-full w-14 h-14">
          <Hash className="w-7 h-7 text-black" strokeWidth={2.5} />
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <div className="flex gap-1">
        <Button
          className="bg-blue-300/20 hover:bg-blue-300/20 hover:border-transparent font-medium text-primary hover:text-primary"
          variant="ghost"
          icon={FireIcon}
        >
          Hot
        </Button>
        <Button
          className="hover:bg-slate-100 hover:border-slate-200 hover:dark:border-primary/10 font-medium text-slate-700 hover:dark:text-slate-300 hover:text-slate-700 dark:text-slate-200"
          variant="ghost"
          icon={Clock4}
        >
          New
        </Button>
      </div>
      <div className="space-y-4">
        {data["posts"].map((article) => (
          <ArticleCard article={article} />
        ))}
      </div>
    </div>
  </main>
}
