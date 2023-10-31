import "../styles/headerStyle/headerStyles.css";

export default function Header() {
  return (
    <div className="header-bar">
      <p>Logo</p>
      <div className="about-work">
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="links">
        <a href="https://github.com/KuiilMcFly">
          <img src="/github.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/esposito-carmine/">
          <img src="linkedin.png" alt="" />
        </a>
      </div>
    </div>
  );
}
