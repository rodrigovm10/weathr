import { RealTimeWeather } from '@/types/types-rapidapi'

import { IconHeart } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { SaveDefault } from '@/components/home/SaveDefault'

export function Title({ data }: { data: RealTimeWeather }) {
  return (
    <section className='text-center'>
      <h1 className='font-bold text-5xl'>{data?.location.name}</h1>
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
        <SaveDefault data={data} />
      </div>
    </section>
  )
}
