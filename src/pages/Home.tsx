import useSWR from 'swr'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'

export function Home() {
  const { data } = useSWR(URL_FORECAST, fetcher)
  console.log(data)
  return <h1 className=''>Home</h1>
}
