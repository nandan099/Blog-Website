import "./TrendingBlog.css";
import { Link } from "react-router-dom";

const categoryImages = {
  Travelling: "Travelling.jpg",
  Cooking: "cooking.jpg",
  Programming: "programming.jpg",
  Workouts: "Fitness.jpg",
  Health: "Health.jpg",
};

function TrendingBlog({ blog }) {
  const image = categoryImages[blog.category] || "Banner.jpg";

  return (
    <Link to={`/blog/${blog.id}`} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-image-wrapper">
          <img
            src={`/media/${image}`}
            alt={blog.title}
            className="blog-image"
          />
          <span className="blog-category">{blog.category}</span>
        </div>

        <div className="blog-content">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-description">
            {blog.previewDescription}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default TrendingBlog;
