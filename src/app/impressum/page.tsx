import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Zeitinsel",
  description: "Impressum der Zeitinsel - Kosmetik & Wellness in Blaufelden",
};

export default function Impressum() {
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
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Ruth-A. Schwendtner<br />
              Zeitinsel - Kosmetik & Wellness<br />
              Im Pfandwasen 25<br />
              74572 Blaufelden
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Kontakt
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Telefon: 0151 708 36 557<br />
              E-Mail: rasch.kosmetik@gmail.com
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Berufsbezeichnung
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Kosmetikerin & Wellness-Massagetherapeutin<br />
              Verliehen in der Bundesrepublik Deutschland
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Hinweis
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Die angebotenen Wellness-Massagen sind keine Heilbehandlungen im medizinischen Sinne.
              Sie dienen ausschließlich der Entspannung und dem Wohlbefinden.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Haftung für Links
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-handwriting text-3xl text-[#6A0DAD] mb-4">
              Urheberrecht
            </h2>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-[#1A1A1A]/80 font-light leading-relaxed mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
