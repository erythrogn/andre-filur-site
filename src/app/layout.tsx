import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LanguageProvider } from '@/lib/LanguageContext';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Andre Filúr — Artista Visual',
  description: 'Obra nascida do encontro entre matéria e espírito.',
  openGraph: {
    title: 'Andre Filúr — Artista Visual',
    description: 'Obra nascida do encontro entre matéria e espírito.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          <SmoothScrollProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
