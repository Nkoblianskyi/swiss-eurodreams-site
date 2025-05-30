"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    acceptTerms: false,
    acceptPrivacy: false,
    confirmAge: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) newErrors.email = "E-Mail ist erforderlich"
    if (!formData.password) newErrors.password = "Passwort ist erforderlich"
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwörter stimmen nicht überein"
    }
    if (!formData.firstName) newErrors.firstName = "Vorname ist erforderlich"
    if (!formData.lastName) newErrors.lastName = "Nachname ist erforderlich"
    if (!formData.acceptTerms) newErrors.acceptTerms = "Sie müssen die AGB akzeptieren"
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = "Sie müssen die Datenschutzerklärung akzeptieren"
    if (!formData.confirmAge) newErrors.confirmAge = "Sie müssen bestätigen, dass Sie 18+ sind"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      alert("Registrierung erfolgreich!")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registrieren</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="password">Passwort</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="confirmAge"
                    checked={formData.confirmAge}
                    onCheckedChange={(checked) => setFormData({ ...formData, confirmAge: !!checked })}
                  />
                  <Label htmlFor="confirmAge" className="text-sm">
                    Ich bestätige, dass ich 18 Jahre oder älter bin
                  </Label>
                </div>
                {errors.confirmAge && <p className="text-red-500 text-xs">{errors.confirmAge}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: !!checked })}
                  />
                  <Label htmlFor="acceptTerms" className="text-sm">
                    Ich akzeptiere die{" "}
                    <Link href="/terms" className="text-purple-600 hover:underline">
                      Allgemeinen Geschäftsbedingungen
                    </Link>
                  </Label>
                </div>
                {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onCheckedChange={(checked) => setFormData({ ...formData, acceptPrivacy: !!checked })}
                  />
                  <Label htmlFor="acceptPrivacy" className="text-sm">
                    Ich akzeptiere die{" "}
                    <Link href="/privacy" className="text-purple-600 hover:underline">
                      Datenschutzerklärung
                    </Link>
                  </Label>
                </div>
                {errors.acceptPrivacy && <p className="text-red-500 text-xs">{errors.acceptPrivacy}</p>}
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Registrieren
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Bereits ein Konto?{" "}
                <Link href="/login" className="text-purple-600 hover:underline">
                  Jetzt anmelden
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
