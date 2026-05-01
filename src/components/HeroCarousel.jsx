function HeroCarousel() {
  return (
    <div id="hxCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hx-carousel-item" style={{ backgroundImage: "url('/img/hero_1.jpg')" }}>
            <div className="hx-overlay"></div>

            <div className="container">
              <div className="hx-caption hx-animate">
                <h1>Reliable Healthcare Staff, When You Need Them Most</h1>
                <p>
                  DigiVera Healthcare Services provides qualified nurses, medical support staff,
                  and equipment to hospitals and healthcare institutions across India.
                </p>
                <p><a href="#" className="hx-btn">Request Staff</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hx-carousel-item" style={{ backgroundImage: "url('/img/hero_2.jpg')" }}>
            <div className="hx-overlay"></div>

            <div className="container">
              <div className="hx-caption hx-animate">
                <h1>Professional Medical Support Services</h1>
                <p>
                  DigiVera Healthcare Services provides qualified nurses, medical support staff,
                  and equipment to hospitals and healthcare institutions across India.
                </p>
                <p><a href="#" className="hx-btn">Request Staff</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hx-carousel-item" style={{ backgroundImage: "url('/img/hero_3.jpg')" }}>
            <div className="hx-overlay"></div>

            <div className="container">
              <div className="hx-caption hx-animate">
                <h1>Reliable Healthcare Medical Support Services</h1>
                <p>
                  DigiVera Healthcare Services provides qualified nurses, medical support staff,
                  and equipment to hospitals and healthcare institutions across India.
                </p>
                <p><a href="#" className="hx-btn">Request Staff</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#hxCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#hxCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default HeroCarousel;
