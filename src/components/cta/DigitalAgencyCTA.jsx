import Link from "next/link";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line cta-compact">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Work with us</p>
<h2 className="cta__title title-anim">
  Have a project in mind? Let&apos;s build it together
</h2>
                <div className="btn_wrapper">
                  <Link
                    href="/contact"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Contact Us{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
