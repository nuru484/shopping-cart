const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-content">
          <p className="company-name">Shop Test</p>
          <p className="copyright">&copy; 2024 All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/nuru484" className="source-code-link">
            <img
              src="../src/assets/icons8-github-24.png"
              alt="github icon"
              width={'25px'}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
