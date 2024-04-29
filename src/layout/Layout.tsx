import { Footer } from '@/layout/Footer'
import { Header } from '@/layout/Header'
import { Toaster } from 'sonner'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      {children}
      <Toaster
        toastOptions={{
          classNames: {
            toast: 'bg-primary border-px border-primary/80',
            title: 'text-white'
          }
        }}
      />
      <Footer />
    </>
  )
}
