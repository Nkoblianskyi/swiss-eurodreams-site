import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BundesgesetzPage() {
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
                <h1 className="text-3xl font-bold text-purple-700 mb-4">Bundesgesetz über Geldspiele</h1>
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/eurodreams-logo.png"
                    alt="EuroDreams"
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-2">vom 29. September 2017 (Stand am 1. Juli 2019)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-purple-700 mb-4">1. Kapitel: Allgemeine Bestimmungen</h2>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Art. 1 Gegenstand</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Dieses Gesetz regelt die Zulässigkeit von Geldspielen und deren Durchführung sowie die Verwendung
                    der Spielerträge.
                  </li>
                  <li>
                    Dieses Gesetz gilt nicht für:
                    <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                      <li>Geldspiele im privaten Kreis;</li>
                      <li>
                        Geschicklichkeitsspiele, die weder automatisiert noch interkantonal noch online durchgeführt
                        werden;
                      </li>
                      <li>Sportwettkämpfe;</li>
                      <li>
                        kurzzeitig zur Verkaufsförderung durchgeführte Lotterien und Geschicklichkeitsspiele, von denen
                        keine Gefahr von exzessivem Geldspiel ausgeht und bei denen die Teilnahme ausschliesslich über
                        den Kauf von Waren oder Dienstleistungen erfolgt, die zu höchstens marktkonformen Preisen
                        angeboten werden;
                      </li>
                      <li>
                        durch Medienunternehmen kurzzeitig zur Verkaufsförderung durchgeführte Lotterien und
                        Geschicklichkeitsspiele, von denen keine Gefahr von exzessivem Geldspiel ausgeht und an denen zu
                        den gleich guten Zugangs- und Teilnahmebedingungen wie bei Leistung eines geldwerten Einsatzes
                        oder bei Abschluss eines Rechtsgeschäfts auch gratis teilgenommen werden kann;
                      </li>
                      <li>
                        Tätigkeiten, die gemäss Finanzmarktaufsichtsgesetz vom 22. Juni 2007 der Aufsicht der
                        Eidgenössischen Finanzmarktaufsicht (FINMA) unterstehen.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Dieses Gesetz gilt auch nicht für Schneeball-, Lawinen- oder Pyramidensysteme. Für diese gelten die
                    Vorschriften des Bundesgesetzes vom 19. Dezember 1986 gegen den unlauteren Wettbewerb.
                  </li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Art. 2 Zweck</h3>
                <p className="mb-2">Dieses Gesetz bezweckt, dass:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>die Bevölkerung angemessen vor den Gefahren geschützt wird, die von den Geldspielen ausgehen;</li>
                  <li>Geldspiele sicher und auf transparente Weise durchgeführt werden;</li>
                  <li>
                    die Reingewinne aus den Grossspielen, ausgenommen die Reingewinne aus den Geschicklichkeitsspielen,
                    und die Reingewinne eines bestimmten Teils der Kleinspiele vollumfänglich und in transparenter Weise
                    für gemeinnützige Zwecke verwendet werden;
                  </li>
                  <li>
                    ein Teil der Bruttospielerträge der Spielbanken zugunsten der Alters-, Hinterlassenen- und
                    Invalidenversicherung verwendet wird.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold mb-2">Art. 3 Begriffe</h3>
                <p className="mb-2">Die folgenden Ausdrücke bedeuten:</p>
                <ol className="list-[lower-alpha] pl-6 space-y-2">
                  <li>
                    Geldspiele: Spiele, bei denen gegen Leistung eines geldwerten Einsatzes oder bei Abschluss eines
                    Rechtsgeschäfts ein Geldgewinn oder ein anderer geldwerter Vorteil in Aussicht steht;
                  </li>
                  <li>
                    Lotterien: Geldspiele, die einer unbegrenzten oder zumindest einer hohen Anzahl Personen offenstehen
                    und bei denen das Ergebnis durch ein und dieselbe Zufallsziehung oder durch eine ähnliche Prozedur
                    ermittelt wird;
                  </li>
                  <li>
                    Sportwetten: Geldspiele, bei denen der Spielgewinn abhängig ist von der richtigen Vorhersage des
                    Verlaufs oder des Ausgangs eines Sportereignisses;
                  </li>
                  <li>
                    Geschicklichkeitsspiele: Geldspiele, bei denen der Spielgewinn ganz oder überwiegend von der
                    Geschicklichkeit der Spielerin oder des Spielers abhängt;
                  </li>
                  <li>
                    Grossspiele: Lotterien, Sportwetten und Geschicklichkeitsspiele, die je automatisiert oder
                    interkantonal oder online durchgeführt werden;
                  </li>
                  <li>
                    Kleinspiele: Lotterien, Sportwetten und Pokerturniere, die je weder automatisiert noch interkantonal
                    noch online durchgeführt werden (Kleinlotterien, lokale Sportwetten, kleine Pokerturniere);
                  </li>
                  <li>
                    Spielbankenspiele: Geldspiele, die einer eng begrenzten Anzahl Personen offenstehen; ausgenommen
                    sind die Sportwetten, die Geschicklichkeitsspiele und die Kleinspiele.
                  </li>
                </ol>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="/documents/Bundesgesetz-über-Geldspiele.pdf"
                  download="Bundesgesetz-über-Geldspiele.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vollständiges Bundesgesetz herunterladen (PDF)
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
