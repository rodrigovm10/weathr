import { cn } from '@/libs/utils'

interface IconButtonProps {
  icon: React.ReactNode
  onClick: () => void
  className: string
}

export function IconButton({ icon, className, onClick }: IconButtonProps) {
  return (
    <button
      className={cn('hover:bg-gray-400/20 p-1 rounded-md', className)}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
