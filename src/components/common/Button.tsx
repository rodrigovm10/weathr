import { cn } from '@/libs/utils'

interface ButtonProps {
  text: string
  className?: string
  icon?: React.ReactNode

  onClick: () => void
}

export function Button({ text, className, onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'mt-100% flex justify-center gap-x-1 bg-primary/90 rounded text-white w-full hover:bg-primary/80 transition-all p-1 focus:border-2 focus:border-primary/60]',
        className
      )}
    >
      {icon}
      {text}
    </button>
  )
}
