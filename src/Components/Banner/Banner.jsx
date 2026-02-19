import "./Banner.css";

const Banner = ({
  title = "Welcome to My Blog",
  subtitle = "Sharing knowledge, ideas & creativity",
  image = "/media/Banner.jpg",
}) => {
  return (
    <section className="banner">
      <img src={image} alt="Website banner" className="banner-image" />

      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="banner-btn">Explore Blogs</button>
      </div>
    </section>
  );
};

export default Banner;
