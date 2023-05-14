import Footer from '@/components/Footer'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'

export default function Home() {
  return (
    <main className='h-screen'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  )
}
