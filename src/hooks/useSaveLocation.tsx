import { useState } from 'react'
import { generateId } from '@/libs/utils'
import { Location } from '@/types/types'
import { useLocation } from 'react-router-dom'
import { RealTimeWeather } from '@/types/types-rapidapi'

export function useSaveLocation({ data }: { data: RealTimeWeather }) {
  const location = useLocation()
  const [isSaved, setIsSaved] = useState(() => {
    const savedLocations = localStorage.getItem('savedLocations')
    if (!savedLocations) return false

    const savedLocationsArr: Location[] = JSON.parse(savedLocations)
    const url = location.pathname.split('/')[2]
    const isInLocalStorage = savedLocationsArr.some(item => item.url === url)
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

  return { isSaved, handleClickSaveLocation }
}
