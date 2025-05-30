import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Star, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function EuroDreamsDetails() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/eurodreams-logo.png"
              alt="EuroDreams"
              width={250}
              height={75}
              className="h-16 w-auto animate-fadeInUp animate-pulse-slow"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">
            Warum EuroDreams?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie die Vorteile der modernsten europäischen Lotterie mit den besten Gewinnchancen und attraktiven
            monatlichen Renten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-purple-200 hover:border-purple-400 transition-colors hover-scale hover-glow animate-fadeInUp animate-delay-100">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Wöchentliche Ziehungen</h3>
              <p className="text-gray-600 text-sm">Jeden Montag um 20:00 Uhr neue Gewinnchancen</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:border-purple-400 transition-colors hover-scale hover-glow animate-fadeInUp animate-delay-200">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Europaweit</h3>
              <p className="text-gray-600 text-sm">Teilnahme aus 9 europäischen Ländern möglich</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:border-purple-400 transition-colors hover-scale hover-glow animate-fadeInUp animate-delay-300">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Beste Chancen</h3>
              <p className="text-gray-600 text-sm">Optimale Gewinnwahrscheinlichkeiten in allen Kategorien</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 hover:border-purple-400 transition-colors hover-scale hover-glow animate-fadeInUp animate-delay-400">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sicher & Legal</h3>
              <p className="text-gray-600 text-sm">Lizenziert durch Swisslos und GESPA reguliert</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto animate-fadeInUp animate-delay-500 hover-glow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/eurodreams-logo.png"
                  alt="EuroDreams"
                  width={150}
                  height={45}
                  className="h-10 w-auto mr-4"
                />
                <span className="text-purple-600 font-bold text-lg">Die neue Generation</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monatliche Renten statt Einmalzahlung</h3>
              <p className="text-gray-600 mb-6">
                EuroDreams revolutioniert das Lotteriespiel mit monatlichen Rentenzahlungen. Gewinnen Sie 20.000 €
                monatlich für 30 Jahre und sichern Sie sich langfristige finanzielle Freiheit.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Garantierte monatliche Zahlungen
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Wahlweise Einmalzahlung möglich
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Inflationsschutz durch regelmäßige Zahlungen
                </li>
              </ul>
              <Link href="/login">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 hover-scale animate-bounce-slow">
                  Jetzt EuroDreams spielen
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Hauptgewinn</h4>
                <div className="text-4xl font-bold mb-2">20.000 €</div>
                <div className="text-lg mb-4">monatlich für 30 Jahre</div>
                <div className="text-sm opacity-90">= 600.000 € Gesamtgewinn</div>
                <div className="mt-4 pt-4 border-t border-purple-400">
                  <div className="text-sm">oder einmalig</div>
                  <div className="text-2xl font-bold">400.000 €</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
