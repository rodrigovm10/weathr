import { IconX, IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import { cn } from '@/libs/utils'
import { Geolocation } from '@/components/header/Geolocation'
import { SaveLocation } from '@/components/header/SaveLocation'
import { Search } from '@/components/header/Search'
import { Theme } from '@/components/header/Theme'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenu = () => {
    setIsOpen(prev => !prev)
  }

  const showNav = isOpen ? 'block' : 'hidden'
  return (
    <header className={cn('my-4 mx-2', isOpen ? 'flex justify-center ' : 'flex justify-between')}>
      <h3 className={cn(isOpen ? 'hidden' : 'block')}>weathr</h3>
      <nav className='flex gap-x-2'>
        <Geolocation className={showNav} />
        <SaveLocation className={showNav} />
        <Search className={showNav} />
        <Theme className={showNav} />

        <button
          className=''
          onClick={handleOpenMenu}
        >
          <IconX className={showNav} />
        </button>
        <button
          onClick={handleOpenMenu}
          className={cn(isOpen && 'hidden')}
        >
          <IconMenu2 />
        </button>
      </nav>
    </header>
  )
}
