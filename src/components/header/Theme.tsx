import { IconButton } from '@/components/common/IconButton'
import { useTheme } from '@/hooks/useTheme'
import { IconMoon } from '@tabler/icons-react'
import { Tooltip } from '@/components/common/Tooltip'

export function Theme({ className }: { className: string }) {
  const { handleThemeChange } = useTheme()

  return (
    <Tooltip tooltip='Theme'>
      <IconButton
        className={className}
        icon={<IconMoon />}
        onClick={handleThemeChange}
      />
    </Tooltip>
  )
}
