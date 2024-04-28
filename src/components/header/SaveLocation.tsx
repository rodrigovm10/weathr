import { IconHeart } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'

export function SaveLocation({ className }: { className: string }) {
  return (
    <Tooltip tooltip='Save'>
      <IconButton
        className={className}
        icon={<IconHeart />}
        onClick={() => {}}
      />
    </Tooltip>
  )
}
