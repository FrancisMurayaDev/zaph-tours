import "./LogoImage.css";
import Logo from "../../assets/zaph.logo.png"
function LogoImage() {
  return (
    <div className="logo-image-container">
      <img
        src={Logo}
        alt="logo image"
        className="logo-image"
      />
    </div>
  );
}

export default LogoImage;
