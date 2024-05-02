import useSWR from 'swr'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'

import { Main } from '@/components/home/Main'

export function Home() {
  let defaultLocation = 'San Luis de la Paz'

  const localLocation = localStorage.getItem('defaultLocation')

  if (localLocation) {
    defaultLocation = localLocation
  }

  const { data, isLoading } = useSWR(`${URL_FORECAST}+${defaultLocation}`, fetcher)

  if (!data) return

  return (
    <Main
      data={data}
      isLoading={isLoading}
    />
  )
}
