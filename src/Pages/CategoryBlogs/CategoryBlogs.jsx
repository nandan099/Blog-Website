import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogs from "../../Utils/MockData";
import { useParams } from "react-router-dom";
import "./CategoryBlog.css";

function CategoryBlogs() {
  const { category } = useParams();

  const currentCategory = category || "Programming";

  // ✅ Proper filtering (clean & scalable)
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === currentCategory
  );

  return (
    <>
      <Banner
        title={currentCategory}
        subtitle={`Explore trending articles in ${currentCategory}`}
      />

      <section className="category-section">
        <div className="category-header">
          <h2>{currentCategory} Blogs</h2>
          <span>{filteredBlogs.length} Articles</span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="empty-state">
            <h3>No blogs found</h3>
            <p>We are working on adding new content soon 🚀</p>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <TrendingBlog key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default CategoryBlogs;
