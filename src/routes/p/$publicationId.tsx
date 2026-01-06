import PublicationFooter from '@/components/layout/footer/publication-footer'
import PublicationHeader from '@/components/layout/publication/header'
import PublicationNewsletter from '@/components/layout/publication/newsletter'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'
import { formatDate } from 'date-fns'
import {
  Github01Icon,
  Linkedin02Icon,
  NewTwitterIcon,
} from 'hugeicons-react'
import { Clock, Grid3X3, Layers, LayoutTemplate } from 'lucide-react'
import { useState } from 'react'
import { Img } from 'react-image'

export const Route = createFileRoute('/p/$publicationId')({
  component: RouteComponent,
})

const NAV_LINKS = [
  { label: 'Home', url: '' },
  { label: 'Cloud Computing', url: 'cloud-computing' },
  { label: 'DevOps', url: 'devops' },
  { label: 'Web Dev', url: 'web-development' },
  { label: 'AI/ML', url: 'machine-learning' },
  { label: 'System Design', url: 'system-design' },
]


const SOCIAL_LINKS = [
  { name: 'Twitter', icon: NewTwitterIcon, url: '#' },
  { name: 'GitHub', icon: Github01Icon, url: '#' },
  { name: 'LinkedIn', icon: Linkedin02Icon, url: '#' },
]

const ARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  id: `article-${i}`,
  title: [
    "useEffect in React.js [part-1]",
    "useState Hook in React [part-3]",
    "useState Hook in React [part-2]",
    "useState Hook in React [part-1]",
    "Controlled vs. Uncontrolled Components in React",
    "Conditional Rendering in React Apps",
    "How to Efficiently Render and Display Lists in React",
    "Props and State in React",
    "JSX basics",
    "Optimizing Performance in React Applications",
    "Understanding the Virtual DOM",
    "React Router v6: A Comprehensive Guide",
    "Next.js 14: Server Actions Explained",
    "Tailwind CSS: From Zero to Hero",
    "Building Accessible Forms in React"
  ][i],
  excerpt: "The useEffect hook in React lets you perform side effects in functional components, such as data fetching, subscriptions, or manually updating the DOM. It provides a way to synchronize your component with external systems.",
  readingTime: 3 + (i % 7),
  publishedAt: new Date(2026, 0, 6 - i),
  thumbnail: [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501854140884-074bf86ee91c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  ][i],
}))


type PostCardProps = {
  article: typeof ARTICLES[0]
  variant?: 'feature' | 'standard' | 'horizontal'
  className?: string
  showExcerpt?: boolean
}

const PostCard = ({ article, variant = 'standard', className = '', showExcerpt = false }: PostCardProps) => {
  const cardBase = "p-5 group relative flex flex-col bg-slate-100 dark:bg-slate-900 border border-border dark:border-slate-900 dark:hover:border-slate-600/60 hover:border-white/10 transition-all duration-300 rounded-lg overflow-hidden"

  if (variant === 'feature') {
    return (
      <Link to="/p/$publicationId" params={{ publicationId: '123' }} className={`${cardBase} h-full ${className}`}>
        <div className="relative rounded-sm w-full aspect-[11/6] overflow-hidden">
          <Img
            src={article.thumbnail!}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 space-y-2 pt-4">
          <h2 className="font-bold text-slate-100 text-2xl md:text-3xl leading-tight tracking-tight transition-colors">
            {article.title}
          </h2>
          <p className="font-medium text-slate-400 text-base line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-auto pt-4 font-medium text-slate-600 dark:text-slate-300 text-xs">
            <span>{formatDate(article.publishedAt, "MMM dd, yyyy")}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readingTime} min read</span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'horizontal') {
    return (
      <Link to="/p/$publicationId" params={{ publicationId: '123' }} className={`${cardBase} flex-row ${className}`}>
        <div className="">
          <div className="flex flex-col flex-1">
            <h3 className="mb-2 font-bold text-slate-100 text-lg line-clamp-2 leading-snug transition-colors">
              {article.title}
            </h3>
            {showExcerpt && (
              <p className="mb-3 text-slate-400 text-sm line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 font-semibold text-[10px] text-slate-500 uppercase tracking-wide">
            <span>{formatDate(article.publishedAt, "MMM dd, yyyy")}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime} min</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to="/p/$publicationId" params={{ publicationId: '123' }} className={`flex flex-col ${cardBase} h-full ${className}`}>
      <div className="relative rounded-sm w-full aspect-[11/6] overflow-hidden">
        <Img
          src={article.thumbnail!}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 pt-3">
        <div className="flex-1">
          <h3 className="font-bold text-slate-100 text-base line-clamp-2 leading-snug transition-colors">
            {article.title}
          </h3>
          {showExcerpt && (
            <p className="flex-1 mt-2 mb-4 text-slate-400 text-sm line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 mt-auto pt-4 font-medium text-slate-600 dark:text-slate-300 text-xs">
          <span>{formatDate(article.publishedAt, "MMM dd, yyyy")}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime} min read</span>
        </div>
      </div>
    </Link>
  )
}

const MidSection = ({ viewMode }: { viewMode: "magazine" | "grid" | "stack" }) => (
  <div className={cn(
    "gap-6 grid grid-cols-1 mx-auto my-6",
    viewMode !== "stack" ? "max-w-7xl md:grid-cols-2" : "max-w-3xl"
  )}>
    {
      viewMode !== "stack" && (
        <div className="group bg-slate-100 dark:bg-slate-900 p-6 border border-border dark:border-slate-900 dark:hover:border-slate-600/60 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Img
                src="https://lh3.googleusercontent.com/a/ACg8ocLw_ASOkduUo-m8j1vg7ArhVxm4lPUnVaulJ-7gJZ3Jd0xjkA=s96-c"
                width={200}
                height={200}
                className='rounded-full size-10 object-cover'
              />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Ujen basi</h3>
              <p className="mt-0.5 font-medium text-slate-500 text-xs uppercase tracking-wide">10 posts published</p>
            </div>
          </div>

          <Separator className='my-4' />


          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="text-slate-500 hover:text-white transition-colors">
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      )
    }
    <PublicationNewsletter />
  </div>
)


const ContentLayout = ({
  articles,
  viewMode
}: {
  articles: typeof ARTICLES,
  viewMode: 'magazine' | 'stack' | 'grid'
}) => {
  const centerFeature = articles[0]
  const leftStack = articles.slice(1, 3)
  const rightStack = articles.slice(3, 5)
  const remainingArticles = articles.slice(5)

  return (
    <div className="slide-in-from-bottom-2 space-y-6 animate-in duration-500 fade-in">
      {viewMode === 'magazine' && (
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-12">
          <div className="hidden lg:flex flex-col gap-4 lg:col-span-3">
            {leftStack.map((article) => (
              <PostCard key={article.id} article={article} variant="standard" className="flex-1" />
            ))}
          </div>

          <div className="col-span-1 lg:col-span-6">
            <PostCard article={centerFeature} variant="feature" />
          </div>

          <div className="hidden lg:flex flex-col gap-4 lg:col-span-3">
            {rightStack.map((article) => (
              <PostCard key={article.id} article={article} variant="standard" className="flex-1" />
            ))}
          </div>

          <div className="lg:hidden gap-6 grid grid-cols-1 sm:grid-cols-2 col-span-1">
            {[...leftStack, ...rightStack].map((article) => (
              <PostCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        </div>
      )}

      {viewMode === 'stack' && (
        <div className="space-y-4 mx-auto max-w-3xl">
          {[centerFeature, ...leftStack, ...rightStack].map((article) => (
            <PostCard key={article.id} article={article} variant="horizontal" showExcerpt />
          ))}
        </div>
      )}

      {viewMode === 'grid' && (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[centerFeature, ...leftStack, ...rightStack].map((article) => (
            <PostCard key={article.id} article={article} variant="standard" showExcerpt />
          ))}
        </div>
      )}

      <MidSection viewMode={viewMode} />


      {viewMode === 'stack' ? (
        <div className="space-y-4 mx-auto max-w-3xl">
          {remainingArticles.map((article) => (
            <PostCard key={article.id} article={article} variant="horizontal" showExcerpt />
          ))}
        </div>
      )
        : (<div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article) => (
            <PostCard key={article.id} article={article} variant="standard" showExcerpt />
          ))}
        </div>
        )}
    </div>
  )
}

function RouteComponent() {
  const [layout, setLayout] = useState<'magazine' | 'stack' | 'grid'>('magazine')
  const [activeNav, setActiveNav] = useState('Home')

  return (
    <div className='bg-white dark:bg-slate-950 text-slate-200'>
      <PublicationHeader />

      <main className="mx-auto px-4 pb-10 max-w-[1300px]">
        <div className="flex flex-col items-center gap-6 py-4">
          <nav className="flex flex-wrap justify-center gap-2">
            {NAV_LINKS.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="sm"
                onClick={() => setActiveNav(link.label)}
                className={`text-sm font-semibold tracking-wide transition-colors rounded-md h-9 px-4 ${activeNav === link.label
                  ? "bg-white/10 text-white"
                  : "text-slate-500 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 border border-border dark:border-slate-900 dark:hover:border-slate-600/60 rounded-lg">
            <Button
              icon={LayoutTemplate}
              iconStyle={"size-4"}
              variant="ghost"
              size="icon-sm"
              onClick={() => setLayout('magazine')}
              className={layout === 'magazine' ? "bg-white/10 text-white rounded-md" : "text-slate-500 hover:text-white rounded-md"}
            />
            <Button
              icon={Grid3X3}
              iconStyle={"size-4"}
              variant="ghost"
              size="icon-sm"
              onClick={() => setLayout('grid')}
              className={layout === 'grid' ? "bg-white/10 text-white rounded-md" : "text-slate-500 hover:text-white rounded-md"}
            />
            <Button
              icon={Layers}
              iconStyle={"size-4"}
              variant="ghost"
              size="icon-sm"
              onClick={() => setLayout('stack')}
              className={layout === 'stack' ? "bg-white/10 text-white rounded-md" : "text-slate-500 hover:text-white rounded-md"}
            />
          </div>
        </div>

        <ContentLayout articles={ARTICLES} viewMode={layout} />
      </main>

      <PublicationFooter />
    </div>
  )
} 