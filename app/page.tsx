"use client";
import { useEffect, useRef, useState } from "react";
import BeefCutsHero from "../components/ui/BeefCutsHero";
import BeefCutsHeroCentered from "../components/ui/BeefCutsHeroCentered";
import VanishText from "../components/ui/VanishText";
import Navbar from "../components/ui/Navbar";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal, .genie");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const ref = useReveal();

  return (
    <div ref={ref} className="min-h-screen bg-[#FAF6EF] font-[var(--font-sans)] text-[#241B16] overflow-x-hidden">
      <Navbar />
      


      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 1          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#241B16] text-[#FAF6EF] text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 1 (Split Layout)
      </div> */}

      {/* <BeefCutsHero /> */}

      {/* ========================================= */}
      {/* PRESENTATION BANNER FOR OPTION 2          */}
      {/* ========================================= */}
      {/* <div className="w-full bg-[#8A1538] text-white text-center py-2 text-[10px] tracking-[0.3em] uppercase font-bold relative z-20">
        Presentation: Hero Option 2 (Centered Layout)
      </div> */}

      {/* Hero + philosophy share ONE continuous pasture field that runs down to the marquee */}
      <div className="relative">
        {/* shared pasture background */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/cow-bg-hero.png"
            alt=""
            draggable={false}
            className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom opacity-80"
          />
          {/* warm golden wash — echoes the desert gold of the Saqr emblem */}
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-[#C9A24B]/40 via-[#D8B45E]/25 to-[#A98233]/35"
          />
          {/* extra gold tint, multiplied for a sun-warmed paddock tone */}
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-transparent via-[#E7D2A0]/15 to-[#C9A24B]/15"
          />
          {/* Fade the top into the cream so the nav + title stay clean */}
          <div className="absolute inset-x-0 top-0 h-[26rem] bg-gradient-to-b from-[#FAF6EF] via-[#FAF6EF]/60 to-transparent" />
          {/* Soften the bottom edge back to cream before the marquee */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF6EF] to-transparent" />
        </div>

        <BeefCutsHeroCentered />

        {/* ========================================= */}
        {/* ORIGINAL HOMEPAGE CONTENT                 */}
        {/* ========================================= */}

        {/* ABOUT · PHILOSOPHY CTA — quote banner with overhanging cleaver */}
        <section id="philosophy" className="mx-auto max-w-5xl px-6 py-20 sm:py-24 relative z-10 scroll-mt-24">
        <div className="reveal relative">
          {/* dark banner */}
          <div className="relative overflow-hidden rounded-xl bg-[#241B16] text-[#FAF6EF] px-8 py-12 sm:px-14 sm:py-14 shadow-[0_24px_50px_-24px_rgba(36,27,22,0.5)] ring-1 ring-white/[0.06]">
            {/* warm navy glow for depth */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 0% 50%, rgba(138,21,56,0.12), transparent 60%)" }}
            />
            <div className="relative flex flex-col items-center text-center">
              {/* top — eyebrow + quote, centered */}
              <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A24B]">
                <span className="h-px w-8 bg-[#C9A24B]/60" />
                The Saqr Promise · وعد صقر
                <span className="h-px w-8 bg-[#C9A24B]/60" />
              </span>

              {/* italic serif quote — the Saqr point of difference */}
              <p className="mt-6 max-w-3xl font-[var(--font-serif)] italic text-2xl leading-snug text-[#FAF6EF] sm:text-[2rem] sm:leading-snug">
                One standard, one promise — from trusted farms to your table,{" "}
                <span className="not-italic text-[#C9A24B]">every cut is certified Halal.</span>
              </p>

              {/* divider */}
              <span className="mt-9 h-px w-16 bg-white/15" />

              {/* below — supporting copy in two columns */}
              <div className="mt-9 grid max-w-3xl gap-8 text-[15px] leading-relaxed text-[#FAF6EF]/75 sm:grid-cols-2 sm:text-left">
                <p>
                  Saqr brings Qatar a new standard in premium meat — 100% Halal-certified
                  beef and lamb, sourced from trusted farms and slaughtered strictly to
                  Zabiha rites, then butchered by master craftsmen here in Doha.
                </p>
                <p>
                  Owning every link — from sourcing and Halal slaughter to butchery,
                  cold-chain handling and same-day delivery — is how we hold a single
                  standard, and serve homes, hotels and restaurants the meat we would
                  set on our own table.
                </p>
              </div>
            </div>
          </div>

          {/* hand-drawn knife straddling the top edge — gently floats up and down */}
          <img
            src="/images/cleaver.png"
            alt="Hand-drawn knife"
            loading="lazy"
            className="knife-bob pointer-events-none absolute -top-24 right-2 w-40 select-none drop-shadow-[0_16px_22px_rgba(0,0,0,0.4)] sm:-top-28 sm:right-8 sm:w-48 lg:-top-32 lg:w-56"
          />
        </div>
      </section>
      </div>

      {/* ABOUT THE COMPANY */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 z-10 scroll-mt-24">
        <div className="absolute left-0 top-4 font-[var(--font-display)] text-[120px] sm:text-[200px] lg:text-[280px] leading-none tracking-tighter font-bold text-[#8A1538]/[0.06] pointer-events-none select-none">
          SAQR
        </div>
        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* LEFT — about copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A1538]">
              <span className="h-px w-6 bg-[#8A1538]/60" />
              Who We Are
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              <VanishText>
                Qatar&apos;s premium <span className="text-[#8A1538]">Halal beef &amp; lamb</span>, source to table
              </VanishText>
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                <span className="font-semibold text-[#241B16]">Saqr</span> (صقر) is a Qatari premium meat house dedicated to the best-practice supply of 100% Halal-certified beef and lamb to homes, hotels and restaurants across Qatar.
              </p>
              <p>
                From careful sourcing and strict Zabiha slaughter to expert butchery, cold-chain handling and delivery to your door, every step is held to a single, uncompromising standard.
              </p>
            </div>

            <a
              href="#contact"
              className="group relative mt-9 inline-flex items-center overflow-hidden border border-[#8A1538] px-7 py-3 text-[11px] font-bold uppercase tracking-widest text-[#8A1538] transition-colors hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#8A1538] transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Get in touch</span>
            </a>
          </div>

          {/* RIGHT — black angus cattle, framed in a photographic medallion */}
          <div className="relative flex items-center justify-center py-6">
            {/* soft radial backdrop for depth */}
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, #F1E9DA 0%, #F1E9DA 55%, transparent 72%)" }}
            />

            {/* circular photo medallion */}
            <div className="genie relative z-10 aspect-square w-[84%] overflow-hidden rounded-full shadow-2xl ring-1 ring-[#241B16]/10">
              <img
                src="/images/angus-cattle.jpg"
                alt="Premium Angus cattle on open pasture"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* warm inner vignette to match the editorial palette */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_70px_rgba(36,27,22,0.4)]" />
              {/* thin inner ring */}
              <div className="pointer-events-none absolute inset-[6px] rounded-full border border-white/25" />
            </div>

            {/* caption badge */}
            <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#8A1538] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              100% Halal
            </span>
          </div>
        </div>

        {/* paddock-to-plate capability chain — full width, single row */}
        <div className="reveal mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {["Trusted Farms", "Halal Slaughter", "Expert Butchery", "Cold Chain", "Doha Delivery"].map((step, i) => (
            <div key={step} className="flex shrink-0 items-center gap-3">
              {i > 0 && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A1538" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              )}
              <span className="whitespace-nowrap rounded-full border border-gray-300/80 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#241B16]">
                {step}
              </span>
            </div>
          ))}
        </div>

        <Divider />
      </section>

      {/* HALAL ASSURANCE */}
      <section id="halal" className="relative z-10 scroll-mt-24 overflow-hidden bg-[#FAF6EF]">
        {/* faint gold + maroon motif backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, #8A1538 0, transparent 38%), radial-gradient(circle at 86% 72%, #C9A24B 0, transparent 42%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT — certification seal */}
          <div className="reveal flex flex-col items-center">
            <img
              src="/images/halal-seal.svg"
              alt="Saqr — Certified Halal, Zabiha slaughtered"
              loading="lazy"
              className="float-slow w-56 sm:w-64 lg:w-72 drop-shadow-[0_24px_40px_-20px_rgba(138,21,56,0.5)]"
            />
            <span className="mt-6 font-[var(--font-serif)] text-2xl text-[#8A1538]">حلال ١٠٠٪</span>
          </div>

          {/* RIGHT — copy + assurance grid */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A1538]">
              <span className="h-px w-6 bg-[#8A1538]/60" />
              Halal Assurance · ضمان حلال
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              <VanishText>
                Certified Halal, <span className="text-[#8A1538]">Without Compromise</span>
              </VanishText>
            </h3>
            <p className="max-w-xl font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              Every animal is hand-slaughtered to strict Zabiha rites — facing the Qiblah, with the name of Allah pronounced — under qualified Islamic supervision. Nothing leaves our butchery without full Halal assurance. It is the first promise of the Saqr name, never an afterthought.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Zabiha Slaughter", d: "Hand-slaughtered to Islamic rites — no compromise, no shortcuts." },
                { t: "Qualified Supervision", d: "Overseen and certified by a recognised Halal authority." },
                { t: "Full Traceability", d: "Every cut traceable from the source farm to your order." },
                { t: "Unbroken Cold Chain", d: "Chilled handling end-to-end for guaranteed freshness." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-3.5 rounded-xl border border-[#8A1538]/12 bg-white/70 px-5 py-4">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#8A1538]/10 text-[#8A1538]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-[var(--font-display)] text-sm font-bold uppercase tracking-[0.08em] text-[#241B16]">{f.t}</div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-gray-600">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARBLING — editorial band that begins at the middle of the steak photo */}
      <section id="quality" className="relative overflow-hidden text-white py-20 sm:py-24 z-10 scroll-mt-0">
        <div className="relative mx-auto max-w-4xl px-6">
          {/* TOP — framed steak photo: top half over the cream above, bottom half over the dark band */}
          {/* Wrapper stays static so the dark band never animates */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* DARK BAND — full-bleed, anchored to start at the photo's vertical middle (clipped to the section) */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[300vh] w-screen -translate-x-1/2 bg-[#16100C]"
            >
              {/* soft navy glow for depth */}
              <div
                className="absolute inset-x-0 top-0 h-[700px]"
                style={{ background: "radial-gradient(circle at 75% 12%, rgba(138,21,56,0.12), transparent 55%)" }}
              />
            </div>
            {/* framed image — only this animates in (clean fade-up), band stays steady */}
            <div className="reveal relative z-10 border border-white/15 bg-[#16100C] p-2.5 shadow-2xl">
              <img
                src="/images/steak-board.jpg"
                alt="Premium marbled steak on a board"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT — centered in the band */}
          <div className="reveal relative mx-auto mt-16 max-w-2xl text-center">
            {/* segmented editorial divider — centered */}
            <div className="mb-7 flex items-center justify-center gap-2.5 text-white/30">
              <span className="h-px w-12 bg-current" />
              <span className="h-1 w-1 rotate-45 bg-current" />
              <span className="h-px w-5 bg-current" />
              <span className="h-1 w-1 rotate-45 bg-current" />
              <span className="h-px w-12 bg-current" />
            </div>

            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-light uppercase leading-[1.15] tracking-[0.12em] text-white/85">
              <VanishText>
                Marbling &amp; Halal,
                <span className="mt-1 block">Graded for Quality</span>
              </VanishText>
            </h3>

            <div className="mt-7 space-y-4 font-[var(--font-serif)] text-[13px] leading-relaxed text-white/45">
              <p>
                Marbling, the even distribution of fat within the muscle, is the principal indicator of beef quality and the key to its flavour and aroma. Every Saqr carcass is hand-assessed for <span className="font-semibold text-white/75">marble score</span> and selected against strict <span className="font-semibold text-white/75">premium-grade standards</span>, so eating quality is measured, not assumed.
              </p>
              <p>
                That consistency is no accident. Saqr is <span className="font-semibold text-white/75">100% Halal-certified</span>, with control of the links that matter most — from trusted sourcing and Zabiha slaughter through expert butchery, retail packing and cold-chain delivery across Qatar.
              </p>
              <p>
                Controlling each step, from <span className="font-semibold text-white/75">source to table</span>, is how we guarantee the provenance, the Halal integrity and the grading behind every cut. It&apos;s the discipline that makes Saqr a name Qatar can trust for premium meat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEED & FINISHING */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 z-10">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* LEFT — grain-fed cattle, framed in a photographic medallion */}
          <div className="relative flex items-center justify-center py-6">
            {/* soft backdrop disc for depth */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F1E9DA]" />

            {/* circular photo medallion */}
            <div className="genie relative z-10 aspect-square w-[84%] overflow-hidden rounded-full shadow-2xl ring-1 ring-[#241B16]/10">
              <img
                src="/images/feedlot-cattle.jpg"
                alt="Premium grain-finished cattle from a trusted Saqr partner farm"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              {/* warm inner vignette to match the editorial palette */}
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_70px_rgba(36,27,22,0.4)]" />
              {/* thin inner ring */}
              <div className="pointer-events-none absolute inset-[6px] rounded-full border border-white/25" />
            </div>

            {/* caption badge */}
            <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#8A1538] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              Grain-Finished
            </span>
          </div>

          {/* RIGHT — copy */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A1538]">
              <span className="h-px w-6 bg-[#8A1538]/60" />
              Sourcing &amp; Provenance
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase tracking-wide leading-[1.1] mb-6">
              <VanishText>
                Pasture Raised, <span className="text-[#8A1538]">Carefully Sourced</span>
              </VanishText>
            </h3>
            <div className="max-w-xl space-y-4 font-[var(--font-serif)] text-[14px] leading-relaxed text-gray-600">
              <p>
                Our cattle and lambs are raised by trusted partner farms on open, natural pasture, then grain-finished to develop rich, even marbling. We select only the animals that meet our standard before they ever carry the Saqr name.
              </p>
              <p>
                Every animal is then slaughtered strictly to Zabiha Halal rites under qualified supervision, and handled on an unbroken cold chain to lock in freshness. From farm to your door, the provenance, Halal integrity and quality behind each cut stay under our control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="relative z-10 overflow-hidden bg-[#241B16] text-[#FAF6EF] scroll-mt-0">
        {/* subtle navy glow for depth */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 85% 10%, rgba(138,21,56,0.12), transparent 55%)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* LEFT — intro + details + socials */}
          <div className="reveal">
            <span className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A24B]">
              <span className="h-px w-6 bg-[#C9A24B]/60" />
              Get in Touch
            </span>
            <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-bold uppercase leading-[1.1] tracking-wide">
              <VanishText>
                Let&apos;s Work <span className="text-[#C9A24B]">Together</span>
              </VanishText>
            </h3>
            <p className="mt-5 max-w-md font-[var(--font-serif)] text-[14px] leading-relaxed text-[#FAF6EF]/65">
              Whether you&apos;re a home customer, a hotel or restaurant buyer, a retail partner or wholesale client, our team would be glad to hear from you. Message us on WhatsApp, reach us directly, or send a note and we&apos;ll reply within one business day.
            </p>

            {/* contact detail cards */}
            <div className="mt-8 space-y-3">
              {[
                { label: "Showroom & Butchery", value: "Salwa Road, Doha\nState of Qatar", icon: <MapPinIcon /> },
                { label: "WhatsApp & Phone", value: "+974 4000 1234", href: "https://wa.me/97440001234", icon: <PhoneIcon /> },
                { label: "Email", value: "enquiries@saqr.qa", href: "mailto:enquiries@saqr.qa", icon: <MailIcon /> },
                { label: "Business Hours", value: "Sun–Thu · 8:00–20:00 AST", icon: <ClockIcon /> },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-[#C9A24B]/40">
                  <span className="mt-0.5 shrink-0 text-[#C9A24B]">{c.icon}</span>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FAF6EF]/45">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block whitespace-pre-line font-[var(--font-display)] text-base leading-snug text-[#FAF6EF] transition-colors hover:text-[#C9A24B]">
                        {c.value}
                      </a>
                    ) : (
                      <div className="mt-1 whitespace-pre-line font-[var(--font-display)] text-base leading-snug text-[#FAF6EF]">
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* socials */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FAF6EF]/45">Follow</span>
              <div className="flex items-center gap-3">
                {[
                  { label: "Instagram", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
                  { label: "Facebook", href: "#", path: <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" /> },
                  { label: "LinkedIn", href: "#", path: <><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" /></> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[#FAF6EF]/70 transition-colors hover:border-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#1A130F]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {s.path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto mt-12 flex max-w-md items-center gap-3 text-[#8A1538]/70 reveal">
      <div className="flex-1 h-px bg-gray-200" />
      <svg width="40" height="10" viewBox="0 0 40 10" fill="none" className="text-[#8A1538]">
        <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" stroke="currentColor" fill="none" />
      </svg>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function CountUp({ to, suffix = "", duration = 1500 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const email = String(f.get("email") || "");
    const company = String(f.get("company") || "");
    const type = String(f.get("type") || "General Enquiry");
    const message = String(f.get("message") || "");
    const subject = `${type} — ${name || "Website Enquiry"}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nEnquiry: ${type}\n\n${message}`;
    window.location.href = `mailto:enquiries@saqr.qa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#FAF6EF] placeholder:text-[#FAF6EF]/35 outline-none transition focus:border-[#C9A24B]/60 focus:ring-2 focus:ring-[#C9A24B]/20";
  const label = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FAF6EF]/45";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
      <h4 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-wide text-[#FAF6EF]">Send us a message</h4>
      <p className="mt-1.5 font-[var(--font-serif)] text-[13px] italic text-[#FAF6EF]/55">
        We typically reply within one business day.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className={label} htmlFor="cf-name">Full Name</label>
          <input id="cf-name" name="name" required placeholder="Jane Smith" className={field} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" required placeholder="jane@company.com" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="cf-company">Company <span className="text-[#FAF6EF]/25">(optional)</span></label>
            <input id="cf-company" name="company" placeholder="Company name" className={field} />
          </div>
        </div>
        <div>
          <label className={label} htmlFor="cf-type">Enquiry Type</label>
          <select id="cf-type" name="type" className={field + " appearance-none"} defaultValue="General Enquiry">
            <option className="bg-[#241B16]">General Enquiry</option>
            <option className="bg-[#241B16]">Home Delivery</option>
            <option className="bg-[#241B16]">Hotels &amp; Restaurants (HORECA)</option>
            <option className="bg-[#241B16]">Retail &amp; Wholesale</option>
            <option className="bg-[#241B16]">Halal &amp; Certification</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" required rows={4} placeholder="Tell us how we can help…" className={field + " resize-none"} />
        </div>
      </div>

      <button
        type="submit"
        className="group relative mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-md bg-[#8A1538] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-95"
      >
        <span className="relative flex items-center gap-2">
          Send Message
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </button>

      {sent && (
        <p className="mt-4 text-center text-[12px] font-medium text-[#FAF6EF]/70">
          Thanks! Your email draft is ready to send. We&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* Navbar now lives in components/ui/Navbar.tsx so it can be reused on
   the cut-detail pages as well. */
