import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Praxis ugh hell of taiyaki cupping direct trade irony forage VHS
            bodega boys affogato. Flannel seitan venmo YOLO mumblecore selfies
            vibecession cray, DSA single-origin coffee mustache fam literally
            listicle hexagon. Yes plz blackbird spyplane drinking vinegar,
            gastropub kombucha chillwave ramps jianbing wolf blog cloud bread
            dreamcatcher.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
