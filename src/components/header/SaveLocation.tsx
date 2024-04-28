import { IconButton } from '@/components/common/IconButton'
import { IconHeart } from '@tabler/icons-react'

export function SaveLocation({ className }: { className: string }) {
  return (
    <IconButton
      className={className}
      icon={<IconHeart />}
      onClick={() => {}}
    />
  )
}
