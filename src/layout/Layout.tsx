import { Footer } from '@/layout/Footer'
import { Header } from '@/layout/Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
