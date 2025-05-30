import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PrizesSection() {
  const prizes = [
    {
      rank: "1. Rang",
      prize: "20.000 € monatlich für 30 Jahre",
      alternative: "oder 400.000 € einmalig",
      chance: "1 : 19.816.584",
    },
    {
      rank: "2. Rang",
      prize: "2.000 € monatlich für 5 Jahre",
      alternative: "oder 100.000 € einmalig",
      chance: "1 : 1.982.658",
    },
    {
      rank: "3. Rang",
      prize: "50 €",
      alternative: "",
      chance: "1 : 13.781",
    },
    {
      rank: "4. Rang",
      prize: "15 €",
      alternative: "",
      chance: "1 : 985",
    },
  ]

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp animate-delay-200">
            Was können Sie gewinnen?
          </h2>
          <p className="text-xl text-gray-600">
            EuroDreams bietet attraktive Gewinnchancen in verschiedenen Kategorien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className="border-2 border-purple-200 hover:border-purple-400 transition-colors hover-scale hover-glow animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-purple-600 font-bold text-lg mb-2">{prize.rank}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{prize.prize}</div>
                {prize.alternative && <div className="text-sm text-gray-600 mb-4">{prize.alternative}</div>}
                <div className="text-sm text-gray-500">Gewinnchance: {prize.chance}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
