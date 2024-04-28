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
            toast: 'bg-primary-900 border-px border-primary-400',
            title: 'text-white'
          }
        }}
      />
      <Footer />
    </>
  )
}
