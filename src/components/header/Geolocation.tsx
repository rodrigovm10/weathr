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
          toast('😄 Geolocation detected', {
            position: 'bottom-center'
          })
          const newUrl = `/search/${lat},${lng}`
          window.history.pushState({ path: newUrl }, '', newUrl)
          window.location.reload()
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
