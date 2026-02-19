import "./DedicatedBlog.css";
import Banner from "../../Components/Banner/Banner";
import blogs from "../../Utils/MockData";
import { useParams, Link } from "react-router-dom";

function DedicatedBlog() {
  const { id } = useParams();

  const blogID = Number(id);
  const blogToDisplay = blogs.find((blog) => blog.id === blogID);

  if (!blogToDisplay) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Banner
        title={blogToDisplay.title}
        subtitle={blogToDisplay.category}
      />

      <section className="blog-container">
        <div className="blog-meta">
          <span className="blog-category">
            {blogToDisplay.category}
          </span>
          <span>• 5 min read</span>
        </div>

        <article className="blog-content">
          {blogToDisplay.content}
        </article>

        <div className="back-button">
          <Link to="/">← Back to Blogs</Link>
        </div>
      </section>
    </>
  );
}

export default DedicatedBlog;
