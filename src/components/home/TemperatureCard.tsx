import { RealTimeWeather } from '@/types/types-rapidapi'

import { Card } from '@/components/common/Card'
import { IconTemperature } from '@tabler/icons-react'

export function TemperatureCard({ data }: { data: RealTimeWeather }) {
  return (
    <Card title='Temperature'>
      <IconTemperature className='size-6 self-center' />
      <p className='font-normal text-2xl'>
        {data?.current.temp_c}
        <span className='text-lg'>
          °<sup>c</sup>
        </span>
      </p>
    </Card>
  )
}
