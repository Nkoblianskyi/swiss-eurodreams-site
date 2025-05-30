import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Verantwortlich spielen</h3>
            <p className="text-gray-300 text-sm mb-4">
              Spielen Sie verantwortungsvoll. Wenn Sie Hilfe benötigen, wenden Sie sich an eine der folgenden
              Organisationen:
            </p>
            <div className="space-y-2">
              <a href="https://www.sos-spielsucht.ch/de/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-2 rounded inline-block">
                  <Image
                    src="/images/spielen-ohne-sucht.png"
                    alt="Spielen ohne Sucht"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </a>
              <a href="https://www.careplay.ch/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-2 rounded inline-block">
                  <Image
                    src="/images/careplay-logo.png"
                    alt="CarePlay"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-white transition-colors">
                  Rechtlicher Rahmen
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/legal/cookie-richtlinie" className="text-gray-300 hover:text-white transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <Link href="/legal/teilnahmebedingungen" className="text-gray-300 hover:text-white transition-colors">
                  Teilnahmebedingungen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hilfe & Support</h3>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://www.sos-spielsucht.ch/de/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="/images/spielen-ohne-sucht.png"
                      alt="Spielen ohne Sucht"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                </a>
                <a href="https://www.careplay.ch/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="/images/careplay-logo.png"
                      alt="CarePlay"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                </a>
                <a href="https://www.radix.ch/de/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white p-2 rounded">
                    <Image src="/images/radix-logo.png" alt="Radix" width={120} height={40} className="h-8 w-auto" />
                  </div>
                </a>
                <a href="https://www.gespa.ch/de/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-white p-2 rounded">
                    <Image src="/images/gespa-logo.svg" alt="GESPA" width={120} height={40} className="h-8 w-auto" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">EuroDreams</h3>
            <Image
              src="/images/eurodreams-logo.png"
              alt="EuroDreams"
              width={150}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">Die europäische Lotterie mit den besten Gewinnchancen.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">18+</span>
                <span>Nur für Personen ab 18 Jahren</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">© 2025 CHBigWin.com - Alle Rechte vorbehalten</div>
          </div>

          <div className="mt-4 text-xs text-gray-400 leading-relaxed">
            Diese Website bewirbt EuroDreams auf der Grundlage einer Zusammenarbeit mit dem lizenzierten Betreiber
            Swisslos Interkantonale Landeslotterie und arbeitet nach den Regeln der Schweizer Glücksspielaufsicht
            (GESPA), die Rechtsnachfolgerin der ehemaligen Lotterie- und Wettkommission (Comlot) ist.
          </div>
        </div>
      </div>
    </footer>
  )
}
