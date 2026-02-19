import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogs from "../../Utils/MockData";
import { Link } from "react-router-dom";
import "./Home.css";

const categories = [
  {
    name: "Programming",
    image: "/media/programming.jpg",
  },
  {
    name: "Cooking",
    image: "/media/cooking.jpg",
  },
  {
    name: "Workouts",
    image: "/media/Fitness.jpg",
  },
];

function Home() {
  return (
    <>
      <Banner
        title="Welcome to My Blog"
        subtitle="Discover knowledge, ideas & creativity"
      />

      {/* ===== CATEGORY SECTION ===== */}
      <section className="home-section">
        <div className="section-header">
          <h2>Browse by Category</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blogs/${category.name}`}
              className="category-card"
            >
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== TRENDING SECTION ===== */}
      <section className="home-section">
        <div className="section-header">
          <h2>Trending Blogs</h2>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <TrendingBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
