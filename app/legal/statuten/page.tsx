import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StatutenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/legal" className="text-purple-600 hover:text-purple-800 flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                <span>Zurück zur Übersicht</span>
              </Link>

              <div className="text-center">
                <h1 className="text-3xl font-bold text-purple-700 mb-4">Statuten</h1>
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/eurodreams-logo.png"
                    alt="EuroDreams"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-2">Swisslos Interkantonale Landeslotterie Genossenschaft</p>
                <p className="text-gray-600">vom 3. Dezember 2021</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">I. ALLGEMEINE BESTIMMUNGEN</h2>

              <div className="mb-6">
                <h3 className="font-bold mb-2">A. FIRMA, SITZ UND ZWECK DER GENOSSENSCHAFT</h3>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 1 Firma und Sitz der Genossenschaft</h4>
                  <p>
                    Unter der Firma "SWISSLOS Interkantonale Landeslotterie Genossenschaft" besteht mit Sitz in Basel
                    eine gestützt auf die Interkantonale Vereinbarung betreffend die gemeinsame Durchführung von
                    Lotterien vom 26. Mai 1937 (IKV 1937) gegründete und gestützt auf die Interkantonale Vereinbarung
                    betreffend die gemeinsame Durchführung von Geldspielen vom 20. Mai 2019 (IKV 2020) betriebene
                    Genossenschaft von unbeschränkter Dauer.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 2 Zweck der Genossenschaft</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      Die Genossenschaft bezweckt die Durchführung von Lotterien und Sportwetten im Sinne von Art. 3 des
                      Bundesgesetzes über Geldspiele vom 29. September 2017 (BGS) und die Verwendung der Reingewinne für
                      gemeinnützige Zwecke nach Massgabe der IKV 2020.
                    </li>
                    <li>Die Genossenschaft kann auch Geldspiele anderer Art im Sinne des BGS veranstalten.</li>
                    <li>Auf entsprechende Anfrage kann sie auch im Fürstentum Liechtenstein Geldspiele durchführen.</li>
                  </ol>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">B. MITGLIEDSCHAFT</h3>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 3 Mitgliedschaft</h4>
                  <p>Mitglieder der Genossenschaft sind jene Kantone, die der IKV 2020 angehören.</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">C. FINANZEN</h3>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 4 Reservefonds</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Die Genossenschaft verfügt über einen Reservefonds von CHF 500'000.</li>
                    <li>Eine Verzinsung des Reservefonds findet nicht statt.</li>
                  </ol>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 5 Gewinnverteilung</h4>
                  <p>Die Verteilung des Reingewinns auf die Genossenschafter erfolgt nach Massgabe der IKV 2020.</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 6 Geschäftsjahr</h4>
                  <p>Das Geschäftsjahr der Genossenschaft ist das Kalenderjahr (1. Januar – 31. Dezember).</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Art. 7 Haftung</h4>
                  <p>
                    Für die Verbindlichkeiten der Genossenschaft haftet ausschliesslich das Genossenschaftsvermögen.
                    Jede Haftung der Genossenschafter ist ausgeschlossen.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="/documents/Statuten Swisslos Interkantonale Landeslotterie Genossenschaft.pdf"
                  download="Statuten Swisslos Interkantonale Landeslotterie Genossenschaft.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vollständige Statuten herunterladen (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
