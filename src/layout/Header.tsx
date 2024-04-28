import { useState } from 'react'
import { useMediaQuery } from '@uidotdev/usehooks'

import { cn } from '@/libs/utils'
import { IconX, IconMenu2 } from '@tabler/icons-react'

import { Theme } from '@/components/header/Theme'
import { Search } from '@/components/header/Search'
import { SaveLocation } from '@/components/header/SaveLocation'
import { Geolocation } from '@/components/header/Geolocation'

const date = new Date()
const today = `Today, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 748px)')

  const handleOpenMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <header
      className={cn(
        'w-full overflow-hidden p-6',
        !isSmallDevice && 'flex justify-between',
        isSmallDevice && isOpen
          ? 'flex justify-center border-b border-black/50 dark:border-white/50 mb-2'
          : 'flex justify-between'
      )}
    >
      <div className={cn(!isSmallDevice && 'block', isSmallDevice && isOpen ? 'hidden' : 'block')}>
        <h3 className='text-xl font-bold'>weathr</h3>
        <span className='text-sm opacity-60'>{today}</span>
      </div>
      <nav className='flex gap-x-2 '>
        <Geolocation className={cn('hidden md:block', isOpen && 'block')} />
        <SaveLocation className={cn('hidden md:block', isOpen && 'block')} />
        <Search className={cn('hidden md:block', isOpen && 'block')} />
        <Theme className={cn('hidden md:block', isOpen && 'block')} />

        <button
          onClick={handleOpenMenu}
          className={cn('md:hidden', isSmallDevice && isOpen ? 'block' : 'hidden')}
        >
          <IconX />
        </button>
        <button
          onClick={handleOpenMenu}
          className={cn('md:hidden', isSmallDevice && !isOpen ? 'block' : 'hidden')}
        >
          <IconMenu2 />
        </button>
      </nav>
    </header>
  )
}
