import React, { useMemo, useState } from "react";

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

const pressReleases: PressRelease[] = [
  {
    id: "pr-001",
    date: "2025-11-28",
    title: "Topaz reports continued margin expansion and strong recurring revenue growth",
    summary:
      "Operational discipline and portfolio quality supported stable cash generation across residential and commercial assets.",
    href: "#",
  },
  {
    id: "pr-002",
    date: "2025-10-12",
    title: "Topaz announces new mixed-use development aligned with Vision 2030 priorities",
    summary:
      "The pipeline remains balanced across pre-sold and income-generating projects, supporting disciplined growth.",
    href: "#",
  },
  {
    id: "pr-003",
    date: "2025-09-05",
    title: "Topaz strengthens governance and reporting controls for capital markets readiness",
    summary:
      "Enhanced IFRS reporting processes and committee structures to meet institutional expectations.",
    href: "#",
  },
];

const jobs: Job[] = [
  {
    id: "job-001",
    title: "Senior Project Manager (Real Estate Development)",
    location: "Riyadh",
    type: "Full-time",
    href: "#",
  },
  {
    id: "job-002",
    title: "Financial Reporting Analyst (IFRS)",
    location: "Jeddah",
    type: "Full-time",
    href: "#",
  },
  {
    id: "job-003",
    title: "Leasing & Asset Management Associate",
    location: "Eastern Province",
    type: "Full-time",
    href: "#",
  },
];

const events: EventItem[] = [
  {
    id: "ev-001",
    date: "2025-12-18",
    title: "Investor Briefing: Portfolio Performance & FY Outlook",
    location: "Riyadh (Hybrid)",
    href: "#",
  },
  {
    id: "ev-002",
    date: "2026-01-22",
    title: "Careers Open Day",
    location: "Jeddah",
    href: "#",
  },
  {
    id: "ev-003",
    date: "2026-02-10",
    title: "Sustainability & ESG Update",
    location: "Online",
    href: "#",
  },
];

function formatISODate(iso: string) {
  const [y, m, d] = iso.split("-").map((x) => parseInt(x, 10));
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
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
function CalendarWidget({ items }: { items: EventItem[] }) {
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
            aria-label="Previous month"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-50"
            aria-label="Next month"
          >
            Next
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
                title={cell.hasEvent ? "Event scheduled" : ""}
              >
                <span className={cn("text-slate-800", isToday && "font-semibold")}>{cell.date.getDate()}</span>
                {cell.hasEvent ? <span className="absolute bottom-1 h-1 w-1 rounded-full bg-slate-900" /> : null}
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-700">Upcoming in {monthLabel}</p>
          <div className="mt-3 space-y-3">
            {selectedMonthEvents.length === 0 ? (
              <p className="text-sm text-slate-600">No events scheduled for this month.</p>
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
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                T
              </div>
              <div>
                <p className="text-sm font-semibold">{COMPANY.name}</p>
                <p className="text-xs text-slate-600">Investor Relations</p>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
              <a className="hover:text-slate-900" href="#heritage">Heritage</a>
              <a className="hover:text-slate-900" href="#future">Future & Investment Case</a>
              <a className="hover:text-slate-900" href="#press">Press</a>
              <a className="hover:text-slate-900" href="#careers">Careers</a>
              <a className="hover:text-slate-900" href="#events">Events</a>
            </nav>

            <div className="flex items-center gap-2">
              <SecondaryButton href="#downloads">Downloads</SecondaryButton>
              <PrimaryButton href="#contact">Contact IR</PrimaryButton>
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
            <div className="mb-7">
              <p className="text-xs font-semibold tracking-wide text-slate-600">Institutional • Data-forward • Capital readiness</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{COMPANY.name} Investor Relations</h1>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
                Evidence-led updates on heritage, performance, and the forward roadmap—structured for institutional review.
              </p>
            </div>

            {/* Three columns */}
            <div className="grid gap-4 lg:grid-cols-3">
              {/* Column 1: Heritage */}
              <Card className="overflow-hidden">
                <div className="grid gap-0 sm:grid-cols-[1.15fr_1fr]">
                  <div className="p-5">
                    <p className="text-xs font-semibold text-slate-600">Heritage</p>
                    <p className="mt-2 text-lg font-semibold">Built on delivery since {COMPANY.founded}</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Founded in {COMPANY.founded}, with <span className="font-semibold text-slate-900">{COMPANY.completedProjects}</span> projects completed to date.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Pill>Founded: {COMPANY.founded}</Pill>
                      <Pill>Completed: {COMPANY.completedProjects}</Pill>
                    </div>
                    <div className="mt-5">
                      <SecondaryButton href="#heritage">Explore heritage</SecondaryButton>
                    </div>
                  </div>

                  {/* Mining a topaz image (placeholder) */}
                  <div className="relative min-h-[180px] bg-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700">
                        Replace with “mining a topaz” image
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Column 2: Buying property link */}
              <Card>
                <div className="p-5">
                  <p className="text-xs font-semibold text-slate-600">Property</p>
                  <p className="mt-2 text-lg font-semibold">Thinking of buying property?</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Browse available assets, learn about locations, and understand the buying process with clear, practical guidance.
                  </p>
                  <div className="mt-4 space-y-2">
                    <a href="#" className="block rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                      <p className="text-sm font-semibold text-slate-900">View available properties</p>
                      <p className="mt-1 text-xs text-slate-600">Listings, brochures, and pricing guidance</p>
                    </a>
                    <a href="#" className="block rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                      <p className="text-sm font-semibold text-slate-900">Buying checklist</p>
                      <p className="mt-1 text-xs text-slate-600">Steps, documents, and timelines</p>
                    </a>
                  </div>
                  <div className="mt-5">
                    <PrimaryButton href="#">Start here</PrimaryButton>
                  </div>
                </div>
              </Card>

              {/* Column 3: Future/Vision link */}
              <Card>
                <div className="p-5">
                  <p className="text-xs font-semibold text-slate-600">Future</p>
                  <p className="mt-2 text-lg font-semibold">Topaz vision & capital readiness</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Our future roadmap is built on disciplined growth, increasing recurring revenue, and IPO-grade governance.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold text-slate-700">Focus areas</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>• Scalable reporting and controls</li>
                        <li>• Portfolio and pipeline aligned with Vision 2030</li>
                        <li>• Disciplined capital allocation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <SecondaryButton href="#future">Read the investment case</SecondaryButton>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick KPI strip under hero */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {[
                { label: "Founded", value: "2008" },
                { label: "Employees", value: "420+" },
                { label: "AUM", value: "SAR 18.5 bn" },
                { label: "Valuation (Internal)", value: "SAR 7.2 bn" },
                { label: "Completed", value: "32" },
                { label: "Under Development", value: "11" },
              ].map((k) => (
                <div key={k.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-medium text-slate-600">{k.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{k.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1 */}
      <section id="heritage" className="py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow="SECTION 1"
            title="Our Heritage & Performance"
            subtitle="Demonstrate credibility, scale, discipline, and consistency. This section anchors investor confidence by combining narrative history with hard performance data."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">1.1 Overview Narrative</p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Building Value Across Saudi Arabia Since 2008</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    Founded in 2008, Topaz has grown from a single-project developer into a fully integrated real estate platform
                    operating across residential, commercial, and mixed-use assets.
                  </p>
                  <p>
                    Over the past decade and a half, the company has delivered landmark developments that align with Saudi Arabia’s
                    urbanization goals, while maintaining strong capital discipline and operational efficiency.
                  </p>
                  <p>
                    Today, Topaz manages a diversified portfolio across multiple cities, serving thousands of residents and commercial
                    tenants, and generating stable recurring revenue supported by high-quality assets.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">1.4 Suggested Images</p>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• High-resolution aerials of completed projects</li>
                  <li>• Before/after development visuals</li>
                  <li>• City skyline shots (Riyadh, Jeddah, Eastern Province)</li>
                  <li>• Construction progress imagery to signal execution capability</li>
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
                      ["Residential Units Delivered", "9,800+"],
                      ["Commercial Units Delivered", "1,450+"],
                      ["Hospitality Keys", "620"],
                      ["Total Built-Up Area Developed", "4.2 million sqm"],
                      ["Total Area Currently Managed", "2.9 million sqm"],
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
                <p className="text-sm font-semibold">1.2 Financial Performance Snapshot</p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-200 px-5 py-3 text-left text-xs font-semibold text-slate-600">KPI</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2021</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2022</th>
                      <th className="border-b border-slate-200 px-5 py-3 text-right text-xs font-semibold text-slate-600">FY2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Revenue (SAR)", "1.1 bn", "1.45 bn", "1.9 bn"],
                      ["EBITDA Margin", "31%", "34%", "36%"],
                      ["Net Profit Margin", "18%", "21%", "23%"],
                      ["Average Project IRR", "–", "–", "17–19%"],
                    ].map(([k, a, b, c]) => (
                      <tr key={k} className="hover:bg-slate-50/60">
                        <td className="border-b border-slate-200 px-5 py-3 text-sm text-slate-800">{k}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm text-slate-800">{a}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm text-slate-800">{b}</td>
                        <td className="border-b border-slate-200 px-5 py-3 text-right text-sm font-semibold text-slate-900">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-5 text-xs text-slate-500">All figures illustrative.</div>
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
                    period: "2008–2012",
                    title: "Foundation Phase",
                    bullets: ["First residential developments", "Privately funded, founder-led capital structure"],
                  },
                  {
                    period: "2013–2017",
                    title: "Expansion Phase",
                    bullets: ["Entry into mixed-use and commercial assets", "Strategic partnerships with local contractors and financiers"],
                  },
                  {
                    period: "2018–2022",
                    title: "Institutionalization",
                    bullets: ["Governance upgrades", "Portfolio diversification", "Recurring revenue introduced"],
                  },
                  {
                    period: "2023–Today",
                    title: "Scale & Capital Readiness",
                    bullets: ["Strong balance sheet", "Pipeline aligned with Vision 2030", "IPO-grade reporting and controls"],
                  },
                ].map((t) => (
                  <Card key={t.period} className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-600">{t.period}</p>
                        <p className="mt-1 text-base font-semibold">{t.title}</p>
                      </div>
                      <Pill>Milestone</Pill>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {t.bullets.map((b) => (
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
        </Container>
      </section>

      {/* SECTION 3 */}
      <section id="future" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow="SECTION 3"
            title="Our Future & Investment Case"
            subtitle="Position the company as a future-listed, institutionally credible platform with strong fundamentals, favorable macro tailwinds, and a disciplined growth strategy."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">3.1 Forward-Looking Narrative</p>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Positioned for Long-Term Growth</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    Topaz is entering its next phase of growth, driven by a strong development pipeline, expanding recurring revenue
                    streams, and structural tailwinds in the Saudi real estate market.
                  </p>
                  <p>
                    With a proven execution track record and increasing operational scale, Topaz is preparing for broader capital
                    market participation.
                  </p>
                  <p>
                    Our strategy is centered on sustainable profitability, disciplined capital allocation, and alignment with national
                    development priorities.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">3.2 Investment Highlights</p>
              </div>
              <div className="p-5">
                <div className="grid gap-3">
                  {[
                    {
                      title: "Why Invest in Topaz",
                      bullets: [],
                    },
                    {
                      title: "Proven Profitability",
                      bullets: ["Consistent revenue growth over multiple cycles", "Strong EBITDA margins relative to peers", "High project-level returns"],
                    },
                    {
                      title: "Diversified Revenue Streams",
                      bullets: ["Residential sales", "Commercial leasing", "Property management income", "Hospitality and mixed-use exposure"],
                    },
                    {
                      title: "Strong Project Pipeline",
                      bullets: ["SAR 12+ billion GDV under development", "Balanced mix of pre-sold and income-generating assets"],
                    },
                    {
                      title: "Experienced Management Team",
                      bullets: ["Local market expertise", "Institutional governance mindset", "Long-term alignment with shareholders"],
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
                <p className="text-sm font-semibold">3.3 Saudi Arabia Macro Tailwinds</p>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-700">Structural Market Drivers</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {[
                    "Vision 2030 Urban Development Programs",
                    "Population Growth & Urbanization",
                    "Housing Supply Gap in Key Cities",
                    "Mortgage Market Expansion",
                    "Foreign Ownership Liberalization",
                    "Government-Backed Financing Programs",
                  ].map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-slate-700">Illustrative Market Context</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      "Saudi real estate market projected CAGR: 6–8%",
                      "Homeownership targets increasing nationally",
                      "Government-led infrastructure spend supporting asset values",
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">3.4 IPO Readiness & Forward Roadmap</p>
              </div>
              <div className="p-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-slate-700">Capital Markets Preparation</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      "IFRS-compliant financial reporting",
                      "Independent board committees",
                      "ESG framework under development",
                      "Scalable ERP and reporting systems",
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700">3–5 Year Strategic Priorities</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    {[
                      "Grow recurring revenue to 45–50% of total revenue",
                      "Expand into two additional Tier-1 cities",
                      "Optimize capital structure ahead of listing",
                      "Selective asset recycling to enhance ROIC",
                    ].map((x) => (
                      <li key={x}>• {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
            For an investor relations audience, both sections should be data-forward, not marketing-heavy; use consistent KPI definitions; allow downloadable fact sheets and presentations; and clearly separate historical facts from forward-looking statements.
          </div>
        </Container>
      </section>

      {/* Press */}
      <section id="press" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <SectionTitle title="Press releases" subtitle="Latest company updates (placeholders)." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {pressReleases.map((pr) => (
              <a key={pr.id} href={pr.href} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-900">{pr.title}</p>
                  <Pill>{formatISODate(pr.date)}</Pill>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pr.summary}</p>
                <p className="mt-4 text-xs font-semibold text-slate-900">Read more</p>
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
                  { title: "Fact sheet (PDF)", meta: "Key KPIs and portfolio snapshot", href: "#" },
                  { title: "Investor presentation", meta: "Quarterly deck", href: "#" },
                  { title: "Financial statements", meta: "IFRS reporting", href: "#" },
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
            <SectionTitle title="Vacant jobs" subtitle="Short list of open roles. Link to the main jobs page for the full list." />
            <PrimaryButton href="#">View all jobs</PrimaryButton>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {jobs.map((j) => (
              <a key={j.id} href={j.href} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:bg-slate-50">
                <p className="text-sm font-semibold text-slate-900">{j.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>{j.location}</Pill>
                  <Pill>{j.type}</Pill>
                </div>
                <p className="mt-4 text-xs font-semibold text-slate-900">Apply</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Events */}
      <section id="events" className="border-t border-slate-200 py-14 sm:py-16">
        <Container>
          <SectionTitle title="Upcoming events" subtitle="Calendar view and a quick list for investor and company events." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CalendarWidget items={events} />
            </div>
            <Card>
              <div className="border-b border-slate-200 p-5">
                <p className="text-sm font-semibold">Event list</p>
              </div>
              <div className="p-5 space-y-3">
                {events.slice().sort((a, b) => a.date.localeCompare(b.date)).map((e) => (
                  <a key={e.id} href={e.href} className="block rounded-xl border border-slate-200 p-3 hover:bg-slate-50">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{e.title}</p>
                        <p className="mt-1 text-xs text-slate-600">{e.location}</p>
                      </div>
                      <Pill>{formatISODate(e.date)}</Pill>
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
              <p className="text-sm font-semibold">Who we are</p>
              <p className="text-sm leading-relaxed text-slate-600">
                Topaz is a real estate platform focused on disciplined delivery, operational efficiency, and long-term value creation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Pill>Data-forward</Pill>
                <Pill>Institutional tone</Pill>
                <Pill>Capital readiness</Pill>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Contact us</p>
              <p className="text-sm text-slate-600">Investor Relations</p>
              <div className="space-y-1 text-sm text-slate-700">
                <p>Email: ir@topaz.example</p>
                <p>Phone: +966 00 000 0000</p>
              </div>
              <div className="pt-2">
                <SecondaryButton href="#">Send a message</SecondaryButton>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Our offices</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  <p className="font-semibold text-slate-900">Riyadh</p>
                  <p className="text-slate-600">Business District (placeholder address)</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Jeddah</p>
                  <p className="text-slate-600">Waterfront (placeholder address)</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">Eastern Province</p>
                  <p className="text-slate-600">Commercial hub (placeholder address)</p>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold">Quick links</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><a className="hover:text-slate-900" href="#heritage">Heritage & Performance</a></li>
                <li><a className="hover:text-slate-900" href="#future">Future & Investment Case</a></li>
                <li><a className="hover:text-slate-900" href="#press">Press releases</a></li>
                <li><a className="hover:text-slate-900" href="#careers">Careers</a></li>
                <li><a className="hover:text-slate-900" href="#events">Events</a></li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="border-t border-slate-200 bg-white">
          <Container>
            <div className="flex flex-col gap-3 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Topaz. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <a className="hover:text-slate-900" href="#">Disclaimers</a>
                <a className="hover:text-slate-900" href="#">Privacy policy</a>
                <a className="hover:text-slate-900" href="#">Terms</a>
                <a className="hover:text-slate-900" href="#">Forward-looking statements</a>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </div>
  );
}




