import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const LIVE = "https://www.prestigegroupltd.com";
const IMG = `${LIVE}/wp-content/uploads/2025/12`;

const PHOTOS = {
  "best-link-ventures-limited": `${IMG}/327.jpg`,
  "lewi-advisory-services-limited": `${IMG}/lewiadv_small.jpg`,
  "prestige-farms-limited": `${IMG}/prefarm.jpg`,
  "prestige-multimedia-limited": `${IMG}/lotterysm.jpg`,
  "sun-farming-ghana-limited": `${IMG}/sunfarm.jpg`,
  "prestige-mining-company": `${IMG}/mines.jpg`,
  "marigold-oil-international-limited": `${IMG}/oilbarr.jpg`,
  "lewi-dental-clinic-limited": `${IMG}/dentar.jpg`,
  "heritage-gallery-limited": `${IMG}/artre.jpg`,
  "trademart-ghana-limited": `${IMG}/211500.jpg`,
  "prestige-link-security-limited": `${IMG}/secur.jpg`,
  "prestige-friends-workforce": `${IMG}/131757000.jpg`,
  "prestige-energy-limited": `${IMG}/eneg.jpg`,
  "sajem-oil-gas-services-limited": `${IMG}/saje.jpg`,
  "marigold-investment-limited": `${IMG}/invvee.jpg`,
  "accra-international-airlines-limited": `${IMG}/airl.jpg`,
  "nyive-oil-and-gas-limited": `${IMG}/985700.jpg`,
  "lnh-ghana-limited": `${IMG}/llnn.jpg`,
};

/* Icons drawn on a 64x64 grid */
const ICONS = {
  building: [
    "M14 54V12h26v42M40 54V28h12v26M8 54h48",
    "M21 20h4M29 20h4M21 28h4M29 28h4M21 36h4M29 36h4M21 44h4M29 44h4M45 36h2M45 44h2",
  ],
  chip: [
    "M10 12h44v30H10z",
    "M24 54h16M32 42v12",
    "M20 24l6 6-6 6M30 36h10",
  ],
  globe: [
    "M12 32a20 20 0 1 0 40 0a20 20 0 1 0-40 0",
    "M12 32h40M32 12c-8 10-8 30 0 40M32 12c8 10 8 30 0 40",
  ],
  wheat: [
    "M32 58V14",
    "M32 24c-8 0-12-4-12-10 8 0 12 4 12 10zM32 24c8 0 12-4 12-10-8 0-12 4-12 10z",
    "M32 36c-8 0-12-4-12-10 8 0 12 4 12 10zM32 36c8 0 12-4 12-10-8 0-12 4-12 10z",
    "M32 48c-8 0-12-4-12-10 8 0 12 4 12 10zM32 48c8 0 12-4 12-10-8 0-12 4-12 10z",
  ],
  camera: ["M8 16h34v32H8z", "M42 28l14-8v24l-14-8"],
  sun: [
    "M24 26a8 8 0 1 0 16 0a8 8 0 1 0-16 0",
    "M32 8v6M32 38v6M12 26h6M46 26h6M18 12l4 4M42 36l4 4M46 12l-4 4M22 36l-4 4",
    "M12 58l6-10h28l6 10zM32 48v10",
  ],
  mountain: ["M6 54l18-30 10 16 8-12 16 26z", "M24 24l4 7M42 28l3 5"],
  derrick: [
    "M32 8L18 52M32 8l14 44",
    "M22 36h20M26 22h12M12 56h40",
  ],
  tooth: [
    "M18 10c-7 0-11 6-9 13 2 7 4 12 5 19 1 7 4 12 7 12s4-9 6-12c2 3 3 12 6 12s6-5 7-12c1-7 3-12 5-19 2-7-2-13-9-13-5 0-7 2-10 2s-5-2-8-2z",
  ],
  frame: [
    "M10 10h44v38H10z",
    "M16 16h32v26H16z",
    "M16 38l10-10 8 8 6-6 8 8",
    "M24 56h16M32 48v8",
  ],
  shield: [
    "M32 6l20 8v16c0 13-8.5 22-20 28C20.5 52 12 43 12 30V14z",
    "M22 32l7 7 13-14",
  ],
  cap: [
    "M32 14L6 26l26 12 26-12z",
    "M16 32v12c0 4 8 8 16 8s16-4 16-8V32M58 26v16",
  ],
  bolt: ["M36 6L14 36h16l-4 22 24-32H34z"],
  chart: ["M8 54h48", "M14 44l12-12 10 8 16-22", "M44 18h8v8"],
  plane: ["M58 8L6 28l18 8 6 20 10-12 14 10z", "M24 36L58 8"],
  drop: [
    "M32 8C22 22 16 30 16 40a16 16 0 0 0 32 0C48 30 42 22 32 8z",
    "M24 42a8 8 0 0 0 8 8",
  ],
  pump: [
    "M14 56V12h24v44M8 56h36M14 24h24",
    "M38 20l10 8v18a4 4 0 0 0 8 0V30l-6-8",
  ],
  hex: [
    "M32 8l20 12v24L32 56 12 44V20z",
    "M32 8v48M12 20l40 24M52 20L12 44",
  ],
};

/* photo: "/assets/imgs/companies/xyz.jpg" -> replaces the artwork */
const companies = [
  { id: 1, title: "Best Link Ventures Limited", sector: "Construction & Housing", slug: "best-link-ventures-limited", icon: "building", from: "#0f1a2e", to: "#1d2f52", glow: "#4f7bd1" },
  { id: 2, title: "Lewi Advisory Services Ltd.", sector: "Technology & IT", slug: "lewi-advisory-services-limited", icon: "chip", from: "#0d1b2a", to: "#14324a", glow: "#38a3d4" },
  { id: 3, title: "Prestige Farms Limited", sector: "Agriculture", slug: "prestige-farms-limited", icon: "wheat", from: "#0d2018", to: "#1b3d2b", glow: "#5ab97b" },
  { id: 4, title: "Prestige Multimedia Ltd.", sector: "Media & Content", slug: "prestige-multimedia-limited", icon: "camera", from: "#24101f", to: "#4a1d3d", glow: "#d067a8" },
  { id: 5, title: "Sun Farming Ghana Limited", sector: "Renewable Energy", slug: "sun-farming-ghana-limited", icon: "sun", from: "#2a1a08", to: "#5a3a0c", glow: "#f2b83b" },
  { id: 6, title: "Prestige Mining Company", sector: "Mining & Earthworks", slug: "prestige-mining-company", icon: "mountain", from: "#1c1a17", to: "#3a342c", glow: "#c28a4a" },
  { id: 7, title: "Marigold Oil International", sector: "Oil & Gas Engineering", slug: "marigold-oil-international-limited", icon: "derrick", from: "#101820", to: "#1f2d3a", glow: "#e08a2e" },
  { id: 8, title: "Lewi Dental Clinic Limited", sector: "Healthcare", slug: "lewi-dental-clinic-limited", icon: "tooth", from: "#0c2224", to: "#134447", glow: "#5fd6d0" },
  { id: 9, title: "Heritage Gallery Limited", sector: "Arts & Culture", slug: "heritage-gallery-limited", icon: "frame", from: "#241410", to: "#4a2a1d", glow: "#d99a6c" },
  { id: 10, title: "Trademart Ghana Limited", sector: "Trade & Supply", slug: "trademart-ghana-limited", icon: "globe", from: "#1a1630", to: "#2d2557", glow: "#8b7bea" },
  { id: 11, title: "Prestige Link Security Ltd.", sector: "Security Services", slug: "prestige-link-security-limited", icon: "shield", from: "#101420", to: "#1c2540", glow: "#6c8cff" },
  { id: 12, title: "Prestige-Friends Workforce", sector: "Technical & Training Institute", slug: "prestige-friends-workforce", icon: "cap", from: "#0f1f2a", to: "#183c52", glow: "#52b0e0" },
  { id: 13, title: "Prestige Energy Limited", sector: "Energy", slug: "prestige-energy-limited", icon: "bolt", from: "#1d1a08", to: "#40380e", glow: "#f0d23c" },
  { id: 14, title: "Sajem Oil & Gas Services Ltd.", sector: "Oil & Gas Services", slug: "sajem-oil-gas-services-limited", icon: "pump", from: "#16151c", to: "#2b2a38", glow: "#e0803c" },
  { id: 15, title: "Marigold Investment Ltd.", sector: "Investment", slug: "marigold-investment-limited", icon: "chart", from: "#0f221a", to: "#1a4030", glow: "#46c28a" },
  { id: 16, title: "Accra International Airlines", sector: "Aviation", slug: "accra-international-airlines-limited", icon: "plane", from: "#0d1a2c", to: "#16345a", glow: "#5aa9f5" },
  { id: 17, title: "Nyive Oil and Gas Limited", sector: "Oil & Gas", slug: "nyive-oil-and-gas-limited", icon: "drop", from: "#14161d", to: "#262a36", glow: "#d9923a" },
  { id: 18, title: "LNH Ghana Limited", sector: "Group Company", slug: "lnh-ghana-limited", icon: "hex", from: "#171320", to: "#2b2340", glow: "#a58cf0" },
];

const CompanyArt = ({ item }) => {
  const uid = `c${item.id}`;
  return (
    <svg
      viewBox="0 0 520 700"
      role="img"
      aria-label={item.title}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <linearGradient id={`bg${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={item.from} />
          <stop offset="1" stopColor={item.to} />
        </linearGradient>
        <radialGradient id={`gl${uid}`} cx="50%" cy="42%" r="55%">
          <stop offset="0" stopColor={item.glow} stopOpacity="0.38" />
          <stop offset="1" stopColor={item.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`gd${uid}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0" stopColor="#f6e08a" />
          <stop offset="1" stopColor="#b8892b" />
        </linearGradient>
        <pattern id={`gr${uid}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#ffffff" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="520" height="700" fill={`url(#bg${uid})`} />
      <rect width="520" height="700" fill={`url(#gr${uid})`} />
      <rect width="520" height="700" fill={`url(#gl${uid})`} />

      <circle cx="260" cy="300" r="190" fill="none" stroke="#d4af37" strokeOpacity="0.25" />
      <circle cx="260" cy="300" r="150" fill="none" stroke="#d4af37" strokeOpacity="0.15" />

      <g
        transform="translate(132 172) scale(3.9)"
        fill="none"
        stroke={`url(#gd${uid})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[item.icon].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      <path
        d="M36 70V36h34M484 70V36h-34M36 630v34h34M484 630v34h-34"
        fill="none"
        stroke="#d4af37"
        strokeOpacity="0.6"
        strokeWidth="2"
      />
      <text x="44" y="112" fill="#ffffff" fillOpacity="0.35" fontSize="22" letterSpacing="3">
        {String(item.id).padStart(2, "0")}
      </text>
      <text x="260" y="604" textAnchor="middle" fill="#f6e08a" fillOpacity="0.85" fontSize="15" letterSpacing="6">
        PRESTIGE GROUP
      </text>
    </svg>
  );
};

const DigitalAgencyPortfolio = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        if (device_width > 767) {
          let portfolioline = gsap.timeline({
            scrollTrigger: {
              trigger: ".portfolio__area",
              start: "top center-=200",
              pin: ".portfolio__text",
              end: "bottom bottom+=80",
              markers: false,
              pinSpacing: false,
              scrub: 1,
            },
          });

          portfolioline.to(".portfolio__text", { scale: 3, duration: 1 });
          portfolioline.to(".portfolio__text", { scale: 3, duration: 1 });
          portfolioline.to(
            ".portfolio__text",
            { scale: 1, duration: 1 },
            "+=2"
          );
        }

        let portfolio_lists = gsap.utils.toArray(".portfolio__item");
        portfolio_lists.forEach((portfolio) => {
          gsap.set(portfolio, { opacity: 0.7 });
          let t1 = gsap.timeline();

          t1.set(portfolio, { position: "relative" });
          t1.to(portfolio, {
            scrollTrigger: {
              trigger: portfolio,
              scrub: 2,
              duration: 1.5,
              start: "top bottom+=100",
              end: "bottom center",
              markers: false,
            },
            scale: 1,
            opacity: 1,
            rotateX: 0,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <style>{`
        .pg-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 56px 32px;
          width: 100%;
        }
        .pg-grid .portfolio__item {
          width: 100% !important;
          margin: 0 !important;
          float: none !important;
          min-width: 0;
        }
        .pg-card {
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          background: #0b0d12;
          border: 1px solid rgba(212, 175, 55, 0.22);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.35);
          transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
        }
        .pg-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.5);
        }
                .pg-card img {
          display: block;
          width: 100%;
          aspect-ratio: 520 / 700;
          object-fit: cover;
          transition: transform 0.9s ease;
        }
        .pg-card:hover img {
          transform: scale(1.07);
        }
        .pg-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 10, 16, 0.75) 0%,
            rgba(8, 10, 16, 0) 45%
          );
          pointer-events: none;
        }
        .pg-grid .portfolio__info {
          padding-top: 18px;
        }
        .pg-grid .portfolio__title {
          font-size: clamp(18px, 2vw, 28px);
          line-height: 1.2;
          margin: 0 0 6px;
        }
        .pg-grid .portfolio__info p {
          margin: 0;
          color: #d4af37;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media (max-width: 991px) {
          .pg-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 22px; }
        }
        @media (max-width: 575px) {
          .pg-grid { gap: 30px 14px; }
          .pg-card { border-radius: 12px; }
          .pg-grid .portfolio__title { font-size: 15px; }
          .pg-grid .portfolio__info p { font-size: 10px; letter-spacing: 1px; }
        }
        @media (max-width: 380px) {
          .pg-grid { grid-template-columns: minmax(0, 1fr); }
          .pg-grid .portfolio__title { font-size: 20px; }
          .pg-grid .portfolio__info p { font-size: 12px; }
        }
      `}</style>

      <section className="portfolio__area pb-140">
        <div className="container">
          <div className="row top_row">
            <h5 className="portfolio__text">companies</h5>
            <div className="portfolio__list-1 pg-grid">
              {companies.map((c) => (
                <div className="portfolio__item" key={c.id}>
                  <Link
                    href={`${LIVE}/${c.slug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pg-card"
                    aria-label={c.title}
                  >
                    {PHOTOS[c.slug] ? (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={PHOTOS[c.slug]} alt={c.title} loading="lazy" />
) : (
  <CompanyArt item={c} />
)}
                  </Link>
                  <div className="portfolio__info">
                    <h3 className="portfolio__title">{c.title}</h3>
                    <p>{c.sector}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyPortfolio;
