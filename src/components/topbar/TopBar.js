import "./topbar.scss";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const TopBar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Ronice Y.
          </a>
        </div>

        <div className="right">
          <div className="itemContainer">
            <CallIcon className="icon" />
            <span>+216 20 18 37 74</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>roniceyemeli@gmail.com</span>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
