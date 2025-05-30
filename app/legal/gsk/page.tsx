import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GSKPage() {
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
                <h1 className="text-3xl font-bold text-purple-700 mb-4">
                  Gesamtschweizerisches Geldspielkonkordat (GSK)
                </h1>
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/eurodreams-logo.png"
                    alt="EuroDreams"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <div className="mb-6">
                <p className="mb-4">Die Kantone</p>
                <p className="mb-4">gestützt auf</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Art. 48 und Art. 106 sowie Art. 191 b Abs. 2 der Bundesverfassung der Schweizerischen
                    Eidgenossenschaft vom 18. April 1999 (SR 101; BV)
                  </li>
                  <li>das Bundesgesetz vom 29. September 2017 über Geldspiele (SR 935.51; Geldspielgesetz, BGS)</li>
                </ul>
                <p>vereinbaren:</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">1. Kapitel: Allgemeine Bestimmungen</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Art. 1 Gegenstand</h4>
                  <p className="mb-2">Dieses Konkordat regelt</p>
                  <ol className="list-[lower-alpha] pl-6 space-y-1">
                    <li>
                      die interkantonale Trägerschaft Geldspiele (nachfolgend: Trägerschaft) einschliesslich das
                      interkantonale Geldspielgericht (nachfolgend: Geldspielgericht);
                    </li>
                    <li>
                      die interkantonale Aufsichts- und Vollzugsbehörde gemäss Art. 105 BGS (nachfolgend: Interkantonale
                      Geldspielaufsicht; GESPA);
                    </li>
                    <li>die Stiftung Sportförderung Schweiz (nachfolgend SFS);</li>
                    <li>
                      die Gewährung ausschliesslicher Veranstaltungsrechte für die Durchführung von Grosslotterien und
                      grossen Sportwetten;
                    </li>
                    <li>
                      die Erhebung und Verwendung von Abgaben für die Finanzierung des Aufwands im Zusammenhang mit dem
                      Geldspiel und der Bekämpfung der Spielsucht.
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. Kapitel: Die interkantonale Trägerschaft Geldspiele</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">ERSTER ABSCHNITT: AUFGABEN UND ORGANISATION</h4>
                  <h5 className="italic mb-2">a) Allgemeines</h5>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Art. 2 Aufgaben der Trägerschaft</h4>
                    <p className="mb-2">Die Trägerschaft</p>
                    <ol className="list-[lower-alpha] pl-6 space-y-1">
                      <li>
                        bestimmt im Rahmen des übergeordneten Rechts die Politik der Kantone im Bereich der Grossspiele
                        und setzt politische Rahmenbedingungen für den Grossspielsektor;
                      </li>
                      <li>
                        nimmt die Verantwortung der Kantone als Träger der GESPA wahr; sie übt insbesondere die
                        administrative Aufsicht über die GESPA aus;
                      </li>
                      <li>stellt das Geldspielgericht;</li>
                      <li>
                        gewährleistet die transparente Verwendung von Reingewinnen aus Grosslotterien und grossen
                        Sportwetten zugunsten des nationalen Sports; sie übt insbesondere die administrative Aufsicht
                        über die SFS aus;
                      </li>
                      <li>ist Depositärin des Konkordats.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="/documents/Gesamtschweizerisches-Geldspielkonkordat.pdf"
                  download="Gesamtschweizerisches-Geldspielkonkordat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vollständiges Konkordat herunterladen (PDF)
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
