import useSWR from 'swr'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'

import { Main } from '@/components/home/Main'

export function Home() {
  const { data } = useSWR(URL_FORECAST, fetcher)

  if (!data) return

  return <Main data={data} />
}
