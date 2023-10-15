import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import Footer from '@/components/footer'
import Link from 'next/link'
import { AuthProvider } from "@/context/AuthContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Susana gutierrez Photography',
  description: 'Mi nombre es Susana Gutiérrez y soy una fotógrafa autodidacta',
}

export default function RootLayout({children}) {
  return (
    <html lang="es">
      <body className='flex flex-col min-h-screen'>
        <AuthProvider>
            <Header />
            <Link href={"/login"}>
              Login
            </Link>
            {children}
            <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
