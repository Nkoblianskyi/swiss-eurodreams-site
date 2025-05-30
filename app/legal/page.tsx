import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Download } from "lucide-react"

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-purple-700 mb-4">Rechtlicher Rahmen</h1>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/eurodreams-logo.png"
                  alt="EuroDreams"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-lg text-gray-700">
                Die Aktivitäten von Swisslos als gemeinnütziges Lotterieunternehmen in der deutschsprachigen Schweiz und
                im Kanton Tessin basieren auf:
              </p>
            </div>

            <div className="grid gap-6 mb-10">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Bundesgesetz über Geldspiele</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">
                    vom 29. September 2017, sowie die entsprechende Ausführungsverordnung vom 7. November 2018.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/bundesgesetz"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Bundesgesetz ansehen
                    </Link>
                    <Link
                      href="/legal/verordnung"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Verordnung ansehen
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Interkantonale Vereinbarung</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">
                    betreffend die gemeinsame Durchführung von Lotterien vom 20. Mai 2019 (IKV 2020).
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/ikv2020"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Vereinbarung ansehen
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Interkantonales Konkordat</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">über Geldspiele (GSK) vom 20. Mai 2019.</p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/gsk"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Konkordat ansehen
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Statuten</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">vom 3. Dezember 2021.</p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/statuten"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Statuten ansehen
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Нові документи */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-700">Cookie-Richtlinie</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">
                    Informationen über die Verwendung von Cookies auf unserer Website und Ihre Rechte bezüglich der
                    Cookie-Einstellungen.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Datenschutz</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Cookies</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/cookie-richtlinie"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ansehen
                    </Link>
                    <a
                      href="/documents/Cookie-Richtlinie.pdf"
                      download="Cookie-Richtlinie.pdf"
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen (PDF)
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl text-purple-700">Teilnahmebedingungen</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-2">
                    Allgemeine Geschäftsbedingungen und Teilnahmebedingungen für EuroDreams und andere Lotterien.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">AGB</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Teilnahme</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="/legal/teilnahmebedingungen"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ansehen
                    </Link>
                    <a
                      href="/documents/Teilnahmebedingungen.pdf"
                      download="Teilnahmebedingungen.pdf"
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Herunterladen (PDF)
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Rechtliche Hinweise</h2>
              <p className="text-gray-700 mb-4">
                Swisslos betreibt EuroDreams auf Grundlage der Zusammenarbeit mit dem lizenzierten Betreiber Swisslos
                Intercantonal Lottery und arbeitet gemäß den Regeln der Schweizer Glücksspielaufsichtsbehörde (GESPA),
                die Nachfolgerin der ehemaligen Lotterie- und Wettkommission (Comlot) ist.
              </p>
              <p className="text-gray-700">
                Alle Aktivitäten von Swisslos und EuroDreams unterliegen den strengen Schweizer Glücksspielgesetzen und
                -vorschriften, die sicherstellen, dass Spiele fair, transparent und verantwortungsvoll durchgeführt
                werden.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
