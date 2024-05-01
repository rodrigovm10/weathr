import { Main } from '@/components/home/Main'
import { fetcher } from '@/services/fetcher'
import { URL_FORECAST } from '@/services/rapidapi-config'
import { useLocation } from 'react-router-dom'
import useSWR from 'swr'

export function Search() {
  const location = useLocation()
  const search = location.pathname.split('/')[2]
  console.log(search)
  const { data } = useSWR(`${URL_FORECAST}+${search}`, fetcher)

  if (!data) return

  return <Main data={data} />
}
