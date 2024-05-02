import { useState } from 'react'
import { Location } from '@/types/types'
import { cn, generateId } from '@/libs/utils'
import { RealTimeWeather } from '@/types/types-rapidapi'

import { IconHeart } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'
import { useLocation } from 'react-router-dom'

export function SaveLocation({ data }: { data: RealTimeWeather }) {
  const location = useLocation()
  const [isSaved, setIsSaved] = useState(() => {
    const savedLocations = localStorage.getItem('savedLocations')
    if (!savedLocations) return false

    const savedLocationsArr: Location[] = JSON.parse(savedLocations)
    const name = location.pathname.split('/')[2].split('-')[0]
    const isInLocalStorage = savedLocationsArr.some(item => item.name.toLowerCase() === name)
    return isInLocalStorage
  })

  const handleClickSaveLocation = () => {
    const location: Location = {
      id: generateId(),
      name: data.location.name,
      country: data.location.country,
      url: `${data.location.name.toLowerCase()}-${data.location.region.toLowerCase()}-${data.location.country.toLowerCase()}`
    }

    // Get savedLocations from localStorage or initialize an empty array
    const savedLocations = localStorage.getItem('savedLocations')
    const savedLocationsArr: Location[] = savedLocations ? JSON.parse(savedLocations) : []

    // Check if the current location is in localStorage
    const existsCurrentLocation = savedLocationsArr.some(item => item.name === location.name)

    if (!existsCurrentLocation) {
      // Add location to savedLocationsArr if it doesn't exist
      savedLocationsArr.push(location)
      setIsSaved(true)
    } else {
      // Remove location from savedLocationsArr if it exists
      const newLocations = savedLocationsArr.filter(item => item.name !== location.name)
      savedLocationsArr.splice(0, savedLocationsArr.length, ...newLocations)
      setIsSaved(false)
    }

    // Update localStorage and state with updated savedLocationsArr
    localStorage.setItem('savedLocations', JSON.stringify(savedLocationsArr))
  }

  return (
    <Tooltip
      tooltip='Save location'
      className='w-32  left-0 '
    >
      <IconButton
        onClick={handleClickSaveLocation}
        icon={<IconHeart className={cn('my-auto', isSaved ? 'text-red-500' : 'text-white')} />}
      />
    </Tooltip>
  )
}
