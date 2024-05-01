import { RealTimeWeather } from '@/types/types-rapidapi'

import { Title } from '@/components/home/Title'
import { WindCard } from '@/components/home/WindCard'
import { AstroCard } from '@/components/home/AstroCard'
import { HumidityCard } from '@/components/home/HumidityCard'
import { FeelsLikeCard } from '@/components/home/FeelsLikeCard'
import { VisibilityCard } from '@/components/home/VisibilityCard'
import { TemperatureCard } from '@/components/home/TemperatureCard'

export function Main({ data }: { data: RealTimeWeather }) {
  return (
    <main className='w-[80%] mx-auto'>
      <Title data={data} />
      <section className='flex flex-col justify-center items-center bg-slate-900 w-full rounded-2xl p-4 mt-4 '>
        <h3 className='mx-auto mb-4'>Today Highlights</h3>
        <div className='grid grid-cols-2 lg:flex lg:justify-between gap-x-4 gap-y-4 mb-4 w-full'>
          <TemperatureCard data={data} />
          <HumidityCard data={data} />
          <WindCard data={data} />
          <VisibilityCard data={data} />
          <FeelsLikeCard data={data} />
        </div>
        <AstroCard data={data} />
      </section>
    </main>
  )
}
