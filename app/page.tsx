import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LotteryInfo } from "@/components/lottery-info"
import { PrizesSection } from "@/components/prizes-section"
import { LotteryTypes } from "@/components/lottery-types"
import { WinnerTestimonial } from "@/components/winner-testimonial"
import { Footer } from "@/components/footer"
import { EuroDreamsDetails } from "@/components/eurodreams-details"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LotteryInfo />
      <EuroDreamsDetails />
      <PrizesSection />
      <LotteryTypes />
      <WinnerTestimonial />
      <Footer />
    </div>
  )
}
