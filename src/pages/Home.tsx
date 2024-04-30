import useSWR from 'swr'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'

import { Astro } from '@/components/cards/Astro'
import { Button } from '@/components/common/Button'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { IconHeart, IconLocation } from '@tabler/icons-react'

export function Home() {
  const { data } = useSWR(URL_FORECAST, fetcher)

  if (!data) return

  return (
    <main className='w-[90%] mx-auto'>
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
      <section>
        <section className='flex justify-center flex-col items-center mt-5 bg-red-700'>
          <article className='px-14 py-10 flex flex-col justify-center items-center bg-slate-900 rounded-2xl '>
            <h3 className='font-normal mr-auto text-sm'>Now</h3>
            <div className='flex gap-x-2'>
              <p className='font-normal text-3xl'>
                {data?.current.temp_c} °<span>c</span>
              </p>
              <img
                className='size-10 self-center'
                src={data?.current.condition.icon}
                alt={`Today ${data?.location.name} condition icon`}
              />
            </div>
            <p className='text-sm mr-auto'>{data?.current.condition.text}</p>
          </article>
        </section>
        <section className='flex justify-center flex-col items-center mt-5'>
          <section className='w-full flex flex-col justify-center items-center bg-slate-900 rounded-2xl p-4'>
            <h4 className='mx-auto mb-4'>Today Highlights</h4>
            <Astro data={data} />
          </section>
        </section>
      </section>
    </main>
  )
}
