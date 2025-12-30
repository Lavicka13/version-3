import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Zeitinsel",
  description: "Datenschutzerklärung der Zeitinsel - Kosmetik & Wellness in Blaufelden",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF8F3] to-white">
      {/* Header */}
      <div className="bg-[#6A0DAD]/5 py-16">
        <div className="container mx-auto px-8 lg:px-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6A0DAD] hover:text-[#9D4EDD] transition-colors mb-8"
          >
            <span>←</span>
            <span className="text-sm">Zurück zur Startseite</span>
          </Link>
          <h1 className="font-handwriting text-5xl md:text-6xl text-[#6A0DAD]">
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl text-[#1A1A1A] font-normal mt-6 mb-3">Allgemeine Hinweise</h3>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              2. Verantwortliche Stelle
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Ruth-A. Schwendtner<br />
              Zeitinsel - Kosmetik & Wellness<br />
              Im Pfandwasen 25<br />
              74572 Blaufelden<br /><br />
              Telefon: 0151 708 36 557<br />
              E-Mail: rasch.kosmetik@gmail.com
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
              Daten entscheidet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl text-[#1A1A1A] font-normal mt-6 mb-3">Server-Log-Dateien</h3>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4 list-disc pl-6">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl text-[#1A1A1A] font-normal mt-6 mb-3">Kontaktaufnahme</h3>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              4. Google Maps
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
              Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
              Datenübertragung.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
              Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
              angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
              lit. f DSGVO dar.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#6A0DAD] hover:text-[#9D4EDD]">https://policies.google.com/privacy</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              5. Ihre Rechte
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4 list-disc pl-6">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
              <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              6. Datensicherheit
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und
              an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-[#1A1A1A]/60 font-light text-sm">
              Stand: Dezember 2024
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
