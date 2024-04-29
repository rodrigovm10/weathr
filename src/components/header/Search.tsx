import { IconSearch, IconX } from '@tabler/icons-react'
import { Aside } from '@/components/common/Aside'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { useState } from 'react'
import { Button } from '../common/Button'

export function Search({ className }: { className: string }) {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickBarOpen = () => {
    setShowSidebar(prevState => !prevState)
  }
  return (
    <>
      <Tooltip tooltip='Search'>
        <IconButton
          className={className}
          icon={<IconSearch />}
          onClick={handleClickBarOpen}
        />
      </Tooltip>
      <Aside isShowing={showSidebar}>
        <section className='h-full mx-5 flex flex-col justify-between'>
          <h3 className='font-normal text-lg mt-5'>Search</h3>
          <section className='text-center mt-10'>
            <input
              type='text'
              className='w-full bg-slate-900 text-white p-1 rounded border-2 border-muted-foreground/20 focus:ring-2 focus:ring-primary focus:border-primary text-sm outline-none'
              placeholder='Barcelona, Ohayo, Tokyo ...'
            />
          </section>
          <Button
            icon={<IconX className='size-4 self-center' />}
            className='mt-auto mb-6'
            text='Close'
            onClick={handleClickBarOpen}
          />
        </section>
      </Aside>
    </>
  )
}
