import useSWR from 'swr'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'

import { Main } from '@/components/home/Main'

export function Home() {
  localStorage.setItem('defaultLocation', 'San Luis de la Paz')
  const defaultLocation = localStorage.getItem('defaultLocation')

  const { data } = useSWR(`${URL_FORECAST}+${defaultLocation}`, fetcher)

  if (!data) return

  return <Main data={data} />
}
