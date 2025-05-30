import Link from "next/link"
import { ArrowLeft, Download, Users, AlertTriangle, CheckCircle, FileText } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function TeilnahmebedingungenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/legal"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Rechtlichen Dokumenten
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Teilnahmebedingungen</h1>
              <p className="text-gray-600">Allgemeine Geschäftsbedingungen für EuroDreams</p>
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="mb-8 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-lg font-semibold text-purple-900 mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Wichtige Hinweise
              </h2>
              <p className="text-purple-800">
                Durch die Teilnahme an EuroDreams und anderen Lotterien akzeptieren Sie diese Teilnahmebedingungen
                vollständig.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Allgemeine Bestimmungen</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Veranstalter</h3>
            <p className="text-gray-700 mb-4">
              Veranstalter der EuroDreams Lotterie ist die Swisslos Interkantonale Landeslotterie Genossenschaft in
              Zusammenarbeit mit den europäischen Partnerlotterien.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Geltungsbereich</h3>
            <p className="text-gray-700 mb-6">
              Diese Teilnahmebedingungen gelten für alle Spiele und Dienstleistungen, die über chbigwin.com angeboten
              werden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Teilnahmeberechtigung</h2>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Berechtigt zur Teilnahme sind:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Personen ab 18 Jahren</li>
                    <li>• Mit Wohnsitz in der Schweiz</li>
                    <li>• Mit gültiger Identifikation</li>
                    <li>• Ohne Spielsperre</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Ausgeschlossen von der Teilnahme sind:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Minderjährige Personen</li>
                    <li>• Personen mit Spielsperre</li>
                    <li>• Mitarbeiter von Swisslos und deren Angehörige</li>
                    <li>• Personen ohne gültige Schweizer Adresse</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Spielregeln EuroDreams</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Spielprinzip</h3>
            <p className="text-gray-700 mb-4">
              Bei EuroDreams wählen Sie 6 Zahlen aus 40 und 1 Traumzahl aus 5. Die Ziehung findet jeden Montag und
              Donnerstag statt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Einsätze</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Mindesteinsatz: CHF 2.50 pro Tipp</li>
              <li>Maximaler Einsatz: CHF 1'000 pro Ziehung</li>
              <li>Mehrfachtipps möglich</li>
              <li>Systemspiele verfügbar</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Gewinnklassen</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Gewinnklasse</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Richtige Zahlen</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Gewinn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">1</td>
                    <td className="px-4 py-2 text-sm text-gray-700">6 + 1 Traumzahl</td>
                    <td className="px-4 py-2 text-sm text-gray-700">CHF 20'000 monatlich (30 Jahre)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">2</td>
                    <td className="px-4 py-2 text-sm text-gray-700">6 + 0 Traumzahl</td>
                    <td className="px-4 py-2 text-sm text-gray-700">CHF 2'000 monatlich (5 Jahre)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">3</td>
                    <td className="px-4 py-2 text-sm text-gray-700">5 + 1 Traumzahl</td>
                    <td className="px-4 py-2 text-sm text-gray-700">CHF 2'000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">4</td>
                    <td className="px-4 py-2 text-sm text-gray-700">5 + 0 Traumzahl</td>
                    <td className="px-4 py-2 text-sm text-gray-700">CHF 200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700">5</td>
                    <td className="px-4 py-2 text-sm text-gray-700">4 + 1 Traumzahl</td>
                    <td className="px-4 py-2 text-sm text-gray-700">CHF 20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gewinnauszahlung</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Auszahlungsmodalitäten</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Gewinne bis CHF 1'000: Automatische Gutschrift auf das Spielerkonto</li>
              <li>Gewinne über CHF 1'000: Auszahlung nach Identitätsprüfung</li>
              <li>Monatsrenten: Auszahlung jeweils am 15. des Monats</li>
              <li>Steuerliche Behandlung nach schweizerischem Recht</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Annahmefrist</h3>
            <p className="text-gray-700 mb-6">
              Gewinne müssen innerhalb von 26 Wochen nach der Ziehung abgeholt werden. Nicht abgeholte Gewinne verfallen
              zugunsten gemeinnütziger Zwecke.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Verantwortungsvolles Spielen</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Spielerschutz</h4>
                  <p className="text-yellow-700">
                    Wir fördern verantwortungsvolles Spielen. Setzen Sie sich Limits und spielen Sie nur mit Geld, das
                    Sie sich leisten können zu verlieren.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Schutzmaßnahmen</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Einzahlungslimits</li>
              <li>Verlustlimits</li>
              <li>Zeitlimits</li>
              <li>Selbstausschluss möglich</li>
              <li>Beratungsangebote</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Hilfe bei Spielproblemen</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Beratungsstellen:</strong>
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Spielen ohne Sucht: 0800 040 080</li>
                <li>• Radix: www.radix.ch</li>
                <li>• Careplay: www.careplay.ch</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Datenschutz</h2>
            <p className="text-gray-700 mb-4">
              Ihre persönlichen Daten werden gemäß unserer Datenschutzerklärung verarbeitet. Wir verwenden Ihre Daten
              nur für die Durchführung der Spiele und zur Erfüllung gesetzlicher Verpflichtungen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Haftungsausschluss</h2>
            <p className="text-gray-700 mb-4">
              Swisslos haftet nicht für Schäden, die durch technische Störungen, höhere Gewalt oder andere außerhalb
              unseres Einflussbereichs liegende Umstände entstehen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Anwendbares Recht</h2>
            <p className="text-gray-700 mb-4">
              Für alle Streitigkeiten gilt schweizerisches Recht. Gerichtsstand ist Basel.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontakt</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Swisslos Interkantonale Landeslotterie</strong>
                <br />
                Lange Gasse 20
                <br />
                4002 Basel
                <br />
                Telefon: 061 284 11 11
                <br />
                E-Mail: media@swisslos.ch
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Stand: {new Date().toLocaleDateString("de-CH")} | Version 2.1</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
