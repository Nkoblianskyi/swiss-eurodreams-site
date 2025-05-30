import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Globe, Users } from "lucide-react"
import Image from "next/image"

export function LotteryInfo() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">Über EuroDreams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EuroDreams ist die neue europäische Lotterie, die jeden Montag Millionen von Träumen wahr werden lässt. Mit
            attraktiven Gewinnchancen und einem Hauptgewinn von bis zu 20.000 € monatlich für 30 Jahre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-scale hover-glow animate-fadeInUp animate-delay-100">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Grosse Gewinne</h3>
              <p className="text-gray-600">Hauptgewinn: 20.000 € monatlich für 30 Jahre oder einmalig 400.000 €</p>
            </CardContent>
          </Card>

          <Card className="hover-scale hover-glow animate-fadeInUp animate-delay-200">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Europaweit</h3>
              <p className="text-gray-600">Spielen Sie mit Millionen von Teilnehmern aus ganz Europa</p>
            </CardContent>
          </Card>

          <Card className="hover-scale hover-glow animate-fadeInUp animate-delay-300">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Jeden Montag</h3>
              <p className="text-gray-600">Wöchentliche Ziehungen jeden Montag um 20:00 Uhr</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
