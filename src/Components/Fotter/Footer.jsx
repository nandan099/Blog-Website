import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Nandan Blogs</h2>

        <p className="footer-text">
          Sharing knowledge, ideas & creativity with the world.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Nandan Reddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
