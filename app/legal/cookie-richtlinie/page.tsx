import Link from "next/link"
import { ArrowLeft, Download, Shield, Settings, Cookie } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function CookieRichtliniePage() {
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
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cookie-Richtlinie</h1>
              <p className="text-gray-600">Informationen über die Verwendung von Cookies</p>
            </div>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-lg font-semibold text-blue-900 mb-2 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Wichtige Information
              </h2>
              <p className="text-blue-800">
                Diese Cookie-Richtlinie erklärt, wie chbigwin.com Cookies und ähnliche Technologien verwendet, um Ihnen
                ein besseres Nutzererlebnis zu bieten.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Was sind Cookies?</h2>
            <p className="text-gray-700 mb-6">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen.
              Sie helfen uns dabei, die Website zu verbessern und Ihnen personalisierte Inhalte anzubieten.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Arten von Cookies</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Notwendige Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Session-Cookies für die Benutzeranmeldung</li>
              <li>Sicherheits-Cookies zum Schutz vor Betrug</li>
              <li>Cookies für die Spracheinstellungen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Funktionale Cookies</h3>
            <p className="text-gray-700 mb-4">Diese Cookies verbessern die Funktionalität der Website:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Speicherung Ihrer Präferenzen</li>
              <li>Erinnerung an Ihre Spielauswahl</li>
              <li>Verbesserung der Benutzerfreundlichkeit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Analytische Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Google Analytics zur Webseitenanalyse</li>
              <li>Besucherzählung und Verweildauer</li>
              <li>Beliebte Seiten und Inhalte</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookie-Einstellungen verwalten</h2>
            <p className="text-gray-700 mb-4">Sie können Ihre Cookie-Einstellungen jederzeit ändern:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Über das Cookie-Banner beim ersten Besuch</li>
              <li>In den Einstellungen Ihres Browsers</li>
              <li>Über unser Cookie-Einstellungszentrum</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-yellow-600 mr-2" />
                <p className="text-yellow-800">
                  <strong>Hinweis:</strong> Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website
                  beeinträchtigen.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Drittanbieter-Cookies</h2>
            <p className="text-gray-700 mb-4">Wir verwenden auch Cookies von Drittanbietern:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> Zur Webseitenanalyse
              </li>
              <li>
                <strong>Zahlungsanbieter:</strong> Für sichere Transaktionen
              </li>
              <li>
                <strong>Social Media:</strong> Für Social-Media-Funktionen
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">Sie haben folgende Rechte bezüglich Cookies:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Recht auf Information über verwendete Cookies</li>
              <li>Recht auf Widerspruch gegen nicht-notwendige Cookies</li>
              <li>Recht auf Löschung von Cookie-Daten</li>
              <li>Recht auf Änderung Ihrer Einstellungen</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Letzte Aktualisierung: {new Date().toLocaleDateString("de-CH")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
