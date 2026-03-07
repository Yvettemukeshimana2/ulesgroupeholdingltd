 import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import t1 from "../assets/byimana.jpeg";
import t2 from "../assets/dave.jpeg";
import yv from "../assets/yvette.jpg";
import t4 from "../assets/will.jpeg";

/* ══════════════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════════════ */
const C = {
  ink:    "#0b0f1a",
  ink2:   "#1c2333",
  navy:   "#0f1e3c",
  blue:   "#1a3a6b",
  gold:   "#b8922a",
  goldL:  "#d4a843",
  goldXL: "#f0cc7a",
  cream:  "#faf8f4",
  white:  "#ffffff",
  slate:  "#64748b",
  light:  "#e8edf5",
  line:   "#e2e8f0",
};

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const heroSlides = [
  { name: "Dr. Byimana Jean Bosco",  role: "Managing Director",         img: t1,  label: "Executive Leadership" },
  { name: "David Irakiza Ndayisaba", role: "Chief Technology Officer",  img: t2,  label: "Executive Management" },
  { name: "Yvette Mukeshimana",      role: "Chief Information Officer", img: yv,  label: "Executive Management" },
  { name: "Will",                    role: "IT Specialist",             img: t4,  label: "Core Team" },
];

const values = [
  { icon: "fa-lightbulb-o", title: "Innovation",    text: "Pushing the frontier of engineering and digital solutions." },
  { icon: "fa-handshake-o", title: "Collaboration", text: "Teams built on trust, shared purpose, and mutual growth." },
  { icon: "fa-star",        title: "Excellence",    text: "The highest standard in every project and every interaction." },
  { icon: "fa-shield",      title: "Integrity",     text: "Transparency and honesty with every client and partner." },
];

const departments = [
  { name: "Operations",             icon: "fa-cogs",        lead: "COO",                     color: "#b45309", sub: "Project Mgmt · Procurement · Manufacturing · Admin" },
  { name: "Technology",             icon: "fa-microchip",   lead: "CTO — David Irakiza",     color: "#1a3a6b", sub: "Mechanical Eng · Prototyping · R&D · Testing" },
  { name: "Information Technology", icon: "fa-server",      lead: "CIO — Yvette Mukeshimana",color: "#0e7490", sub: "Software Dev · Systems Admin · Cybersecurity · Support" },
  { name: "Human Resources",        icon: "fa-users",       lead: "HR Manager",              color: "#065f46", sub: "Recruitment · Performance · Training · Culture" },
  { name: "Finance",                icon: "fa-bar-chart",   lead: "Finance Manager / CFO",   color: "#7c2d12", sub: "Budgeting · Accounting · Payroll · Tax Compliance" },
  { name: "Creative & Design",      icon: "fa-paint-brush", lead: "Graphic Designer — Yvan", color: "#6d28d9", sub: "Visual Design · Brand Identity · UI/UX · Marketing" },
];

/* ══════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════ */
const Hero = () => {
  const [idx, setIdx]     = useState(0);
  const [key, setKey]     = useState(0);
  const [paused, setPause]= useState(false);
  const timer             = useRef<any>(null);

  const go = (i: number) => { setIdx(i); setKey(k => k + 1); };

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIdx(i => { const n = (i + 1) % heroSlides.length; setKey(k => k + 1); return n; });
    }, 5000);
    return () => clearInterval(timer.current);
  }, [paused]);

  const s = heroSlides[idx];

  return (
    <div
      style={{ position: "relative", height: "100vh", minHeight: 680, background: C.ink, overflow: "hidden", display: "flex", alignItems: "stretch" }}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* BG geometric pattern */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.04, pointerEvents:"none", zIndex:1 }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Left dark panel — text */}
      <div style={{ position: "relative", zIndex: 10, width: "48%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 6% 0 8%", background: `linear-gradient(105deg, ${C.ink} 0%, ${C.ink} 75%, transparent 100%)` }}>

        {/* Tag line */}
        <div key={`tag-${key}`} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, animation: "fup 0.6s 0.2s both" }}>
          <div style={{ width: 28, height: 1.5, background: C.goldL }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.goldL }}>Ules Group Holding LTD</span>
        </div>

        {/* Big headline */}
        <h1 style={{ margin: "0 0 0", fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(3rem,5.5vw,5.2rem)", fontWeight: 900, lineHeight: 1.02, color: C.white, letterSpacing: "-0.02em" }}>
          The People<br />
          <span style={{ WebkitTextStroke: `1.5px ${C.goldL}`, color: "transparent" }}>Behind</span>
          <br />
          <span style={{ color: C.goldL }}>Our Vision</span>
        </h1>

        <div style={{ width: 48, height: 2, background: `linear-gradient(to right, ${C.gold}, transparent)`, margin: "28px 0" }} />

        {/* Slide member info */}
        <div key={`info-${key}`} style={{ animation: "fup 0.5s 0.35s both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.goldL, flexShrink: 0, animation: "pulse 2s ease infinite" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.goldL }}>{s.label}</span>
          </div>
          <p style={{ margin: "0 0 3px", fontSize: "clamp(1.15rem,2vw,1.45rem)", fontWeight: 700, color: C.white, fontFamily: "'Fraunces', Georgia, serif", letterSpacing: "0.01em" }}>{s.name}</p>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{s.role}</p>
        </div>

        {/* Progress + nav */}
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ width: 160, height: 1.5, background: "rgba(255,255,255,0.12)", borderRadius: 2, overflow: "hidden" }}>
            <div key={`bar-${key}`} style={{ height: "100%", background: `linear-gradient(to right,${C.gold},${C.goldXL})`, animation: "growBar 5s linear both" }} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{ width: i === idx ? 26 : 7, height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0, background: i === idx ? C.goldL : "rgba(255,255,255,0.25)", transition: "all 0.4s ease" }} />
            ))}
            <span style={{ marginLeft: 10, fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'Fraunces'" }}>{String(idx + 1).padStart(2, "0")} — {String(heroSlides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Right — cinematic photo */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div key={`ph-${key}`} style={{ position: "absolute", inset: 0, animation: "slideIn 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 2, background: `linear-gradient(to right, ${C.ink} 0%, transparent 18%)` }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to top, rgba(11,15,26,0.7) 0%, transparent 50%)" }} />
          {s.img
            ? <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", animation: "zoomIn 12s ease forwards" }} />
            : <div style={{ width: "100%", height: "100%", background: C.ink2, display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa fa-user" style={{ fontSize: 120, color: "rgba(255,255,255,0.08)" }} /></div>
          }
        </div>

        {/* Thumbnail row — bottom right */}
        <div style={{ position: "absolute", bottom: 24, right: 24, zIndex: 10, display: "flex", gap: 8 }}>
          {heroSlides.map((sl, i) => (
            <button key={i} onClick={() => go(i)} title={sl.name}
              style={{ width: i === idx ? 56 : 44, height: i === idx ? 56 : 44, borderRadius: "50%", overflow: "hidden", padding: 0, border: i === idx ? `2.5px solid ${C.goldL}` : "2px solid rgba(255,255,255,0.2)", cursor: "pointer", background: "none", flexShrink: 0, transform: i === idx ? "translateY(-5px)" : "none", boxShadow: i === idx ? `0 0 18px ${C.gold}70` : "none", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
              {sl.img
                ? <img src={sl.img} alt={sl.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                : <div style={{ width: "100%", height: "100%", background: C.ink2, display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fa fa-user" style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }} /></div>
              }
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ width: 20, height: 32, borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.25)", display: "flex", justifyContent: "center", paddingTop: 5 }}>
          <div style={{ width: 2, height: 6, background: C.goldL, borderRadius: 2, animation: "scrollDot 1.8s ease infinite" }} />
        </div>
        <span style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   ADVISORY BANNER — full-width horizontal feature
══════════════════════════════════════════════════ */
const AdvisoryBanner = () => {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: C.cream, borderBottom: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "48px 0 0" }}>
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold }}>01 — Strategic Level</span>
          <div style={{ flex: 1, height: 1, background: C.line }} />
        </div>

        <div
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{ display: "flex", alignItems: "stretch", gap: 0, margin: "32px 0 48px", borderRadius: 20, overflow: "hidden", border: `1px solid ${hov ? C.goldL + "60" : C.line}`, boxShadow: hov ? `0 24px 60px rgba(184,146,42,0.15), 0 4px 24px rgba(0,0,0,0.06)` : "0 4px 24px rgba(0,0,0,0.06)", transition: "all 0.4s ease" }}
        >
          {/* Left gold accent strip */}
          <div style={{ width: 5, background: `linear-gradient(to bottom, ${C.gold}, ${C.goldL})`, flexShrink: 0 }} />

          {/* Icon block */}
          <div style={{ width: 140, background: C.navy, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: "40px 20px", flexShrink: 0 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", border: `1.5px solid ${C.goldL}50`, display: "flex", alignItems: "center", justifyContent: "center", background: `${C.gold}18` }}>
              <i className="fa fa-compass" style={{ fontSize: 26, color: C.goldL }} />
            </div>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.goldL, textAlign: "center" }}>Strategic<br />Advisory</span>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, background: C.white, padding: "36px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div style={{ padding: "3px 12px", background: `${C.gold}15`, border: `1px solid ${C.gold}40`, borderRadius: 20, fontSize: 10, fontWeight: 700, color: C.gold, letterSpacing: "0.12em", textTransform: "uppercase" }}>Strategic Level</div>
            </div>
            <h2 style={{ margin: 0, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: 800, color: C.ink, fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.2 }}>Business Mentor &amp; Advisor</h2>
            <p style={{ margin: 0, fontSize: 14.5, color: C.slate, lineHeight: 1.75, maxWidth: 560 }}>
              Provides high-level strategic guidance, long-term vision, and mentorship to the executive team. Supports critical leadership decisions and accelerates the company's growth trajectory.
            </p>
          </div>

          {/* Right responsibilities */}
          <div style={{ width: 280, background: C.cream, padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, borderLeft: `1px solid ${C.line}`, flexShrink: 0 }}>
            <p style={{ margin: "0 0 8px", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold }}>Key Responsibilities</p>
            {["Strategic advice & guidance", "Long-term vision alignment", "Leadership decision support", "Company growth acceleration"].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: C.slate, fontWeight: 500 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   MD FEATURE — large split hero-style
══════════════════════════════════════════════════ */
const MDFeature = () => {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ background: C.white, borderBottom: `1px solid ${C.line}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "48px 0 0" }}>
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold }}>02 — Executive Leadership</span>
          <div style={{ flex: 1, height: 1, background: C.line }} />
        </div>

        <div
          onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
          style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 0, margin: "32px 0 48px", borderRadius: 24, overflow: "hidden", border: `1px solid ${hov ? C.blue + "40" : C.line}`, boxShadow: hov ? "0 32px 80px rgba(15,30,60,0.15), 0 4px 24px rgba(0,0,0,0.06)" : "0 4px 24px rgba(0,0,0,0.06)", transition: "all 0.4s ease" }}
        >
          {/* Photo */}
          <div style={{ position: "relative", background: C.navy, overflow: "hidden" }}>
            <img src={t1} alt="Dr. Byimana Jean Bosco" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transform: hov ? "scale(1.04)" : "scale(1)", transition: "transform 0.7s ease", minHeight: 320 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,15,26,0.65) 0%, transparent 55%)" }} />
            {/* Crown badge */}
            <div style={{ position: "absolute", top: 16, left: 16, width: 40, height: 40, borderRadius: "50%", background: C.gold, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 16px ${C.gold}50` }}>
              <i className="fa fa-crown" style={{ fontSize: 15, color: C.white }} />
            </div>
            {/* Name overlay */}
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
              <p style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 800, color: C.white, fontFamily: "'Fraunces', Georgia, serif" }}>Dr. Byimana Jean Bosco</p>
              <p style={{ margin: 0, fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.goldXL }}>Managing Director</p>
            </div>
          </div>

          {/* Content */}
          <div style={{ background: C.white, padding: "44px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 14px", background: `${C.navy}0e`, borderRadius: 20, border: `1px solid ${C.navy}20`, marginBottom: 16 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.navy }}>Managing Director</span>
              </div>
              <p style={{ margin: 0, fontSize: 15, color: C.slate, lineHeight: 1.8, maxWidth: 520 }}>
                Provides overall leadership and strategic direction for Ules Group Holding LTD. Represents the company externally and supervises all executive departments, ensuring alignment with the company's long-term vision.
              </p>
            </div>

            {/* Responsibilities grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "fa-flag",     label: "Strategic Direction" },
                { icon: "fa-globe",    label: "External Representation" },
                { icon: "fa-sitemap",  label: "Department Oversight" },
                { icon: "fa-line-chart",label: "Company Growth" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 10, background: C.cream, border: `1px solid ${C.line}` }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: `${C.navy}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fa ${r.icon}`} style={{ fontSize: 12, color: C.navy }} />
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: C.ink2 }}>{r.label}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: "flex", gap: 8, paddingTop: 8, borderTop: `1px solid ${C.line}` }}>
              {["fa-envelope", "fa-linkedin", "fa-phone"].map(ic => (
                <a key={ic} href="#" style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.slate, textDecoration: "none", fontSize: 13, transition: "all 0.2s ease" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.navy; el.style.color = C.white; el.style.borderColor = C.navy; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = C.slate; el.style.borderColor = C.line; }}
                ><i className={`fa ${ic}`} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   EXEC CARD (CTO, CIO, COO)
══════════════════════════════════════════════════ */
type ExPerson = { name: string; role: string; img: string; icon: string; color: string; bio: string; responsibilities: string[] };
const ExecCard = ({ p }: { p: ExPerson }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.white, borderRadius: 20, overflow: "hidden", border: `1px solid ${hov ? p.color + "50" : C.line}`, boxShadow: hov ? `0 20px 50px rgba(0,0,0,0.12), 0 0 0 1px ${p.color}20` : "0 2px 16px rgba(0,0,0,0.06)", transform: hov ? "translateY(-6px)" : "none", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)", display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Photo */}
      <div style={{ position: "relative", height: 240, background: p.color + "18", overflow: "hidden", flexShrink: 0 }}>
        {p.img
          ? <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transform: hov ? "scale(1.05)" : "scale(1)", transition: "transform 0.6s ease" }} />
          : <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, background: p.color + "12" }}>
              <div style={{ width: 70, height: 70, borderRadius: "50%", border: `1.5px dashed ${p.color}60`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className={`fa ${p.icon}`} style={{ fontSize: 26, color: p.color + "80" }} />
              </div>
              <span style={{ fontSize: 10, color: p.color + "80", letterSpacing: "0.14em", textTransform: "uppercase" }}>Position Open</span>
            </div>
        }
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,15,26,0.5) 0%, transparent 55%)" }} />
        {/* Role badge */}
        <div style={{ position: "absolute", top: 12, left: 12, padding: "4px 11px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.3)", fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.white }}>{p.role}</div>
        <div style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 12px ${p.color}50` }}>
          <i className={`fa ${p.icon}`} style={{ fontSize: 13, color: C.white }} />
        </div>
        <div style={{ position: "absolute", bottom: 14, left: 14 }}>
          <p style={{ margin: 0, fontSize: 15.5, fontWeight: 800, color: C.white, fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.2 }}>{p.name}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ margin: 0, fontSize: 13, color: C.slate, lineHeight: 1.65 }}>{p.bio}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {p.responsibilities.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: C.slate, fontWeight: 500 }}>{r}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 12, borderTop: `1px solid ${C.line}`, display: "flex", gap: 6 }}>
          {["fa-envelope", "fa-linkedin", "fa-phone"].map(ic => (
            <a key={ic} href="#" style={{ width: 30, height: 30, borderRadius: 8, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.slate, textDecoration: "none", fontSize: 11, transition: "all 0.2s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = p.color; el.style.color = C.white; el.style.borderColor = p.color; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = C.slate; el.style.borderColor = C.line; }}
            ><i className={`fa ${ic}`} /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   SUPPORT CARD (HR / Finance)
══════════════════════════════════════════════════ */
type SuppPerson = { name: string; role: string; dept: string; icon: string; color: string; bio: string; tasks: string[] };
const SupportCard = ({ p }: { p: SuppPerson }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.white, borderRadius: 18, border: `1px solid ${hov ? p.color + "50" : C.line}`, boxShadow: hov ? `0 16px 44px rgba(0,0,0,0.1), 0 0 0 1px ${p.color}20` : "0 2px 16px rgba(0,0,0,0.06)", transform: hov ? "translateY(-5px)" : "none", transition: "all 0.4s ease", display: "flex", flexDirection: "column" }}
    >
      {/* Top color bar + icon */}
      <div style={{ height: 6, background: `linear-gradient(to right, ${p.color}, ${p.color}80)`, borderRadius: "18px 18px 0 0" }} />
      <div style={{ padding: "24px 24px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: p.color + "15", border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <i className={`fa ${p.icon}`} style={{ fontSize: 20, color: p.color }} />
          </div>
          <div>
            <p style={{ margin: "0 0 2px", fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: p.color }}>{p.dept}</p>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: C.ink, fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.2 }}>{p.name}</h3>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: C.slate, fontWeight: 500 }}>{p.role}</p>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: 13, color: C.slate, lineHeight: 1.65 }}>{p.bio}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          {p.tasks.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 10px", borderRadius: 8, background: C.cream, border: `1px solid ${C.line}` }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11.5, color: C.slate, fontWeight: 500, lineHeight: 1.3 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   SPECIALIST CARD (Will, Yvan)
══════════════════════════════════════════════════ */
type SpecPerson = { name: string; role: string; img: string; icon: string; color: string; bio: string };
const SpecCard = ({ p }: { p: SpecPerson }) => {
  const [hov, setHov] = useState(false);
  const initials = p.name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.white, borderRadius: 18, padding: "26px 26px", border: `1px solid ${hov ? p.color + "50" : C.line}`, boxShadow: hov ? `0 16px 44px rgba(0,0,0,0.1)` : "0 2px 16px rgba(0,0,0,0.06)", transform: hov ? "translateY(-5px)" : "none", transition: "all 0.4s ease", display: "flex", gap: 20, alignItems: "flex-start" }}
    >
      {/* Avatar */}
      <div style={{ flexShrink: 0 }}>
        {p.img
          ? <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: `3px solid ${p.color}40`, boxShadow: hov ? `0 0 0 4px ${p.color}18` : "none", transition: "box-shadow 0.3s" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
            </div>
          : <div style={{ width: 80, height: 80, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, fontWeight: 800, color: C.white, fontFamily: "'Fraunces', Georgia, serif", border: `3px solid ${p.color}40` }}>{initials}</div>
        }
      </div>
      {/* Info */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", background: p.color + "12", border: `1px solid ${p.color}30`, borderRadius: 20, marginBottom: 8 }}>
          <i className={`fa ${p.icon}`} style={{ fontSize: 10, color: p.color }} />
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: p.color }}>{p.role}</span>
        </div>
        <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 800, color: C.ink, fontFamily: "'Fraunces', Georgia, serif" }}>{p.name}</h3>
        <p style={{ margin: 0, fontSize: 13, color: C.slate, lineHeight: 1.65 }}>{p.bio}</p>
        <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
          {["fa-envelope", "fa-linkedin"].map(ic => (
            <a key={ic} href="#" style={{ width: 30, height: 30, borderRadius: 8, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.slate, textDecoration: "none", fontSize: 11, transition: "all 0.2s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = p.color; el.style.color = C.white; el.style.borderColor = p.color; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = C.slate; el.style.borderColor = C.line; }}
            ><i className={`fa ${ic}`} /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   SECTION LABEL
══════════════════════════════════════════════════ */
const SLabel = ({ num, tag, title, sub }: { num: string; tag: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: 40 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.3em", textTransform: "uppercase", color: C.gold }}>{num} — {tag}</span>
      <div style={{ flex: 1, height: 1, background: C.line, maxWidth: 80 }} />
    </div>
    <h2 style={{ margin: "0 0 10px", fontSize: "clamp(1.8rem,3.2vw,2.6rem)", fontWeight: 800, color: C.ink, fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.12, letterSpacing: "-0.01em" }}>{title}</h2>
    {sub && <p style={{ margin: 0, fontSize: 14.5, color: C.slate, maxWidth: 520, lineHeight: 1.7 }}>{sub}</p>}
  </div>
);

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
const TeamPage = () => {
  const execTeam: ExPerson[] = [
    { name: "COO", role: "Chief Operations Officer", img: "", icon: "fa-cogs", color: "#b45309",
      bio: "Oversees daily operations, project execution, procurement, manufacturing coordination, and administration across all operational units.",
      responsibilities: ["Project Management", "Procurement & Logistics", "Manufacturing Coordination", "Administration"] },
    { name: "David Irakiza Ndayisaba", role: "Chief Technology Officer", img: t2, icon: "fa-microchip", color: "#1a3a6b",
      bio: "Leads engineering, product development, and innovation across mechanical engineering, prototyping, R&D, and technical validation.",
      responsibilities: ["Mechanical Engineering", "Product Design & Prototyping", "Research & Development", "Technical Validation"] },
    { name: "Yvette Mukeshimana", role: "Chief Information Officer", img: yv, icon: "fa-server", color: "#0e7490",
      bio: "Responsible for digital systems, IT infrastructure, software development, data management, and cybersecurity.",
      responsibilities: ["Software Development", "IT Systems Administration", "Data Management", "Cybersecurity"] },
  ];

  const supportTeam: SuppPerson[] = [
    { name: "HR Manager", role: "Head of Human Resources", dept: "Human Resources", icon: "fa-users", color: "#065f46",
      bio: "Builds and maintains a thriving workforce, overseeing all people operations from recruitment to culture.",
      tasks: ["Recruitment & Onboarding", "Performance Management", "Training & Development", "Workplace Culture & Policy"] },
    { name: "Finance Manager", role: "CFO / Finance Department", dept: "Finance", icon: "fa-bar-chart", color: "#7c2d12",
      bio: "Manages the financial health of the organisation, ensuring compliance, planning, and sustainable growth.",
      tasks: ["Budgeting & Financial Planning", "Accounting & Reporting", "Payroll Management", "Tax Compliance & Auditing"] },
  ];

  const specialists: SpecPerson[] = [
    { name: "Will", role: "IT Specialist", img: t4, icon: "fa-desktop", color: "#0e7490",
      bio: "Builds and maintains robust IT infrastructure, systems administration, and technical support across the organisation." },
    { name: "Yvan", role: "Graphic Designer", img: "", icon: "fa-paint-brush", color: "#6d28d9",
      bio: "Crafts compelling visual identities, brand assets, UI/UX designs, and all marketing materials." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400&family=Sora:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'Sora', sans-serif; margin: 0; background: ${C.cream}; }
        ::selection { background: ${C.gold}30; }

        @keyframes slideIn  { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0% 0 0); } }
        @keyframes zoomIn   { from { transform: scale(1.07); } to { transform: scale(1); } }
        @keyframes fup      { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes growBar  { from { width: 0%; } to { width: 100%; } }
        @keyframes pulse    { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
        @keyframes scrollDot{ 0%,100%{ transform:translateY(0); opacity:1; } 50%{ transform:translateY(7px); opacity:0.3; } }

        .exec-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .supp-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .spec-grid   { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .dept-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .val-grid    { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

        @media (max-width: 1100px) {
          .exec-grid  { grid-template-columns: repeat(2, 1fr); }
          .dept-grid  { grid-template-columns: repeat(2, 1fr); }
          .val-grid   { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 700px) {
          .exec-grid  { grid-template-columns: 1fr; }
          .supp-grid  { grid-template-columns: 1fr; }
          .spec-grid  { grid-template-columns: 1fr; }
          .dept-grid  { grid-template-columns: 1fr; }
          .val-grid   { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div style={{ background: C.cream, fontFamily: "'Sora', sans-serif" }}>

        {/* ── HERO ── */}
        <Hero />

        {/* ── STATS BAR ── */}
        <div style={{ background: C.ink, borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "22px 40px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
            {[["6","Departments"],["10+","Team Members"],["3","C-Suite Officers"],["1","Shared Vision"]].map(([n,l],i)=>(
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {i>0&&<div style={{ width:1, height:32, background:"rgba(255,255,255,0.1)" }} />}
                <div>
                  <p style={{ margin:0, fontSize:"1.6rem", fontWeight:800, color:C.goldL, fontFamily:"'Fraunces'" }}>{n}</p>
                  <p style={{ margin:0, fontSize:10, color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:"0.14em" }}>{l}</p>
                </div>
              </div>
            ))}
            <p style={{ marginLeft:"auto", fontSize:13, color:"rgba(255,255,255,0.4)", maxWidth:320, lineHeight:1.7 }}>
              A professional, lean structure designed for agility, accountability and sustainable growth.
            </p>
          </div>
        </div>

        {/* ── 01 STRATEGIC ADVISOR ── */}
        <AdvisoryBanner />

        {/* ── 02 MANAGING DIRECTOR ── */}
        <MDFeature />

        {/* ── 03 EXECUTIVE MANAGEMENT ── */}
        <div style={{ background: C.cream, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
            <SLabel num="03" tag="Executive Management" title="The Executive Team" sub="Three C-suite officers driving operations, technology, and digital transformation." />
            <div className="exec-grid">
              {execTeam.map((p, i) => <ExecCard key={i} p={p} />)}
            </div>
          </div>
        </div>

        {/* ── 04 CORPORATE SUPPORT ── */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
            <SLabel num="04" tag="Corporate Support" title="HR &amp; Finance" sub="Essential functions that keep the organisation compliant, financially healthy, and people-focused." />
            <div className="supp-grid">
              {supportTeam.map((p, i) => <SupportCard key={i} p={p} />)}
            </div>
            {/* Early-stage note */}
            <div style={{ marginTop: 24, display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", background: `${C.gold}08`, border: `1px solid ${C.gold}25`, borderRadius: 12 }}>
              <i className="fa fa-info-circle" style={{ color: C.gold, fontSize: 15, marginTop: 1, flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: 13, color: C.slate, lineHeight: 1.7 }}>
          
              </p>
            </div>
          </div>
        </div>

        {/* ── 05 CORE SPECIALISTS ── */}
        <div style={{ background: C.cream, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
            <SLabel num="05" tag="Core Specialists" title="Key Specialists" sub="The hands-on experts powering IT systems and brand creativity every day." />
            <div className="spec-grid" style={{ maxWidth: 860 }}>
              {specialists.map((p, i) => <SpecCard key={i} p={p} />)}
            </div>
          </div>
        </div>

        {/* ── DEPARTMENTS ── */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
            <SLabel num="06" tag="Organisation" title="Departments &amp; Divisions" sub="Six specialised units working in sync to deliver results across every function." />
            <div className="dept-grid">
              {departments.map((d, i) => {
                const [,] = [useState(false), useState(false)];
                return (
                  <DeptMini key={i} d={d} />
                );
              })}
            </div>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div style={{ background: C.cream, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
            <SLabel num="07" tag="Culture" title="What We Stand For" />
            <div className="val-grid">
              {values.map((v, i) => <ValMini key={i} v={v} i={i} />)}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: C.navy, padding: "88px 40px", position: "relative", overflow: "hidden" }}>
          {[{ t:-120,r:-120,s:480 },{ b:-80,l:-80,s:320 }].map(({s,...pos},i)=>(
            <div key={i} style={{ position:"absolute",...(pos as any),width:s,height:s,borderRadius:"50%",border:`1px solid ${C.goldL}10` }} />
          ))}
          <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: 40, height: 1, background: C.goldL, margin: "0 auto 24px" }} />
            <h2 style={{ margin: "0 0 14px", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: C.white, fontFamily: "'Fraunces', Georgia, serif" }}>Join Our Team</h2>
            <p style={{ margin: "0 0 36px", fontSize: 14.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>We're always looking for exceptional talent to grow with Ules Group Holding LTD.</p>
            <button
              style={{ padding: "13px 44px", background: "transparent", color: C.goldL, border: `1.5px solid ${C.goldL}`, borderRadius: 8, fontWeight: 600, fontSize: 12.5, cursor: "pointer", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Sora', sans-serif", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.goldL; el.style.color = C.navy; el.style.boxShadow = `0 0 40px ${C.gold}60`; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = C.goldL; el.style.boxShadow = "none"; }}
            >Explore Opportunities</button>
          </div>
        </div>
      </div>
    </>
  );
};

/* ══════════════════════════════════════════════════
   DEPT MINI
══════════════════════════════════════════════════ */
const DeptMini = ({ d }: { d: typeof departments[0] }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.cream, borderRadius: 16, padding: "22px 20px", border: `1px solid ${hov ? d.color + "50" : C.line}`, boxShadow: hov ? `0 12px 32px rgba(0,0,0,0.09)` : "0 2px 12px rgba(0,0,0,0.04)", transform: hov ? "translateY(-4px)" : "none", transition: "all 0.35s ease", display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: d.color + "15", border: `1px solid ${d.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <i className={`fa ${d.icon}`} style={{ color: d.color, fontSize: 17 }} />
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: C.ink, fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.2 }}>{d.name}</h3>
          <p style={{ margin: 0, fontSize: 10.5, color: C.slate, marginTop: 2 }}>Lead: {d.lead}</p>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 11.5, color: C.slate, lineHeight: 1.6 }}>{d.sub}</p>
    </div>
  );
};

/* ══════════════════════════════════════════════════
   VALUE MINI
══════════════════════════════════════════════════ */
const ValMini = ({ v, i }: { v: typeof values[0]; i: number }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: C.white, borderRadius: 16, padding: "28px 24px", border: `1px solid ${hov ? C.gold + "50" : C.line}`, boxShadow: hov ? `0 12px 36px rgba(184,146,42,0.12)` : "0 2px 12px rgba(0,0,0,0.05)", transform: hov ? "translateY(-5px)" : "none", transition: "all 0.35s ease", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: -16, right: -16, width: 72, height: 72, borderRadius: "50%", background: `${C.gold}06`, border: `1px solid ${C.gold}10` }} />
      <div style={{ width: 46, height: 46, borderRadius: 13, background: `${C.gold}12`, border: `1px solid ${C.gold}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, transform: hov ? "rotate(-5deg)" : "none", transition: "transform 0.3s ease" }}>
        <i className={`fa ${v.icon}`} style={{ color: C.gold, fontSize: 18 }} />
      </div>
      <span style={{ fontSize: 9, fontWeight: 800, color: `${C.gold}90`, letterSpacing: "0.22em", textTransform: "uppercase" }}>0{i + 1}</span>
      <h3 style={{ margin: "5px 0 8px", fontSize: 18, fontWeight: 800, color: C.ink, fontFamily: "'Fraunces', Georgia, serif" }}>{v.title}</h3>
      <p style={{ margin: 0, fontSize: 12.5, color: C.slate, lineHeight: 1.65 }}>{v.text}</p>
    </div>
  );
};

export default TeamPage;