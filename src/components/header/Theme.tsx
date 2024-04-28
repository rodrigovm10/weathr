import { IconButton } from '@/components/common/IconButton'
import { useTheme } from '@/hooks/useTheme'
import { IconMoon } from '@tabler/icons-react'

export function Theme({ className }: { className: string }) {
  const { handleThemeChange } = useTheme()

  return (
    <IconButton
      className={className}
      icon={<IconMoon />}
      onClick={handleThemeChange}
    />
  )
}
