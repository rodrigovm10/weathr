interface AsideProps {
  children: React.ReactNode
  isShowing: boolean
}

export function Aside({ children, isShowing }: AsideProps) {
  return (
    <aside
      className={`top-0 right-0 w-1/2 max-[320px]:w-full md:w-1/2 lg:w-1/4 bg-background dark:bg-slate-950 shadow-xl text-white fixed h-full z-40 ease-in-out duration-300 ${
        isShowing ? 'translate-x-0 ' : 'translate-x-full'
      }`}
    >
      {children}
    </aside>
  )
}
