import "./Header.css";
const Header = () => {
  const logo =
    "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
  return (
    <>
      <img src={logo} alt="logo" className="header" />
    </>
  );
};

export default Header;
