import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function CookiesPage() {
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
              <h1 className="text-4xl font-bold mb-4">Cookie-Richtlinie</h1>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Diese Seite informiert Sie über unsere Cookie-Richtlinie. Für detaillierte Informationen besuchen Sie
                bitte unsere vollständige Cookie-Richtlinie.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-bold mb-4">Was sind Cookies?</h2>
                <p className="text-gray-700">
                  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website
                  besuchen. Sie helfen uns dabei, die Website zu verbessern und Ihnen personalisierte Inhalte
                  anzubieten.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="/legal/cookie-richtlinie"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Vollständige Cookie-Richtlinie lesen
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
