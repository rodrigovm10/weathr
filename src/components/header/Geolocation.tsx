import { IconButton } from '@/components/common/IconButton'
import { IconLocation } from '@tabler/icons-react'

export function Geolocation({ className }: { className: string }) {
  return (
    <IconButton
      className={className}
      icon={<IconLocation />}
      onClick={() => {}}
    />
  )
}
