import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

const IMG = "https://www.prestigegroupltd.com/wp-content/uploads/2025/12";

const clients = [
  { id: 1, name: "Ghana Police Service", logo: `${IMG}/police.jpg` },
  { id: 2, name: "National Lottery Authority", logo: `${IMG}/NLA_Logo.png` },
  { id: 3, name: "Tema Oil Refinery", logo: `${IMG}/tor_logo.jpg` },
  { id: 4, name: "GSA", logo: `${IMG}/cropped-GSA-Logo.png` },
  { id: 5, name: "Ministry of Energy", logo: `${IMG}/ministry_of_energy.jpg` },
  { id: 6, name: "Ghana Gas", logo: `${IMG}/ghana_gas.jpg` },
  { id: 7, name: "Concord", logo: `${IMG}/concord.jpg` },
  { id: 8, name: "Ghana Armed Forces", logo: `${IMG}/gaf_logo.jpg` },
];

const DigitalAgencyBrand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom");
          fadeArray.forEach((item) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom", {
            scrollTrigger: {
              trigger: ".fade_bottom",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: { each: 0.2 },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <style>{`
        .pg-clients {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
          width: 100%;
          margin-top: 50px;
        }
        .pg-clients .brand__item {
          margin: 0 !important;
          width: 100% !important;
          float: none !important;
          min-width: 0;
        }
        .pg-client-card {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 4 / 3;
          padding: 22px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid rgba(212, 175, 55, 0.35);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .pg-client-card:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.9);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.4);
        }
        .pg-client-card img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        @media (max-width: 991px) {
          .pg-clients { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        }
        @media (max-width: 767px) {
          .pg-clients { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 30px; }
          .pg-client-card { padding: 14px; border-radius: 12px; }
        }
      `}</style>

      <section className="brand__area">
        <div className="container g-0 line pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Our Clients</h2>
                <h5 className="sec-title title-anim">
                  Trusted by government institutions <br />
                  and leading organisations
                </h5>
              </div>
            </div>

            <div className="col-xxl-12">
              <div className="brand__list pg-clients">
                {clients.map((c) => (
                  <div className="brand__item fade_bottom" key={c.id}>
                    <div className="pg-client-card">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.logo} alt={c.name} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBrand;
