import React, { useMemo, useState } from "react";
import { Language, useTranslations, getDir, isRTL } from "./i18n";

type PressRelease = {
  id: string;
  date: string; // ISO (YYYY-MM-DD)
  title: string;
  summary: string;
  href: string;
};

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  href: string;
};

type EventItem = {
  id: string;
  date: string; // ISO
  title: string;
  location: string;
  href: string;
};

const COMPANY = {
  name: "Topaz",
  founded: 2003,
  completedProjects: 57,
};

// Moved to component to use translations

// Moved to component to use translations

// Moved to component to use translations

function formatISODate(iso: string, language: Language = 'en') {
  const [y, m, d] = iso.split("-").map((x) => parseInt(x, 10));
  const dt = new Date(Date.UTC(y, m - 1, d));
  
  if (language === 'ar') {
    // Arabic date formatting
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    return `${d} ${months[m - 1]} ${y}`;
  }
  
  return dt.toLocaleDateString('en', { year: "numeric", month: "short", day: "2-digit" });
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white shadow-sm", className)}>{children}</div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-xs font-semibold tracking-wide text-slate-600">{eyebrow}</p> : null}
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-sm leading-relaxed text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      {children}
    </a>
  );
}

/** ---------- Simple Calendar Widget (client-side) ---------- */
function CalendarWidget({ items, t }: { items: EventItem[]; t: any }) {
  const today = new Date();
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = cursor.toLocaleDateString(undefined, { month: "long", year: "numeric" });

  const grid = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const startDay = (first.getDay() + 6) % 7; // Mon=0
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: Array<{ date: Date | null; iso?: string; hasEvent?: boolean }> = [];
    for (let i = 0; i < startDay; i++) cells.push({ date: null });

    for (let day = 1; day <= daysInMonth; day++) {
      const dt = new Date(year, month, day);
      const iso = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
      const hasEvent = items.some((e) => e.date === iso);
      cells.push({ date: dt, iso, hasEvent });
    }

    while (cells.length % 7 !== 0) cells.push({ date: null });
    return cells;
  }, [cursor, items]);

  const selectedMonthEvents = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth() + 1;
    const prefix = `${y}-${String(m).padStart(2, "0")}-`;
    return items.filter((e) => e.date.startsWith(prefix)).sort((a, b) => a.date.localeCompare(b.date));
  }, [cursor, items]);

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <p className="text-sm font-semibold text-slate-900">{monthLabel}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50"
            aria-label={t.prev}
          >
            {t.prev}
          </button>
          <button
            type="button"
            onClick={() => setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50"
            aria-label={t.next}
          >
            {t.next}
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold text-slate-600">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-7 gap-2">
          {grid.map((cell, i) => {
            if (!cell.date) return <div key={i} className="h-9 rounded-lg bg-slate-50" />;
            const isToday =
              cell.date.getFullYear() === today.getFullYear() &&
              cell.date.getMonth() === today.getMonth() &&
              cell.date.getDate() === today.getDate();

            return (
              <div
                key={i}
                className={cn(
                  "relative flex h-9 items-center justify-center rounded-lg border text-xs",
                  isToday ? "border-slate-900" : "border-slate-200",
                  "bg-white"
                )}
                title={cell.hasEvent ? t.eventScheduled : ""}
              >
                <span className={cn("text-slate-800", isToday && "font-semibold")}>{cell.date.getDate()}</span>
                {cell.hasEvent ? <span className="absolute bottom-1 h-1 w-1 rounded-full bg-slate-900" /> : null}
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-700">{t.upcomingIn} {monthLabel}</p>
          <div className="mt-3 space-y-3">
            {selectedMonthEvents.length === 0 ? (
              <p className="text-sm text-slate-600">{t.noEvents}</p>
            ) : (
              selectedMonthEvents.map((e) => (
                <a
                  key={e.id}
                  href={e.href}
                  className="block rounded-xl border border-slate-200 bg-white p-3 hover:bg-slate-50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{e.title}</p>
                      <p className="mt-1 text-xs text-slate-600">{e.location}</p>
                    </div>
                    <Pill>{formatISODate(e.date)}</Pill>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

/** ---------- Main Page ---------- */
export default function TopazIRSite() {
  const [language, setLanguage] = useState<Language>('ar');
  const t = useTranslations(language);
  const isArabic = isRTL(language);
  const fontClass = isArabic ? 'font-arabic' : 'font-latin';

  // Data arrays using translations
  const pressReleases: PressRelease[] = [
    {
      id: "pr-001",
      date: "2025-11-28",
      title: t.pr1Title,
      summary: t.pr1Summary,
      href: "#",
    },
    {
      id: "pr-002",
      date: "2025-10-12",
      title: t.pr2Title,
      summary: t.pr2Summary,
      href: "#",
    },
    {
      id: "pr-003",
      date: "2025-09-05",
      title: t.pr3Title,
      summary: t.pr3Summary,
      href: "#",
    },
  ];

  const jobs: Job[] = [
    {
      id: "job-001",
      title: t.job1,
      location: t.location1,
      type: t.fullTime,
      href: "#",
    },
    {
      id: "job-002",
      title: t.job2,
      location: t.location2,
      type: t.fullTime,
      href: "#",
    },
    {
      id: "job-003",
      title: t.job3,
      location: t.location3,
      type: t.fullTime,
      href: "#",
    },
  ];

  const events: EventItem[] = [
    {
      id: "ev-001",
      date: "2025-12-18",
      title: t.event1,
      location: t.event1Location,
      href: "#",
    },
    {
      id: "ev-002",
      date: "2026-01-22",
      title: t.event2,
      location: t.event2Location,
      href: "#",
    },
    {
      id: "ev-003",
      date: "2026-02-10",
      title: t.event3,
      location: t.event2Location,
      href: "#",
    },
  ];

  return (
    <div 
      className={`min-h-screen bg-white text-slate-900 ${fontClass}`}
      dir={getDir(language)}
      lang={language}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.webp" 
                alt={t.logoAlt}
                className="h-9 w-9 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{COMPANY.name}</p>
                <p className="text-xs text-slate-600">{t.investorRelations}</p>
              </div>
            </a>

            <nav className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
              <a className="transition-all-smooth hover:text-slate-900 hover:border-b-2 hover:border-[var(--topaz-accent)] pb-1" href="#heritage">{t.heritage}</a>
              <a className="transition-all-smooth hover:text-slate-900 hover:border-b-2 hover:border-[var(--topaz-accent)] pb-1" href="#future">{t.investment}</a>
              <a className="transition-all-smooth hover:text-slate-900 hover:border-b-2 hover:border-[var(--topaz-accent)] pb-1" href="#press">{t.pressReleases}</a>
              <a className="transition-all-smooth hover:text-slate-900 hover:border-b-2 hover:border-[var(--topaz-accent)] pb-1" href="#careers">{t.careers}</a>
              <a className="transition-all-smooth hover:text-slate-900 hover:border-b-2 hover:border-[var(--topaz-accent)] pb-1" href="#events">{t.events}</a>
            </nav>

            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded transition-all ${
                    language === 'en' 
                      ? 'bg-[var(--topaz-accent)] text-white' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  EN
                </button>
                <span className="text-slate-400">|</span>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-2 py-1 rounded transition-all ${
                    language === 'ar' 
                      ? 'bg-[var(--topaz-accent)] text-white' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  العربية
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="button-enhanced">
                  <PrimaryButton href="#downloads">{t.downloads}</PrimaryButton>
                </div>
                <div className="button-enhanced">
                  <PrimaryButton href="#contact">{t.contactIR}</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO (full screen up to fold) */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-slate-100 md:block" />

        <Container>
          <div className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center py-10">
            <div className="mb-7 animate-fade-in-up">
              <p className="text-xs font-semibold tracking-wide text-slate-600">{t.heroTagline}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.heroTitle}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                {t.heroDescription}
              </p>
            </div>

            {/* Three columns */}
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Column 1: Heritage */}
              <Card className="card-hover">
                <div>
                  {/* Heritage hero image */}
                  <div className="relative h-32 bg-slate-100 overflow-hidden rounded-t-xl">
                    <img 
                      src="/images/topaz-mining-enhanced.webp"
                      alt={t.miningAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[var(--topaz-accent)]">{t.heroHeritageTitle}</p>
                    <p className="mt-4 text-lg font-bold text-[var(--gray-dark)]">{t.heroHeritageSubtitle}</p>
                    <p className="mt-4 text-sm text-[var(--gray-medium)]">
                      {t.heroHeritageDescription}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Pill>{t.founded}: {COMPANY.founded}</Pill>
                      <Pill>{t.completedProjects}: {COMPANY.completedProjects}</Pill>
                    </div>
                    <div className="mt-6 button-enhanced">
                      <SecondaryButton href="#heritage">{t.learnMore}</SecondaryButton>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Column 2: Buying property link */}
              <Card className="card-hover">
                <div>
                  {/* Property hero image */}
                  <div className="relative h-32 bg-slate-100 overflow-hidden rounded-t-xl">
                    <img 
                      src="/images/hero-property.webp"
                      alt={t.propertyAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[var(--gray-light)]">{t.heroPropertyTitle}</p>
                  <p className="mt-4 text-lg text-[var(--gray-medium)]">{t.heroPropertySubtitle}</p>
                  <p className="mt-4 text-sm text-[var(--gray-light)]">
                    {t.heroPropertyDescription}
                  </p>
                  <div className="mt-6 space-y-2">
                    <a href="#" className="block rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                      <p className="text-sm font-semibold text-slate-900">{t.heroPropertyLink1}</p>
                      <p className="mt-1 text-xs text-slate-600">{t.heroPropertyLink1Desc}</p>
                    </a>
                    <a href="#" className="block rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                      <p className="text-sm font-semibold text-slate-900">{t.heroPropertyLink2}</p>
                      <p className="mt-1 text-xs text-slate-600">{t.heroPropertyLink2Desc}</p>
                    </a>
                  </div>
                  <div className="mt-5">
                    <SecondaryButton href="#">{t.heroPropertyCTA}</SecondaryButton>
                  </div>
                </div>
                </div>
              </Card>

              {/* Column 3: Future/Vision link */}
              <Card className="card-hover">
                <div>
                  {/* Future hero image */}
                  <div className="relative h-32 bg-slate-100 overflow-hidden rounded-t-xl">
                    <img 
                      src="/images/hero-future.webp"
                      alt={t.futureAlt}
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[var(--topaz-accent)]">{t.heroFutureTitle}</p>
                  <p className="mt-4 text-lg font-bold text-[var(--gray-dark)]">{t.heroFutureSubtitle}</p>
                  <p className="mt-4 text-sm text-[var(--gray-medium)]">
                    {t.heroFutureDescription}
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold text-[var(--gray-medium)]">{t.focusAreas}</p>
                      <ul className="mt-4 space-y-1 text-sm text-[var(--gray-medium)]">
                        <li>{t.focusArea1}</li>
                        <li>{t.focusArea2}</li>
                        <li>{t.focusArea3}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <SecondaryButton href="#future">{t.learnMore}</SecondaryButton>
                  </div>
                </div>
                </div>
              </Card>
            </div>

            {/* Quick KPI strip under hero - Enhanced with stagger animation */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {[
                { label: t.founded, value: "2008", featured: false },
                { label: t.employees, value: "420+", featured: false },
                { label: t.aum, value: "SAR 18.5 bn", featured: true },
                { label: t.valuation, value: "SAR 7.2 bn", featured: true },
                { label: t.completed, value: "32", featured: false },
                { label: t.underDevelopment, value: "11", featured: false },
              ].map((k, index) => (
                <div 
                  key={k.label} 
                  className={`rounded-2xl ${k.featured ? 'border-2 border-[var(--topaz-gold)] border-opacity-30 bg-[var(--topaz-gold)]/10' : 'border border-slate-200 bg-white'} p-4 shadow-sm card-hover animate-stagger-reveal`}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <p className={`text-xs font-semibold ${k.featured ? 'text-[var(--topaz-gold-dark)]' : 'text-[var(--gray-medium)]'}`}>{k.label}</p>
                  <p className={`mt-4 text-base ${k.featured ? 'font-bold text-[var(--topaz-gold-dark)]' : 'font-semibold text-[var(--gray-dark)]'}`}>{k.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section id="heritage" className="py-14 sm:py-16">
        <Container>
          <div className="section-title in-view">
            <SectionTitle
              eyebrow={t.section1Eyebrow}
              title={t.section1Title}
              subtitle={t.section1Subtitle}
            />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.overviewTitle}</p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{t.overviewHeading}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    {t.overviewPara1}
                  </p>
                  <p>
                    {t.overviewPara2}
                  </p>
                  <p>
                    {t.overviewPara3}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.regionalTitle}</p>
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <div className="relative w-full h-32 bg-slate-100 rounded-xl overflow-hidden">
                    <img 
                      src="/images/saudi-skyline-hero.webp"
                      alt={t.skylineAlt}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                    <div className="absolute bottom-2 left-2">
                      <p className="text-white text-xs font-semibold">{t.vision2030}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>{t.regionalPoint1}</li>
                  <li>{t.regionalPoint2}</li>
                  <li>{t.regionalPoint3}</li>
                  <li>{t.regionalPoint4}</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="border-b border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold">1.2 Development Footprint</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-200 px-5 py-3 text-left text-xs font-semibold text-slate-600">Metric</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">
                        Value (Example)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [t.residentialUnits, "9,800+"],
                      [t.commercialUnits, "1,450+"],
                      [t.hospitalityKeys, "620"],
                      [t.builtUpArea, "4.2 million sqm"],
                      [t.managedArea, "2.9 million sqm"],
                    ].map(([m, v]) => (
                      <tr key={m} className="hover:bg-slate-50/60">
                        <td className="border-b border-slate-200 px-5 py-3 text-sm text-slate-800">{m}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm font-semibold text-slate-900">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold">{t.financeTitle}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-200 px-5 py-3 text-left text-xs font-semibold text-slate-600">{t.kpi}</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2021</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2022</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [t.revenue, "1.1 bn", "1.45 bn", "1.9 bn"],
                      [t.ebitdaMargin, "31%", "34%", "36%"],
                      [t.netMargin, "18%", "21%", "23%"],
                      [t.avgIRR, "–", "–", "17–19%"],
                    ].map(([k, a, b, c]) => (
                      <tr key={k} className="hover:bg-slate-50/60">
                        <td className="border-b border-slate-200 px-5 py-3 text-sm text-slate-800">{k}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm text-slate-800">{a}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm text-slate-800">{b}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm font-semibold text-[var(--topaz-accent)] bg-[var(--topaz-accent)]/5">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-5 text-xs text-slate-500">{t.figuresNote}</div>
            </Card>
          </div>

          <Card className="mt-4">
            <div className="border-b border-slate-200 p-5">
              <p className="text-sm font-semibold">1.3 Evolution Over Time</p>
            </div>
            <div className="p-5">
              <div className="grid gap-4 lg:grid-cols-2">
                {[
                  {
                    period: t.phase1Period,
                    title: t.phase1Title,
                    bullets: [t.phase1Desc1, t.phase1Desc2],
                  },
                  {
                    period: t.phase2Period,
                    title: t.phase2Title,
                    bullets: [t.phase2Desc1, t.phase2Desc2],
                  },
                  {
                    period: t.phase3Period,
                    title: t.phase3Title,
                    bullets: [t.phase3Desc1, t.phase3Desc2, t.phase3Desc3],
                  },
                  {
                    period: t.phase4Period,
                    title: t.phase4Title,
                    bullets: [t.phase4Desc1, t.phase4Desc2, t.phase4Desc3],
                  },
                ].map((timePhase) => (
                  <Card key={timePhase.period} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-600">{timePhase.period}</p>
                        <p className="mt-1 text-base font-semibold">{timePhase.title}</p>
                      </div>
                      <Pill>{t.milestone}</Pill>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {timePhase.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Saudi Skyline Hero - Full width visual break */}
          <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="relative h-64 bg-slate-100 overflow-hidden rounded-xl">
              <img 
                src="/images/saudi-regional-map.webp"
                alt={t.mapAlt}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-lg font-bold mb-1">{t.regionalPresence}</h3>
                <p className="text-white/90 text-sm">{t.strategicDevelopment}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 */}
      <section id="future" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <div className="section-title in-view">
            <SectionTitle
              eyebrow={t.section3Eyebrow}
              title={t.section3Title}
              subtitle={t.section3Subtitle}
            />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.forwardTitle}</p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{t.forwardHeading}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    {t.forwardPara1}
                  </p>
                  <p>
                    {t.forwardPara2}
                  </p>
                  <p>
                    {t.forwardPara3}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.investmentTitle}</p>
              </div>
              <div className="p-5">
                <div className="grid gap-3">
                  {[
                    {
                      title: t.investmentHeading,
                      bullets: [],
                    },
                    {
                      title: t.highlight1Title,
                      bullets: [t.highlight1Desc1, t.highlight1Desc2, t.highlight1Desc3],
                    },
                    {
                      title: t.highlight2Title,
                      bullets: [t.highlight2Point1, t.highlight2Point2, t.highlight2Point3, t.highlight2Point4],
                    },
                    {
                      title: t.highlight3Title,
                      bullets: [t.highlight3Desc1, t.highlight3Desc2],
                    },
                    {
                      title: t.highlight4Title,
                      bullets: [t.highlight4Desc1, t.highlight4Desc2, t.highlight4Desc3],
                    },
                  ].map((h) => (
                    <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm font-semibold">{h.title}</p>
                      {h.bullets.length ? (
                        <ul className="mt-2 space-y-1 text-sm text-slate-700">
                          {h.bullets.map((b) => (
                            <li key={b}>• {b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.macroTitle}</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-700">{t.macroHeading}</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {[
                    t.macro1,
                    t.macro2,
                    t.macro3,
                    t.macro4,
                    t.macro5,
                    t.macro6,
                  ].map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-700">{t.marketContext}</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      t.marketPoint1,
                      t.marketPoint2,
                      t.marketPoint3,
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.ipoTitle}</p>
              </div>
              <div className="p-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-slate-700">{t.ipoPrep}</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      t.ipoPrep1,
                      t.ipoPrep2,
                      t.ipoPrep3,
                      t.ipoPrep4,
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700">{t.strategicPriorities}</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      t.priority1,
                      t.priority2,
                      t.priority3,
                      t.priority4,
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
            {t.disclaimer}
          </div>
        </Container>
      </section>

      {/* Press */}
      <section id="press" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <SectionTitle title={t.pressReleases} subtitle={t.pressDesc} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {pressReleases.map((pr) => (
              <a key={pr.id} href={pr.href} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-900">{pr.title}</p>
                  <Pill>{formatISODate(pr.date, language)}</Pill>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pr.summary}</p>
                <p className="mt-4 text-xs font-semibold text-slate-900">{t.readMore}</p>
              </a>
            ))}
          </div>

          <div className="mt-6" id="downloads">
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">Downloads</p>
                <p className="mt-1 text-xs text-slate-600">Add fact sheets, presentations, and financial statements here.</p>
              </div>
              <div className="p-5 grid gap-3 sm:grid-cols-3">
                {[
                  { title: t.factSheet, meta: t.factSheetDesc, href: "#" },
                  { title: t.presentation, meta: t.presentationDesc, href: "#" },
                  { title: t.financials, meta: t.financialsDesc, href: "#" },
                ].map((d) => (
                  <a key={d.title} href={d.href} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                    <p className="text-sm font-semibold text-slate-900">{d.title}</p>
                    <p className="mt-1 text-xs text-slate-600">{d.meta}</p>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Careers */}
      <section id="careers" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle title={t.careers} subtitle={t.careersDesc} />
            <SecondaryButton href="#">{t.viewAll}</SecondaryButton>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {jobs.map((j) => (
              <a key={j.id} href={j.href} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50">
                <p className="text-sm font-semibold text-slate-900">{j.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>{j.location}</Pill>
                  <Pill>{j.type}</Pill>
                </div>
                <p className="mt-4 text-xs font-semibold text-slate-900">{t.apply}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section id="events" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <SectionTitle title={t.events} subtitle={t.eventsDesc} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CalendarWidget items={events} t={t} />
            </div>
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">{t.eventList}</p>
              </div>
              <div className="p-5 space-y-3">
                {events.slice().sort((a, b) => a.date.localeCompare(b.date)).map((e) => (
                  <a key={e.id} href={e.href} className="block rounded-xl border border-slate-200 p-3 hover:bg-slate-50">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{e.title}</p>
                        <p className="mt-1 text-xs text-slate-600">{e.location}</p>
                      </div>
                      <Pill>{formatISODate(e.date, language)}</Pill>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <Container>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4" id="contact">
            <div className="space-y-3">
              <p className="text-sm font-semibold">{t.whoWeAre}</p>
              <p className="text-sm leading-relaxed text-slate-600">
                {t.companyDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill>{t.dataForward}</Pill>
                <Pill>{t.institutionalTone}</Pill>
                <Pill>{t.capitalReadiness}</Pill>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">{t.contact}</p>
              <p className="text-sm text-slate-600">{t.investorRelations}</p>
              <div className="space-y-1 text-sm text-slate-700">
                <p>{t.email}</p>
                <p>{t.phone}</p>
              </div>
              <div className="pt-2">
                <SecondaryButton href="#">{t.sendMessage}</SecondaryButton>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">{t.ourOffices}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  <p className="font-semibold text-slate-900">{t.riyadh}</p>
                  <p className="text-slate-600">{t.riyadhAddress}</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">{t.jeddah}</p>
                  <p className="text-slate-600">{t.jeddahAddress}</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">{t.easternProvince}</p>
                  <p className="text-slate-600">{t.easternAddress}</p>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">{t.quickLinks}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><a className="hover:text-slate-900" href="#heritage">{t.section1Title}</a></li>
                <li><a className="hover:text-slate-900" href="#future">{t.section3Title}</a></li>
                <li><a className="hover:text-slate-900" href="#press">{t.pressReleases}</a></li>
                <li><a className="hover:text-slate-900" href="#careers">{t.careers}</a></li>
                <li><a className="hover:text-slate-900" href="#events">{t.events}</a></li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="border-t border-slate-200 bg-white">
          <Container>
            <div className="flex flex-col gap-3 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>{t.copyright}</p>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-slate-900" href="#">{t.disclaimers}</a>
                <a className="hover:text-slate-900" href="#">{t.privacyPolicy}</a>
                <a className="hover:text-slate-900" href="#">{t.terms}</a>
                <a className="hover:text-slate-900" href="#">{t.forwardStatements}</a>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}