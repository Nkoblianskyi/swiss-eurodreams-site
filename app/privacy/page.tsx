import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Allgemeine Hinweise</h2>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Datenerfassung auf unserer Website</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Wer ist verantwortlich für die Datenerfassung?</h3>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber in Zusammenarbeit mit
                Swisslos Interkantonale Landeslotterie.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                Sperrung oder Löschung dieser Daten zu verlangen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
              <p className="mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
                Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver
                und sicherer zu machen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Kontakt</h2>
              <p className="mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
                Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an uns.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
