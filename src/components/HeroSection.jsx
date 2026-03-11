const HERO_BG = 'https://lh3.googleusercontent.com/d/1x3DKfagMo7R3L5qWIdSwksOzqEeay70g=w1600'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="slider-container">
        <div className="slide slide-1" style={{ backgroundImage: `url('${HERO_BG}')` }}></div>
      </div>
      <div className="social-sidebar">
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </section>
  )
}
