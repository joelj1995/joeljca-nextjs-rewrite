import type { Metadata } from 'next'
import './globals.css'
import '@/assets/css/theme.min.css';
import '@/assets/vendor/boxicons/css/boxicons.min.css';
import '@/assets/vendor/swiper/swiper-bundle.min.css';
import { Manrope } from 'next/font/google';
import { cookies } from 'next/headers';
import Footer from '@/ui/footer';

const manrope = Manrope({ subsets: ['latin'] } );

export const metadata: Metadata = {
  title: 'J. Alexander Johnston',
  description: 'Alex Johnston\'s Professional Services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';

  return (
    <html lang="en" data-bs-theme={theme}>
      <body className={manrope.className} >
        {children}
        <Footer />
      </body>
    </html>
  )
}
