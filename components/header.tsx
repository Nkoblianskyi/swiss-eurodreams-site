"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/eurodreams-logo.png"
              alt="EuroDreams Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600">
              Startseite
            </Link>
            <Link href="/legal" className="text-gray-700 hover:text-purple-600">
              Rechtliches
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-purple-600">
              Datenschutz
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Anmelden</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-purple-600 hover:bg-purple-700">Registrieren</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
