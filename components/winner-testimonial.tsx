import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export function WinnerTestimonial() {
  return (
    <section className="py-16">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">Letzter Gewinner</h2>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 animate-fadeInUp animate-delay-300 hover-scale">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  M.S.
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <Quote className="w-8 h-8 text-purple-600 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-xl text-gray-700 mb-4">
                  "Ich kann es immer noch nicht glauben! Als ich die Gewinnzahlen gesehen habe, dachte ich, ich träume.
                  EuroDreams hat meinen grössten Traum wahr gemacht - finanzielle Sicherheit für die nächsten 30 Jahre!"
                </blockquote>
                <div className="text-lg font-semibold text-purple-600">M.S. aus Zürich</div>
                <div className="text-gray-600">Gewinner des 1. Ranges - 20.000 € monatlich für 30 Jahre</div>
                <div className="text-sm text-gray-500 mt-2">Ziehung vom 15. Januar 2024</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
