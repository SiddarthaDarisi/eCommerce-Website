import Dining from "../assets/Images/Dining-room.webp";
import Bed from "../assets/Images/Bed-room.webp";
import Living from "../assets/Images/living-room.webp";
export const MainSection = () => {
  return (
    <div className="Section-main">
      <section className="Range container grid grid--1-cols grid grid--center-v ">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="range-image-section">
          <div className="range-type">
            <img className="range-image" alt="Dining picture " src={Dining} />
            <h3>Dining</h3>
          </div>
          <div className="range-type">
            <img className="range-image" alt="Living picture" src={Living} />
            <h3>Living</h3>
          </div>
          <div className="range-type">
            <img className="range-image" alt="Bedroom picture" src={Bed} />
            <h3>Bedroom</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
