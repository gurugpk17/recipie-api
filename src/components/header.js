import Acc from "../images/user.png";
import Logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="tit1">Food<span className="tit2">zie</span></h1>
        <section className="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/recipes">Recipes</a>
          <a href="/contact">Contact</a>
        </section>
        <img className="acc-logo" src={Acc} alt="User account logo" />
      </div>
      <hr />
    </header>
  );
}