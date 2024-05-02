import { RealTimeWeather } from '@/types/types-rapidapi'

import { SaveDefault } from '@/components/home/SaveDefault'
import { SaveLocation } from '@/components/home/SaveLocation'

export function Title({ data }: { data: RealTimeWeather }) {
  return (
    <section className='text-center'>
      <h1 className='font-bold text-5xl'>{data?.location.name}</h1>
      <span className='text-lg'>{data?.location.country}</span>
      <div className='flex justify-center gap-x-4 mt-4'>
        <SaveLocation data={data} />
        <SaveDefault data={data} />
      </div>
    </section>
  )
}
