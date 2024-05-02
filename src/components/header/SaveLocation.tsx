import { useState } from 'react'

import {
  IconHeart,
  IconDeviceFloppy,
  IconX,
  IconLayoutSidebarRightInactive
} from '@tabler/icons-react'
import { Aside } from '@/components/common/Aside'
import { Button } from '@/components/common/Button'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { CardAside } from '../common/CardAside'
import { Location } from '@/types/types'
import { cn } from '@/libs/utils'

export function SaveLocation({ className }: { className: string }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const savedLocations = localStorage.getItem('savedLocations')
  const savedLocationsArr: Location[] = savedLocations ? JSON.parse(savedLocations) : []

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
          <section className={cn('text-center mt-10', savedLocationsArr.length !== 0 && 'mt-2')}>
            {savedLocationsArr.length === 0 ? (
              <>
                <IconDeviceFloppy className='mx-auto size-8 mb-2' />
                <p className='text-sm text-pretty'>All the locations you save will appear here</p>
              </>
            ) : (
              <>
                <span className='block my-3 text-sm'>{`${savedLocationsArr?.length} saved`}</span>

                <ul className='space-y-3 mb-4'>
                  {savedLocationsArr?.map(location => (
                    <CardAside data={location}>
                      <a href={`/search/${location.url}`}>
                        <div className='flex items-center gap-x-2 ml-2 mt-2'>
                          <h4 className='text-sm font-semibold'>{location.name}</h4>
                          <span className='text-xs opacity-70 self-end'>{location.country}</span>
                        </div>
                      </a>
                    </CardAside>
                  ))}
                </ul>
              </>
            )}
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
