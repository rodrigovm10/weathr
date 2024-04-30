import { RealTimeWeather } from '@/types/types-rapidapi'

import { Button } from '@/components/common/Button'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { IconHeart, IconLocation } from '@tabler/icons-react'

export function Title({ data }: { data: RealTimeWeather }) {
  return (
    <section className='text-center'>
      <h1 className='font-bold text-4xl'>{data?.location.name}</h1>
      <span className='text-lg'>{data?.location.country}</span>
      <div className='flex justify-center gap-x-4 mt-4'>
        <Tooltip
          tooltip='Save location'
          className='w-32  left-0 '
        >
          <IconButton
            onClick={() => {}}
            icon={<IconHeart className='my-auto' />}
          />
        </Tooltip>
        <Button
          className='w-auto px-4'
          text='Save as default'
          icon={<IconLocation className='size-4 my-auto' />}
          onClick={() => {}}
        />
      </div>
    </section>
  )
}
