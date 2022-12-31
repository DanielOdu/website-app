import logo from "../images/Asset-3.png";
export default function Header(props) {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <h3>LOGO</h3>

        <ul className="nav-items">
          <li>{props.link1}</li>
          <li>{props.link2}</li>
          <li>{props.link3}</li>
        </ul>
      </nav>
    </header>
  );
}
