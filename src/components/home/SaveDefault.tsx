import { RealTimeWeather } from '@/types/types-rapidapi'

import { Button } from '@/components/common/Button'
import { IconLocation } from '@tabler/icons-react'

export function SaveDefault({ data }: { data: RealTimeWeather }) {
  const handleClickSaveDefaultLocation = () => {
    localStorage.setItem('defaultLocation', data.location.name)
  }
  return (
    <Button
      className='w-auto px-4'
      text='Save as default'
      icon={<IconLocation className='size-4 my-auto' />}
      onClick={handleClickSaveDefaultLocation}
    />
  )
}
