import { About } from './component/About'
import { Contact } from './component/Contact'
import { Header } from './component/Header'
import { Hero } from './component/Hero'
import { Portfolio } from './component/Portfolio'

export default function Home() {
  return (
    <main className="w-screen px-8 md:px-24">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}
