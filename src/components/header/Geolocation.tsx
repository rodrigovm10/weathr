import { toast } from 'sonner'

import { IconLocation } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'

export function Geolocation({ className }: { className: string }) {
  const handleClick = () => {
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

  return (
    <Tooltip tooltip='Geolocation'>
      <IconButton
        className={className}
        icon={<IconLocation />}
        onClick={handleClick}
      />
    </Tooltip>
  )
}
