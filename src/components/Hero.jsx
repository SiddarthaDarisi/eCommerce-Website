import "./Hero.css";
export const Hero = () => {
  return (
    <div className="background">
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Discover Our New Collection</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit doloremque est vitae minima, dolore laboriosam
              corporis sequi incidunt cupiditate vero. Voluptatum, inventore!
              Quos, quo ab? Laudantium culpa voluptate ullam saepe?
            </p>
            <a href="#" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
