import { IconX, IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import { cn } from '@/libs/utils'
import { Geolocation } from '@/components/header/Geolocation'
import { SaveLocation } from '@/components/header/SaveLocation'
import { Search } from '@/components/header/Search'
import { Theme } from '@/components/header/Theme'
import { useMediaQuery } from '@uidotdev/usehooks'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 748px)')

  const handleOpenMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <header
      className={cn(
        'my-4 mx-2',
        !isSmallDevice && 'flex justify-between',
        isSmallDevice && isOpen ? 'flex justify-center' : 'flex justify-between'
      )}
    >
      <h3 className={cn(!isSmallDevice && 'block', isSmallDevice && isOpen ? 'hidden' : 'block')}>
        weathr
      </h3>
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
