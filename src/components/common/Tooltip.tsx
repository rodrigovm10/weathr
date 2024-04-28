interface TooltipProps {
  children: React.ReactNode
  tooltip?: string
}

export function Tooltip({ children, tooltip }: TooltipProps) {
  return (
    <div className='group relative inline-block'>
      {children}
      <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all bg-primary-900 text-white p-1 rounded absolute top-full mt-2 text-[12px] text-center border border-primary-400'>
        {tooltip}
      </span>
    </div>
  )
}
