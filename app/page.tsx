import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import MenuSection from '@/components/MenuSection'
import LocationsSection from '@/components/LocationsSection'

export const metadata = {
  title: 'Khafif - Order Now and Enjoy Our Snacks',
  description: 'Order now and enjoy our snacks. Now you can order using our mobile application.',
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <LocationsSection />
    </div>
  )
}

