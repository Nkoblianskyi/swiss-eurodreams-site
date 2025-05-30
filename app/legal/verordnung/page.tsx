import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VerordnungPage() {
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
                <h1 className="text-3xl font-bold text-purple-700 mb-4">Verordnung über Geldspiele</h1>
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/eurodreams-logo.png"
                    alt="EuroDreams"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-2">vom 7. November 2018 (Stand am 1. Januar 2019)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">1. Kapitel: Begriffe</h2>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Art. 1 Geldspiele im privaten Kreis</h3>
                <p className="mb-2">(Art. 1 Abs. 2 Bst. a BGS)</p>
                <p className="mb-2">
                  Als Geldspiel im privaten Kreis gilt ein Geldspiel, das die folgenden Voraussetzungen erfüllt:
                </p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Es wird weder gewerbsmässig noch gestützt auf eine öffentliche Bekanntmachung durchgeführt.</li>
                  <li>
                    Die Anzahl Spielerinnen und Spieler ist klein; sie ist sehr klein, sofern zwischen ihnen ausserhalb
                    des Spiels keine Bindung, insbesondere familiärer oder beruflicher Art, besteht.
                  </li>
                  <li>
                    Den Spielerinnen und Spielern werden über ihren Einsatz hinaus keinerlei Kosten oder Gebühren
                    auferlegt.
                  </li>
                  <li>Die Summe der Spielgewinne ist tief und entspricht der Summe aller Einsätze.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Art. 2 Geschicklichkeitsspiele</h3>
                <p className="mb-2">(Art. 3 Bst. d BGS)</p>
                <p className="mb-2">
                  Als Geschicklichkeitsspiel gilt ein Geldspiel, das insbesondere die folgenden Voraussetzungen erfüllt:
                </p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    Geschickte Spielerinnen und Spieler können über eine grössere Zahl von Spieleinheiten einen höheren
                    Gewinn erzielen als andere Spielerinnen und Spieler.
                  </li>
                  <li>Beim Blindspiel ist die Wahrscheinlichkeit gering, einen Gewinn zu erzielen.</li>
                  <li>Die Spielerinnen und Spieler haben mehrere Optionen zur Beeinflussung des Spielverlaufs.</li>
                  <li>Ein erfolgreiches Spiel erfordert Fertigkeiten einer gewissen Komplexität.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold mb-2">Art. 3 Spielbankenspiele</h3>
                <p className="mb-2">(Art. 3 Bst. g BGS)</p>
                <p>
                  An demselben Spielbankenspiel können gleichzeitig höchstens 1000 Spielerinnen und Spieler teilnehmen.
                  Diese maximale Teilnehmerzahl gilt nicht für Jackpots.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="/documents/Geldspielverordnung.pdf"
                  download="Geldspielverordnung.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vollständige Verordnung herunterladen (PDF)
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
