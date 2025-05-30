import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IKV2020Page() {
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
                  Interkantonale Vereinbarung betreffend die gemeinsame Durchführung von Geldspielen (IKV 2020)
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
                <h3 className="font-bold mb-2">Ingress</h3>
                <p className="mb-4">Die dieser Vereinbarung beitretenden Kantone,</p>
                <p className="mb-4">
                  im Bestreben, die mit der IKV 1937 errichtete Zusammenarbeit auch unter dem geänderten Bundesrecht
                  (Bundesgesetz über die Geldspiele, SR 935.51) weiter zu führen,
                </p>
                <p className="mb-4">gestützt auf</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Art. 48 der Bundesverfassung vom 18. April 1999 (SR 101)</li>
                  <li>das Bundesgesetz über Geldspiele vom 29. September 2017, SR 935.51)</li>
                  <li>das gesamtschweizerische Geldspielkonkordat vom 20. Mai 2019 (GSK)</li>
                </ul>
                <p>vereinbaren:</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-2">Art. 1 Leistungsauftrag Swisslos</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Die dieser Vereinbarung beitretenden Kantone (nachfolgend als «Vereinbarungskantone» bezeichnet)
                    betreiben die Genossenschaft «Swisslos Interkantonale Landeslotterie» (nachfolgend als „Swisslos"
                    bezeichnet).
                  </li>
                  <li>
                    Swisslos veranstaltet Geldspiele im Auftrag der Vereinbarungskantone, nach Massgabe des BGS, des
                    gesamtschweizerischen Geldspielkonkordats sowie der vorliegenden Vereinbarung.
                  </li>
                  <li>
                    In Anwendung von Art. 23 Abs. 2 BGS wird Swisslos als einzige Veranstalterin von Lotterie- und
                    Sportwetten-Grossspielen auf dem Gebiet der Vereinbarungskantone bezeichnet.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold mb-2">Art. 2 Ablieferung und Verwendung der Reingewinne</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Die Reingewinne der Swisslos fallen vollumfänglich den Vereinbarungskantonen zu. Sie unterstützen
                    damit gemeinnützige Zwecke, namentlich in den Bereichen Kultur, Soziales und Sport (Art. 125 Abs. 1
                    BGS).
                  </li>
                  <li>
                    Die Vereinbarungskantone verwenden einen Teil der Reingewinne zur Förderung des nationalen Sports.
                    Der Betrag wird nach dem Verfahren gemäss Art. 34 GSK durch die FDKG festgelegt und jährlich in die
                    Stiftung Sportförderung Schweiz (Art. 32 ff. GSK) eingelegt.
                  </li>
                  <li>
                    Die nach Zuweisung des Reingewinnanteils nach Abs. 2 verbleibenden Reingewinne sind den
                    Vereinbarungskantonen jährlich nach folgendem Verteilschlüssel abzuliefern:
                    <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                      <li>
                        Reingewinn aus Losen: Jedem Kanton ein Fixum von CHF 70'000, der Rest nach Bevölkerungszahlen.
                        Massgebend ist die gemäss der letzten Volkszählung ermittelte Bevölkerungszahl.
                      </li>
                      <li>
                        Reingewinn aus übrigen Spielen: 50% nach Bevölkerung, 50% nach Spieleinsätzen. Massgebend ist
                        die gemäss der letzten Volkszählung ermittelte Bevölkerungszahl.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Der Anteil am Reingewinn einer Spielkategorie steht einem Vereinbarungskanton nur dann zu, wenn die
                    entsprechende Spielkategorie in seinem Gebiet nicht verboten ist im Sinne von Art. 28 BGS.
                  </li>
                </ol>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="/documents/Interkantonale-Vereinbarung-2020.pdf"
                  download="Interkantonale-Vereinbarung-2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vollständige Vereinbarung herunterladen (PDF)
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
