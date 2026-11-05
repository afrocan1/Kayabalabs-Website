import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Service11 from "../../../public/assets/imgs/service/1/program.png";
import Service12 from "../../../public/assets/imgs/service/1/contract.png";
import Service13 from "../../../public/assets/imgs/service/1/nursery.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ICON_BOX = {
  width: 280,
  height: 280,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 24,
  background: "linear-gradient(145deg, #15171c 0%, #23262e 100%)",
  border: "1px solid rgba(212, 175, 55, 0.35)",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
};

const PeopleIcon = () => (
  <svg width="130" height="130" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="goldA" x1="0" y1="0" x2="64" y2="64">
        <stop offset="0" stopColor="#f6e08a" />
        <stop offset="1" stopColor="#b8892b" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="20" r="7" stroke="url(#goldA)" strokeWidth="2.5" />
    <circle cx="13" cy="26" r="5" stroke="url(#goldA)" strokeWidth="2.5" />
    <circle cx="51" cy="26" r="5" stroke="url(#goldA)" strokeWidth="2.5" />
    <path d="M18 50c0-8 6-14 14-14s14 6 14 14" stroke="url(#goldA)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M4 46c0-6 4-10 9-10M60 46c0-6-4-10-9-10" stroke="url(#goldA)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="130" height="130" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="goldB" x1="0" y1="0" x2="64" y2="64">
        <stop offset="0" stopColor="#f6e08a" />
        <stop offset="1" stopColor="#b8892b" />
      </linearGradient>
    </defs>
    <path d="M32 6l20 8v16c0 13-8.5 22-20 28C20.500 52 12 43 12 30V14l20-8z" stroke="url(#goldB)" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 32l7 7 13-14" stroke="url(#goldB)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const values = [
  {
    id: 1,
    title: "Integrity & Respect",
    text: "We uphold honesty and transparency in all our dealings, fostering mutual respect and trust with our partners and stakeholders.",
    image: Service11,
  },
  {
    id: 2,
    title: "Innovation",
    text: "We embrace creative and forward-thinking solutions that positively impact the built environment and enhance project outcomes.",
    image: Service12,
  },
  {
    id: 3,
    title: "Accountability",
    text: "We take full responsibility for our actions and decisions, ensuring that our partners and stakeholders can rely on us with confidence.",
    image: Service13,
  },
  {
    id: 4,
    title: "Participatory Process",
    text: "We promote inclusive engagement throughout every phase of project delivery, ensuring that all stakeholders feel ownership and involvement.",
    icon: <PeopleIcon />,
  },
  {
    id: 5,
    title: "Commitment",
    text: "We are dedicated to delivering efficient, high-quality services that exceed client expectations and create lasting impact.",
    icon: <ShieldIcon />,
  },
];

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            { x: 0, opacity: 1, duration: 1.2 },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">Prestige Group</h2>
                <h3 className="sec-title title-anim">
                  Our Core <br />
                  Values
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  Five principles guide how we deliver every project for our{" "}
                  <span>partners and stakeholders</span>
                </p>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  {values.map((v) =>
                    v.image ? (
                      <Image
                        key={v.id}
                        priority
                        width={280}
                        style={{ height: "auto" }}
                        src={v.image}
                        alt={v.title}
                        className={
                          activeImg == v.id
                            ? `service__img img-${v.id} active`
                            : `service__img img-${v.id}`
                        }
                      />
                    ) : (
                      <div
                        key={v.id}
                        style={ICON_BOX}
                        className={
                          activeImg == v.id
                            ? `service__img img-${v.id} active`
                            : `service__img img-${v.id}`
                        }
                      >
                        {v.icon}
                      </div>
                    )
                  )}

                  {values.map((v) => (
                    <span
                      key={v.id}
                      className={
                        activeShape == v.id
                          ? `shapes shape-box-${Math.min(v.id, 4)} current`
                          : `shapes shape-box-${Math.min(v.id, 4)}`
                      }
                    ></span>
                  ))}
                </div>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  {values.map((v) => (
                    <Link
                      key={v.id}
                      href="/about"
                      className={activeList == v.id ? "active" : ""}
                      data-service={v.id}
                    >
                      <div className="service__item animation_home1_service">
                        <div className="service__number">
                          <span>{String(v.id).padStart(2, "0")}</span>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">{v.title}</h4>
                        </div>
                        <div className="service__text">
                          <p>{v.text}</p>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyService;
