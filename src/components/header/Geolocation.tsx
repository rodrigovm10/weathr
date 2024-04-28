import { IconButton } from '@/components/common/IconButton'
import { IconLocation } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'

export function Geolocation({ className }: { className: string }) {
  return (
    <Tooltip tooltip='Geolocation'>
      <IconButton
        className={className}
        icon={<IconLocation />}
        onClick={() => {}}
      />
    </Tooltip>
  )
}
