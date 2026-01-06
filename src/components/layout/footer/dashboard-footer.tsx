import Logo from '@/components/common/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { platformName } from '@/lib/constants'
import { Link } from '@tanstack/react-router'
import { DiscordIcon, InstagramIcon, Linkedin01Icon, TwitterIcon, YoutubeIcon } from 'hugeicons-react'

const DashboardFooter = () => {
  return (
    <footer className='border-border dark:border-slate-600/60 border-t w-full'>
      <div className="mx-auto px-4 py-6 max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo onlyIcon />
            <ul className="flex items-center">
              <Link to="/">
                <li className='px-2 py-1 hover:text-primary text-xs hover:underline transition'>
                  Home
                </li>
              </Link>
              <Link to="/">
                <li className='px-2 py-1 hover:text-primary text-xs hover:underline transition'>
                  Changelog
                </li>
              </Link>
              <Link to="/">
                <li className='px-2 py-1 hover:text-primary text-xs hover:underline transition'>
                  Terms and Condition
                </li>
              </Link>
              <Link to="/">
                <li className='px-2 py-1 hover:text-primary text-xs hover:underline transition'>
                  Privacy Policy
                </li>
              </Link>

            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center">
              <Button variant={"link"} icon={TwitterIcon} size="icon-sm" />
              <Button variant={"link"} icon={Linkedin01Icon} size="icon-sm" />
              <Button variant={"link"} icon={InstagramIcon} size="icon-sm" />
              <Button variant={"link"} icon={DiscordIcon} size="icon-sm" />
              <Button variant={"link"} icon={YoutubeIcon} size="icon-sm" />
            </div>
            <Separator className='h-[17px!important]' orientation='vertical' />
            <div className='font-medium text-green-400 text-xs'>All services are online</div>
          </div>

        </div>
        <div className='py-2 text-xs text-center'>
          © {platformName} {new Date().getFullYear()} — Ujen Basi.

        </div>
      </div>
    </footer>
  )
}

export default DashboardFooter