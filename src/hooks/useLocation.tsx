import { useState } from 'react'

export function useLocation() {
  const [defaultLocation, useDefaultLocation] = useState()

  const handleClickUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          console.log(`Latitude ${lat}, Longitud ${lng}`)
          toast('😄 Geolocation detected', {
            position: 'bottom-center'
          })
        },
        error => {
          console.error('Error getting user location:', error)
          toast('☹️ Geolocation cannot be detected', {
            position: 'bottom-center'
          })
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }
}
