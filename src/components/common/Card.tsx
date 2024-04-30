interface CardProps {
  title: string
  children: React.ReactNode
}

export function Card({ children, title }: CardProps) {
  return (
    <article className='bg-slate-950 rounded-xl py-2 w-full px-4'>
      <h4 className='opacity-60 text-sm'>{title}</h4>
      <div className='flex gap-x-2 justify-between mt-4'>{children}</div>
    </article>
  )
}
