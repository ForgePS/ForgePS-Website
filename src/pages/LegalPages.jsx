import { content } from "../data/loadContent.js";

function LegalPage({ page }) {
  const { legal } = content;

  return (
    <div className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-2">{page.title}</h1>
        <p className="text-sm text-[#64748B] mb-10">{legal.lastUpdatedLabel} {legal.lastUpdated}</p>
        <div className="space-y-8 text-[#94A3B8] leading-relaxed">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-white mb-3">{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return <LegalPage page={content.legal.privacy} />;
}

export function TermsPage() {
  return <LegalPage page={content.legal.terms} />;
}

export function SecurityPage() {
  return <LegalPage page={content.legal.security} />;
}
