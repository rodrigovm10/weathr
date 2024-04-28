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
        'hover:bg-card-foreground/10 hover:dark:bg-card/10 p-1 rounded-md mx-auto my-auto',
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
