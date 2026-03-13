import HeroSection from '@/components/home/HeroSection'
import FeaturedTreks from '@/components/home/FeaturedTreks'
import StatsCounter from '@/components/home/StatsCounter'
import RegionsSection from '@/components/home/RegionsSection'
import WhySTR from '@/components/home/WhySTR'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedTreks />
      <StatsCounter />
      <RegionsSection />
      <WhySTR />
      <TestimonialsSection />
    </>
  )
}
