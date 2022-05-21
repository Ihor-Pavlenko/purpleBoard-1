import "./navbar.scss";
import avatar from "../../images/myAvatar.svg";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import FullscreenExitOutlinedIcon from "@material-ui/icons/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" className="" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <PublicOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <Brightness2OutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatOutlinedIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
