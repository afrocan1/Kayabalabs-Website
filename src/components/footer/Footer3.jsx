import Link from "next/link";
const FOOTER_LOGO =
  "https://www.prestigegroupltd.com/wp-content/uploads/2025/05/prestige_logo_6.png";
import Image from "next/image";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
                    <div className="container footer-line"></div>
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      style={{ width: "auto", height: "auto", maxWidth: "150px" }}
                      className="footer__logo"
                      src={FOOTER_LOGO}
                      alt="Prestige Group of Companies Ltd."
                    />
                    <p>
                      Prestige Group of Companies Ltd (PGCL) is a Ghanaian company incorporated in 2013, offering consulting, haulage, procurement, civil engineering, general construction, oil and gas, and agriculture services.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                                            <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/subsidiaries">Companies We Manage</Link>
                      </li>
                      <li>
                        <Link href="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link href="/news">News</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                                            <li>Movenpick Ambassador Hotel Emporium 5th Floor, Accra, Ghana 🇬🇭</li>
                      <li>
                        <a href="tel:+233249468284" className="phone">
                          +233 249 468 284{" "}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@prestigegroupltd.com">
                          info@prestigegroupltd.com
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Contact Us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">09 : 00 AM - 5 : 30 PM</h3>
                    <h4 className="contact-day">Monday - Friday</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2026 | All rights reserved by Prestige Group of Companies Limited | Accra, Ghana 🇬🇭
                    </p>
                  </div>

                  {/* <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
