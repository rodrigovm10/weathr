import { cn } from '@/libs/utils'

interface IconButtonProps {
  icon: React.ReactNode
  onClick: () => void
  className: string
}

export function IconButton({ icon, className, onClick }: IconButtonProps) {
  return (
    <button
      className={cn(
        'hover:bg-primary-400 hover:dark:bg-primary-700 hover: p-1 rounded-md mx-auto my-auto',
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
