interface AsideProps {
  children: React.ReactNode
  isShowing: boolean
}

export function Aside({ children, isShowing }: AsideProps) {
  return (
    <aside
      className={`top-0 right-0 max-w-1/2 w-60 bg-background text-black dark:bg-slate-900 shadow-xl dark:text-white fixed h-full z-40 ease-in-out duration-300 ${
        isShowing ? 'translate-x-0 ' : 'translate-x-full'
      }`}
    >
      {children}
    </aside>
  )
}
