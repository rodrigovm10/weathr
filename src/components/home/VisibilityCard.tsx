import { RealTimeWeather } from '@/types/types-rapidapi'

import { Card } from '@/components/common/Card'
import { IconEye } from '@tabler/icons-react'

export function VisibilityCard({ data }: { data: RealTimeWeather }) {
  return (
    <Card title='Visibility'>
      <IconEye className='size-6 self-center' />
      <p className='font-normal text-2xl'>
        {data?.current.vis_km}
        <span className='text-lg'>km</span>
      </p>
    </Card>
  )
}
