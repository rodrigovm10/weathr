import { RealTimeWeather } from '@/types/types-rapidapi'

import { Card } from '@/components/common/Card'
import { IconDroplet } from '@tabler/icons-react'

export function HumidityCard({ data }: { data: RealTimeWeather }) {
  return (
    <Card title='Humidity'>
      <IconDroplet className='size-6 self-center' />
      <p className='font-normal text-2xl'>
        {data?.current.humidity}
        <span className='text-lg'>%</span>
      </p>
    </Card>
  )
}
