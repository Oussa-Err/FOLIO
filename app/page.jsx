import Image from 'next/image'
import { About } from './component/About'
import { Contact } from './component/Contact'
import { Header } from './component/Header'
import { Hero } from './component/Hero'
import { Portfolio } from './component/Portfolio'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
