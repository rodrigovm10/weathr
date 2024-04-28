import { IconButton } from '@/components/common/IconButton'
import { IconSearch } from '@tabler/icons-react'

export function Search({ className }: { className: string }) {
  return (
    <IconButton
      className={className}
      icon={<IconSearch />}
      onClick={() => {}}
    />
  )
}
