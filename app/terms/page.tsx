import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <Image
                src="/images/eurodreams-logo.png"
                alt="EuroDreams"
                width={200}
                height={60}
                className="h-12 w-auto mx-auto mb-4"
              />
              <h1 className="text-4xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Hier finden Sie eine Übersicht unserer Allgemeinen Geschäftsbedingungen. Für detaillierte
                Teilnahmebedingungen besuchen Sie bitte unsere vollständige Seite.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-4">Teilnahmeberechtigung</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Mindestalter: 18 Jahre</li>
                  <li>Wohnsitz in der Schweiz erforderlich</li>
                  <li>Gültige Identifikation notwendig</li>
                  <li>Keine aktive Spielsperre</li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="/legal/teilnahmebedingungen"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Vollständige Teilnahmebedingungen lesen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
