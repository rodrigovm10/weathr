import { useState } from 'react'

import { IconHeart, IconDeviceFloppy, IconX } from '@tabler/icons-react'
import { Aside } from '@/components/common/Aside'
import { Button } from '@/components/common/Button'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'

export function SaveLocation({ className }: { className: string }) {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickBarOpen = () => {
    setShowSidebar(prevState => !prevState)
  }

  return (
    <>
      <Tooltip tooltip='Save'>
        <IconButton
          className={className}
          icon={<IconHeart />}
          onClick={handleClickBarOpen}
        />
      </Tooltip>
      <Aside isShowing={showSidebar}>
        <section className='h-full mx-5 flex flex-col justify-between'>
          <h3 className='font-normal text-lg mt-5'>Locations Saved</h3>
          <section className='text-center mt-10'>
            <IconDeviceFloppy className='mx-auto size-8 mb-2' />
            <p className='text-sm'>All the locations you save will appear here</p>
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
