import { Location } from '@/types/types'
import { SearchTimeWeather } from '@/types/types-rapidapi'

interface CardAsideProps {
  data: SearchTimeWeather | Location
  children: React.ReactNode
}

export function CardAside({ data, children }: CardAsideProps) {
  return (
    <li className='rounded-md border border-muted/30 pb-2'>
      <a href={`/search/${data.url}`}>{children}</a>
    </li>
  )
}
