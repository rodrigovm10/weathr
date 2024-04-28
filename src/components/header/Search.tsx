import { IconSearch } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'
import { IconButton } from '@/components/common/IconButton'

export function Search({ className }: { className: string }) {
  return (
    <Tooltip tooltip='Search'>
      <IconButton
        className={className}
        icon={<IconSearch />}
        onClick={() => {}}
      />
    </Tooltip>
  )
}
