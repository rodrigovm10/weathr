import { Location } from '@/types/types'
import { SearchTimeWeather } from '@/types/types-rapidapi'

interface CardAsideProps {
  data: SearchTimeWeather | Location
  children: React.ReactNode
}

export function CardAside({ data, children }: CardAsideProps) {
  return (
    <li className='rounded-md border border-gray-300/50 dark:border-muted/30 pb-2 hover:scale-105 transition-all'>
      <a href={`/search/${data.url}`}>{children}</a>
    </li>
  )
}
