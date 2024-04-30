import { cn } from '@/libs/utils'

interface TooltipProps {
  children: React.ReactNode
  tooltip?: string
  className?: string
}

export function Tooltip({ children, tooltip, className }: TooltipProps) {
  return (
    <div className='group relative inline-block'>
      {children}
      <span
        className={cn(
          'invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all bg-popover dark:bg-popover-foreground dark:text-white text-black p-1 rounded absolute top-full md:top-[65%] text-[12px] text-center  font-semibold border border-border dark:border-border/20 z-20',
          className
        )}
      >
        {tooltip}
      </span>
    </div>
  )
}
