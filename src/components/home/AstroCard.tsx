import moonriseIcon from '../../../public/assets/moonrise.svg'
import moonsetIcon from '../../../public/assets/moonset.svg'
import sunriseIcon from '../../../public/assets/sunrise.svg'
import sunsetIcon from '../../../public/assets/sunset.svg'

import { RealTimeWeather } from '@/types/types-rapidapi'

export function AstroCard({ data }: { data: RealTimeWeather }) {
  const astroData = [
    {
      text: 'Moonrise',
      icon: moonriseIcon,
      hour: data?.forecast.forecastday[0].astro.moonrise
    },
    {
      text: 'Moonset',
      icon: moonsetIcon,
      hour: data?.forecast.forecastday[0].astro.moonset
    },
    {
      text: 'Sunrise',
      icon: sunriseIcon,
      hour: data?.forecast.forecastday[0].astro.sunrise
    },
    {
      text: 'Sunset',
      icon: sunsetIcon,
      hour: data?.forecast.forecastday[0].astro.sunset
    }
  ]

  return (
    <article className='bg-slate-950 rounded-xl p-2 w-full'>
      <h4 className='opacity-60 ml-4 mt-2'>Astro</h4>
      <section
        className='flex justify-center gap-x-4 items-center
              '
      >
        {astroData.map((astro, i) => (
          <div
            key={i}
            className=' flex flex-col lg:flex-row lg:gap-x-2'
          >
            <img
              src={astro.icon}
              alt=''
              className='md:size-20'
            />
            <div className='md:self-center'>
              <h5 className='opacity-80 text-[12px] md:text-sm text-center'>{astro.text}</h5>

              <p className='text-sm md:text-lg text-center'>{astro.hour}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  )
}
