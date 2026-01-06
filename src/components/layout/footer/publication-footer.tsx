import Logo from '@/components/common/logo'
import { Separator } from '@/components/ui/separator'
import { platformName } from '@/lib/constants'
import { Link } from '@tanstack/react-router'
import { Github01Icon, Linkedin02Icon, NewTwitterIcon } from 'hugeicons-react'

const SOCIAL_LINKS = [
  { name: 'Twitter', icon: NewTwitterIcon, url: '#' },
  { name: 'GitHub', icon: Github01Icon, url: '#' },
  { name: 'LinkedIn', icon: Linkedin02Icon, url: '#' },
]

const NAV_LINKS = [
  { label: 'Home', url: '' },
  { label: 'Cloud Computing', url: 'cloud-computing' },
  { label: 'DevOps', url: 'devops' },
  { label: 'Web Dev', url: 'web-development' },
  { label: 'AI/ML', url: 'machine-learning' },
  { label: 'System Design', url: 'system-design' },
]

const PublicationFooter = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-white/5 border-t">
      <div className="mx-auto px-6 lg:px-8 pt-10 pb-6 max-w-[1300px]">
        <div className="gap-12 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mb-12">

          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-2 font-bold text-white text-xl">
              <Logo />
            </div>
            <p className="max-w-sm text-slate-400 text-sm leading-relaxed">
              A digital publication for developers, designers, and tech enthusiasts.
              Building the future of the web, one component at a time.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} className="bg-white/5 hover:bg-white/10 p-2 rounded-full text-slate-500 hover:text-white transition-colors">
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="mb-6 font-bold text-white">Topics</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 font-bold text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Viewport</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Newsletter</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact Support</Link></li>
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">RSS Feed</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex md:flex-row flex-col justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {platformName} LLC. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-2 pl-4 border-white/5 border-l">
              <span className="text-xs">Powered by</span>
              <Logo onlyIcon size="sm" />
              <span className="font-semibold text-slate-300">{platformName}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PublicationFooter