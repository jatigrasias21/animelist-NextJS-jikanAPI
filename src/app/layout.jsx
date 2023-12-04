import { Silkscreen } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'

const silkscreen = Silkscreen({ weight: ["400", "700"], subsets:["latin"] })

export const metadata = {
  title: 'AnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${silkscreen.className} bg-color-dark`} suppressHydrationWarning={true}>
        <NavigationBar/>
      {children}</body>
    </html>
  )
}
