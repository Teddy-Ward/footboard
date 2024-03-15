import Image from "../../assets/images/pitch.svg";

function Header() {
  return (
    <div className="logo">
      <div className="logo-text">
        <h2 className="logo-title">FootBoard</h2>
        <h5 className="logo-subtitle">The Football Tactics Board</h5>
      </div>
      <div className="logo-image">
        <img src={Image} alt="Your logo" />
      </div>
    </div>
  );
}

export default Header;
