 import "font-awesome/css/font-awesome.min.css";
import { useState, useEffect, useRef } from "react";
import t1 from "../assets/byimana.jpeg";
import t2 from "../assets/dave.jpeg";
import yv from "../assets/yvette.jpg";
import t4 from "../assets/will.jpeg";
// import yvan from "../assets/yvan.jpeg";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const heroSlides = [
  { name: "Dr. Byimana Jean Bosco", position: "Managing Director",    image: t1,   color: "#0a1628" },
  { name: "David Irakiza Ndayisaba", position: "Chief Engineer Officer", image: t2, color: "#1a3a6b" },
  { name: "Yvette Mukeshimana",      position: "Chief IT Officer",     image: yv,   color: "#1e3a5f" },
  { name: "Will",                    position: "IT Specialist",        image: t4,   color: "#0e7490" },
  { name: "Yvan",                    position: "Graphic Designer",     image: "", color: "#4c1d95" },
];

const executives = [
  { name: "Dr. Byimana Jean Bosco",  position: "Managing Director",      image: t1,   bio: "Strategic leadership and company vision",           icon: "fa-crown",       accent: "#0a1628", linkedin: "#", email: "#" },
  { name: "David Irakiza Ndayisaba", position: "Chief Engineer Officer",  image: t2,   bio: "Engineering & Innovation",                         icon: "fa-cog",         accent: "#1a3a6b", linkedin: "#", email: "#" },
  { name: "Yvette Mukeshimana",      position: "Chief IT Officer",        image: yv,   bio: "IT Systems & Infrastructure",                      icon: "fa-server",      accent: "#374151", linkedin: "#", email: "#" },
];

const coreTeam = [
  { name: "Will",  position: "IT Specialist",   image: t4,   bio: "Building & maintaining robust IT infrastructure and digital systems",      icon: "fa-desktop",     accent: "#0e7490", linkedin: "#", email: "#" },
  { name: "Yvan",  position: "Graphic Designer", image: "", bio: "Crafting compelling visual identities and creative design solutions",      icon: "fa-paint-brush", accent: "#6d28d9", linkedin: "#", email: "#" },
];

const departments = [
  { title: "Technology & Engineering", icon: "fa-microchip",   members: [{ name: "Dr. Byimana Jean Bosco", role: "Managing Director", image: t1 }, { name: "David Irakiza Ndayisaba", role: "Chief Engineer Officer", image: t2 }], roles: ["Mechanical Engineers", "Product Designers", "R&D Engineers", "Fabrication Team"], accent: "#1a3a6b" },
  { title: "IT & Digital",             icon: "fa-laptop",      members: [{ name: "Yvette Mukeshimana", role: "Chief IT Officer", image: yv }, { name: "Will", role: "IT Specialist", image: t4 }],                                   roles: ["Software Developers", "Systems Admin", "IT Support", "Data Management"],         accent: "#0e7490" },
  { title: "Creative & Design",        icon: "fa-paint-brush", members: [{ name: "Yvan", role: "Graphic Designer", image: "" }],                                                                                                      roles: ["Visual Design", "Brand Identity", "UI/UX Design", "Marketing Assets"],           accent: "#6d28d9" },
];

const values = [
  { title: "Innovation",   description: "Pushing boundaries with creative solutions and technological advancement", icon: "fa-lightbulb-o",  gradient: "linear-gradient(135deg,#1a3a6b,#0a1628)" },
  { title: "Collaboration",description: "Building strong teams that foster trust, growth, and mutual success",     icon: "fa-handshake-o",  gradient: "linear-gradient(135deg,#0e7490,#065f7c)" },
  { title: "Excellence",   description: "Delivering the highest quality in every project, service, and interaction",icon: "fa-star",        gradient: "linear-gradient(135deg,#d97706,#b45309)" },
];

/* ─────────────────────────────────────────────
   HERO SLIDESHOW
───────────────────────────────────────────── */
const HeroSlideshow = () => {
  const [index, setIndex]       = useState(0);
  const [animKey, setAnimKey]   = useState(0);   // forces re-mount to replay animation
  const [paused, setPaused]     = useState(false);
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    setIndex(i);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % heroSlides.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 5000); // 1 s visible + 0.8 s transition = 1.8 s cycle
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const slide = heroSlides[index];

  return (
    <div
      style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden", background: "#000" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Full-screen image layer — re-mounts on every change ── */}
      <div
        key={animKey}
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          animation: "heroReveal 0.8s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <img
          src={slide.image}
          alt={slide.name}
          style={{
            width: "50%", height: "120%",
            objectFit: "contain", objectPosition: "top center",
            display: "block",
            animation: "zoomIn 10s ease forwards",
          }}
        />
        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.15) 0%,
            rgba(0,0,0,0.35) 50%,
            rgba(0,0,0,0.75) 100%
          )`,
        }} />
        {/* Colour tint matching member */}
        <div style={{
          position: "absolute", inset: 0,
          background: slide.color,
          opacity: 0.28,
          mixBlendMode: "multiply",
        }} />
      </div>

      {/* ── Wipe curtain — slides in then out ── */}
      <div
        key={`wipe-${animKey}`}
        style={{
          position: "absolute", inset: 0, zIndex: 5,
          background: slide.color,
          transformOrigin: "left",
          animation: "wipe 0.8s cubic-bezier(0.77,0,0.18,1) both",
          pointerEvents: "none",
        }}
      />

      {/* ── Central content ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "0 24px", textAlign: "center",
      }}>

        {/* Eyebrow */}
        <span
          key={`eyebrow-${animKey}`}
          style={{
            display: "inline-block", padding: "7px 22px",
            background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)",
            borderRadius: 30, border: "1px solid rgba(255,255,255,0.25)",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#fff", marginBottom: 24,
            animation: "slideUp 0.6s 0.55s ease both",
          }}
        >
          Professional Excellence
        </span>

        {/* Main heading */}
        <h1
          style={{
            margin: "0 0 18px",
            fontSize: "clamp(3rem,7vw,5.8rem)",
            fontWeight: 800, lineHeight: 1.06,
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#fff", textShadow: "0 4px 32px rgba(0,0,0,0.45)",
          }}
        >
          Meet Our Team
        </h1>

        {/* Member name pill — animates in on each change */}
        <div
          key={`name-${animKey}`}
          style={{
            marginBottom: 40,
            animation: "slideUp 0.5s 0.45s ease both",
          }}
        >
          <p style={{
            margin: "0 0 4px",
            fontSize: "clamp(1.2rem,3vw,1.7rem)",
            fontWeight: 800, color: "#fff",
            fontFamily: "'Playfair Display', Georgia, serif",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}>
            {slide.name}
          </p>
          <p style={{
            margin: 0,
            fontSize: 12, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.65)",
          }}>
            {slide.position}
          </p>
        </div>

        {/* Progress bar + dots */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          {/* Animated progress bar */}
          <div style={{ width: 200, height: 3, background: "rgba(255,255,255,0.2)", borderRadius: 2, overflow: "hidden" }}>
            <div
              key={`bar-${animKey}`}
              style={{
                height: "100%", background: "#fff", borderRadius: 2,
                animation: `growBar 1.8s linear both`,
              }}
            />
          </div>

          {/* Dot nav */}
          <div style={{ display: "flex", gap: 10 }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === index ? 28 : 8, height: 8, borderRadius: 4,
                  background: i === index ? "#fff" : "rgba(255,255,255,0.35)",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Thumbnail strip — bottom ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
        display: "flex", justifyContent: "center", alignItems: "flex-end",
        gap: 14, padding: "16px 24px 28px",
        background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
      }}>
        {heroSlides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={s.name}
            style={{
              width: i === index ? 70 : 52,
              height: i === index ? 70 : 52,
              borderRadius: "50%", overflow: "hidden", padding: 0,
              border: i === index ? "3px solid #fff" : "3px solid rgba(255,255,255,0.3)",
              cursor: "pointer", background: "none", flexShrink: 0,
              transform: i === index ? "translateY(-8px)" : "translateY(0)",
              boxShadow: i === index ? "0 8px 24px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.3)",
              transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <img
              src={s.image} alt={s.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </button>
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <div style={{
        position: "absolute", bottom: 108, left: "50%", transform: "translateX(-50%)",
        zIndex: 11, display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
      }}>
        <div style={{ width: 22, height: 36, border: "2px solid rgba(255,255,255,0.4)", borderRadius: 11, display: "flex", justifyContent: "center", paddingTop: 5 }}>
          <div style={{ width: 3, height: 7, background: "#fff", borderRadius: 2, animation: "scrollDot 1.8s ease infinite" }} />
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────── */
const Avatar = ({ src, name, size = "lg", accent = "#0a1628" }: { src: string | null; name: string; size?: "sm"|"md"|"lg"; accent?: string }) => {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const sizeMap = { sm: { outer: 56, font: 18 }, md: { outer: 80, font: 24 }, lg: { outer: 120, font: 36 } };
  const { outer, font } = sizeMap[size];
  if (src) return (
    <div style={{ width: outer, height: outer, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "3px solid rgba(255,255,255,0.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}>
      <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
    </div>
  );
  return (
    <div style={{ width: outer, height: outer, borderRadius: "50%", background: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: font, fontWeight: 700, color: "#fff", flexShrink: 0, border: "3px solid rgba(255,255,255,0.15)", boxShadow: "0 4px 20px rgba(0,0,0,0.25)", letterSpacing: "0.05em" }}>
      {initials}
    </div>
  );
};

/* ─────────────────────────────────────────────
   EXEC CARD
───────────────────────────────────────────── */
const ExecCard = ({ leader }: { leader: (typeof executives)[0] | (typeof coreTeam)[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: hovered ? "0 28px 64px rgba(10,22,40,0.22)" : "0 4px 24px rgba(0,0,0,0.08)", transform: hovered ? "translateY(-10px)" : "translateY(0)", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)", display: "flex", flexDirection: "column", border: "1px solid rgba(0,0,0,0.06)", height: "100%" }}>
      <div style={{ position: "relative", height: 320, background: leader.accent, overflow: "hidden", flexShrink: 0 }}>
        {leader.image
          ? <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform 0.6s ease" }} />
          : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}><i className="fa fa-user" style={{ fontSize: 96, color: "rgba(255,255,255,0.2)" }} /></div>
        }
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
        <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 12px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>{leader.position}</div>
        <div style={{ position: "absolute", top: 14, right: 14, width: 40, height: 40, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
          <i className={`fa ${leader.icon}`} style={{ color: leader.accent, fontSize: 16 }} />
        </div>
      </div>
      <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: "0 0 4px", fontSize: 19, fontWeight: 800, color: "#0f172a", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>{leader.name}</h3>
        <p style={{ margin: "0 0 14px", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{leader.bio}</p>
        <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #f1f5f9", display: "flex", gap: 8, justifyContent: "center" }}>
          {[{ icon: "fa-envelope", href: leader.email }, { icon: "fa-linkedin", href: leader.linkedin }, { icon: "fa-phone", href: "#" }].map(({ icon, href }) => (
            <a key={icon} href={href}
              style={{ width: 34, height: 34, borderRadius: "50%", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none", transition: "all 0.22s ease", border: "1px solid #e2e8f0", fontSize: 13 }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = leader.accent; el.style.color = "#fff"; el.style.borderColor = leader.accent; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#f8fafc"; el.style.color = "#475569"; el.style.borderColor = "#e2e8f0"; }}
            ><i className={`fa ${icon}`} /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, icon, title, highlight, subtitle }: { eyebrow: string; icon: string; title: string; highlight: string; subtitle: string }) => (
  <div style={{ textAlign: "center", marginBottom: 60 }}>
    <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "#1a3a6b", margin: "0 0 14px" }}>
      <i className={`fa ${icon}`} style={{ marginRight: 8 }} />{eyebrow}
    </p>
    <h2 style={{ margin: "0 0 14px", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, fontFamily: "'Playfair Display', Georgia, serif" }}>
      {title}{" "}<span style={{ background: "linear-gradient(135deg,#1a3a6b,#0a1628)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{highlight}</span>
    </h2>
    <p style={{ margin: "0 auto", fontSize: "1.05rem", color: "#64748b", maxWidth: 520, lineHeight: 1.65 }}>{subtitle}</p>
  </div>
);

/* ─────────────────────────────────────────────
   DEPT CARD
───────────────────────────────────────────── */
const DeptCard = ({ dept }: { dept: (typeof departments)[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: 20, padding: "30px 26px", boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.12)" : "0 4px 20px rgba(0,0,0,0.07)", transform: hovered ? "translateY(-6px)" : "translateY(0)", transition: "all 0.35s ease", border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 50, height: 50, borderRadius: 14, background: dept.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <i className={`fa ${dept.icon}`} style={{ color: "#fff", fontSize: 20 }} />
        </div>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#0f172a", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>{dept.title}</h3>
      </div>
      {dept.members.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {dept.members.map((m, mi) => (
            <div key={mi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar src={m.image} name={m.name} size="sm" accent={dept.accent} />
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{m.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {dept.roles.map((role, ri) => (
          <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 13px", borderRadius: 10, background: hovered ? dept.accent + "12" : "#f8fafc", transition: "background 0.3s ease" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: dept.accent, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#334155" }}>{role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   VALUE CARD
───────────────────────────────────────────── */
const ValueCard = ({ value }: { value: (typeof values)[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: 20, padding: "34px 30px", boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.12)" : "0 4px 20px rgba(0,0,0,0.07)", transform: hovered ? "translateY(-6px)" : "translateY(0)", transition: "all 0.35s ease", border: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ width: 58, height: 58, borderRadius: 16, background: value.gradient, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0deg)", transition: "transform 0.3s ease", boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}>
        <i className={`fa ${value.icon}`} style={{ color: "#fff", fontSize: 22 }} />
      </div>
      <h3 style={{ margin: "0 0 10px", fontSize: 21, fontWeight: 800, color: "#0f172a", fontFamily: "'Playfair Display', Georgia, serif" }}>{value.title}</h3>
      <p style={{ margin: 0, fontSize: 14, color: "#64748b", lineHeight: 1.65 }}>{value.description}</p>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const TeamPage = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
      *, *::before, *::after { box-sizing: border-box; }
      body { font-family: 'DM Sans', sans-serif; margin: 0; }

      /* ── Hero animations ── */

      /* Full-screen image slides in from the right as a panel */
      @keyframes heroReveal {
        0%   { clip-path: inset(0 100% 0 0); opacity: 0.6; }
        100% { clip-path: inset(0 0% 0 0);   opacity: 1; }
      }

      /* Subtle Ken-Burns zoom on the photo */
      @keyframes zoomIn {
        0%   { transform: scale(1.08); }
        100% { transform: scale(1); }
      }

      /* Colour wipe: sweeps across then retracts left */
      @keyframes wipe {
        0%   { transform: scaleX(0); transform-origin: left; }
        45%  { transform: scaleX(1); transform-origin: left; }
        46%  { transform: scaleX(1); transform-origin: right; }
        100% { transform: scaleX(0); transform-origin: right; }
      }

      /* Text / pill slides up and fades in */
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* Progress bar grows from 0 → 100% */
      @keyframes growBar {
        from { width: 0%; }
        to   { width: 100%; }
      }

      /* Scroll dot bounce */
      @keyframes scrollDot {
        0%,100% { transform: translateY(0);   opacity: 1; }
        50%      { transform: translateY(8px); opacity: 0.4; }
      }

      /* Section grids */
      .exec-grid   { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
      .core-grid   { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; max-width:780px; margin:0 auto; }
      .dept-grid   { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }
      .values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; }

      @media (max-width:1024px) {
        .exec-grid   { grid-template-columns:repeat(2,1fr); }
        .dept-grid   { grid-template-columns:repeat(2,1fr); }
        .values-grid { grid-template-columns:repeat(2,1fr); }
      }
      @media (max-width:640px) {
        .exec-grid   { grid-template-columns:1fr; }
        .core-grid   { grid-template-columns:1fr; max-width:100%; }
        .dept-grid   { grid-template-columns:1fr; }
        .values-grid { grid-template-columns:1fr; }
      }
    `}</style>

    <section style={{ width: "100%", background: "#fff", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ══ HERO ═══════════════════════════════════ */}
      <HeroSlideshow />

      {/* ══ EXECUTIVE LEADERSHIP ═══════════════════ */}
      <div style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)", padding: "96px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Leadership" icon="fa-star" title="Executive" highlight="Leadership" subtitle="Visionary leaders steering innovation and excellence at Ules Group Holding LTD" />
          <div className="exec-grid">{executives.map((l, i) => <ExecCard key={i} leader={l} />)}</div>
        </div>
      </div>

      {/* ══ CORE TEAM ═══════════════════════════════ */}
      <div style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Core Team" icon="fa-users" title="Key" highlight="Specialists" subtitle="Dedicated professionals powering our IT and creative capabilities every day" />
          <div className="core-grid">{coreTeam.map((m, i) => <ExecCard key={i} leader={m} />)}</div>
        </div>
      </div>

      {/* ══ DEPARTMENTS ═════════════════════════════ */}
      <div style={{ background: "linear-gradient(180deg,#f8fafc 0%,#fff 100%)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Organization" icon="fa-sitemap" title="Departments &" highlight="Teams" subtitle="Specialized divisions working in harmony to deliver outstanding results" />
          <div className="dept-grid">{departments.map((d, i) => <DeptCard key={i} dept={d} />)}</div>
        </div>
      </div>

      {/* ══ VALUES ══════════════════════════════════ */}
      <div style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Values" icon="fa-heart" title="What We" highlight="Stand For" subtitle="The principles that guide everything we do" />
          <div className="values-grid">{values.map((v, i) => <ValueCard key={i} value={v} />)}</div>
        </div>
      </div>

      {/* ══ CTA ═════════════════════════════════════ */}
      <div style={{ background: "linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%)", padding: "88px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {([{ top:-90,right:-90,size:340 },{ top:40,left:-70,size:220 },{ bottom:-60,right:80,size:180 }] as any[]).map(({size,...pos},i) => (
          <div key={i} style={{ position:"absolute",...pos,width:size,height:size,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.07)" }} />
        ))}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif" }}>Join Our Team</h2>
          <p style={{ margin: "0 0 40px", fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>We're always looking for talented professionals to join Ules Group Holding LTD</p>
          <button
            style={{ padding: "15px 44px", background: "#fff", color: "#0a1628", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: "0.04em", boxShadow: "0 8px 32px rgba(0,0,0,0.28)", transition: "all 0.25s ease", fontFamily: "'DM Sans', sans-serif" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform="scale(1.05)"; (e.currentTarget as HTMLElement).style.boxShadow="0 14px 44px rgba(0,0,0,0.38)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform="scale(1)";   (e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(0,0,0,0.28)"; }}
          >Explore Opportunities</button>
        </div>
      </div>

    </section>
  </>
);

export default TeamPage;