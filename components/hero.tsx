"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [nextDrawDate, setNextDrawDate] = useState("")

  useEffect(() => {
    const getNextMonday = () => {
      const now = new Date()
      const nextMonday = new Date()
      const daysUntilMonday = (1 + 7 - now.getDay()) % 7 || 7
      nextMonday.setDate(now.getDate() + daysUntilMonday)
      nextMonday.setHours(20, 0, 0, 0) // 8 PM draw time
      return nextMonday
    }

    const updateTimer = () => {
      const nextDraw = getNextMonday()
      const now = new Date().getTime()
      const distance = nextDraw.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }

      setNextDrawDate(
        nextDraw.toLocaleDateString("de-CH", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">EuroDreams Schweiz</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp animate-delay-200">
          Träumen Sie europäisch - Gewinnen Sie gross!
        </p>

        <Card className="bg-gradient-to-br from-red-500/30 to-red-700/30 backdrop-blur-sm border-red-300/60 border-2 p-8 mb-8 max-w-2xl mx-auto shadow-2xl ring-4 ring-red-400/50 ring-offset-4 ring-offset-purple-700 animate-fadeInUp animate-delay-300 animate-glow hover:scale-105 transition-all duration-500 hover:shadow-3xl hover:ring-6 hover:ring-red-300/70">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/eurodreams-logo.png"
              alt="EuroDreams"
              width={200}
              height={60}
              className="h-12 w-auto animate-pulse-slow"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Nächste Ziehung</h2>
          <p className="text-lg mb-6">{nextDrawDate}</p>

          <div className="grid grid-cols-4 gap-4 mb-6 bg-white rounded-lg p-4 border border-gray-200 text-black animate-pulse-slow hover:animate-none transition-all duration-300">
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-75">Tage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-75">Stunden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-75">Minuten</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-75">Sekunden</div>
            </div>
          </div>
        </Card>

        <Link href="/login">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg animate-fadeInUp animate-delay-500 hover-scale"
          >
            Jetzt EuroDreams spielen!
          </Button>
        </Link>
      </div>
    </section>
  )
}
