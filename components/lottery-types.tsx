import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function LotteryTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/eurodreams-logo.png"
              alt="EuroDreams"
              width={200}
              height={60}
              className="h-12 w-auto animate-fadeInUp animate-pulse-slow"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">Spielarten</h2>
          <p className="text-xl text-gray-600">Wählen Sie Ihre bevorzugte Art zu spielen</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover-scale hover-glow animate-fadeInLeft animate-delay-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Einzelschein</h3>
              <p className="text-gray-600 mb-6">
                Wählen Sie Ihre Glückszahlen selbst oder lassen Sie sie zufällig generieren. 6 Zahlen aus 40 plus 1
                Traumzahl aus 5.
              </p>
              <div className="text-3xl font-bold text-purple-600 mb-4">CHF 2.50</div>
              <Link href="/login">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 hover-scale">Einzelschein spielen</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-scale hover-glow animate-fadeInRight animate-delay-400">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Systemschein</h3>
              <p className="text-gray-600 mb-6">
                Erhöhen Sie Ihre Gewinnchancen mit einem Systemschein. Spielen Sie mehrere Kombinationen gleichzeitig.
              </p>
              <div className="text-3xl font-bold text-purple-600 mb-4">ab CHF 7.50</div>
              <Link href="/login">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 hover-scale">Systemschein spielen</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
