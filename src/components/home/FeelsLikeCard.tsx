import { RealTimeWeather } from '@/types/types-rapidapi'

import { Card } from '@/components/common/Card'
import { IconMoodPin } from '@tabler/icons-react'

export function FeelsLikeCard({ data }: { data: RealTimeWeather }) {
  return (
    <Card title='Feels Like'>
      <IconMoodPin className='size-6 self-center' />
      <p className='font-normal text-2xl'>
        {data?.current.feelslike_c}
        <span className='text-lg'>
          °<sup>c</sup>
        </span>
      </p>
    </Card>
  )
}
