"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto p-6 bg-white border-2 border-purple-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold mb-2">Cookie-Hinweis</h3>
            <p className="text-sm text-gray-600">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Durch die
              weitere Nutzung stimmen Sie der Verwendung von Cookies zu.{" "}
              <Link href="/cookies" className="text-purple-600 hover:underline">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={declineCookies}>
              Ablehnen
            </Button>
            <Button onClick={acceptCookies} className="bg-purple-600 hover:bg-purple-700">
              Akzeptieren
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
