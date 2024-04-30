import { RealTimeWeather } from '@/types/types-rapidapi'

import { Card } from '@/components/common/Card'
import { IconWind } from '@tabler/icons-react'

export function WindCard({ data }: { data: RealTimeWeather }) {
  return (
    <Card title='Wind'>
      <IconWind className='size-6 self-center' />
      <p className='font-normal text-2xl'>
        {data?.current.wind_kph}
        <span className='text-lg'>kph</span>
      </p>
    </Card>
  )
}
