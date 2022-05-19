import { useEffect, useState } from "react";

import "./widget.scss";

import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const Widget = ({ type }) => {
  const [data, setData] = useState({});
  const amount = 100;
  const diff = 20;

  useEffect(() => {
    switch (type) {
      case "user":
        setData({
          title: "TITLE",
          isMoney: false,
          link: "Link",
          icon: (
            <PersonOutlineOutlinedIcon
              className="icon"
              style={{ color: "crimson", backgroundColor: "rgba(250,0,0,0.2)" }}
            />
          ),
        });
        break;
      case "order":
        setData({
          title: "TITLE",
          isMoney: false,
          link: "Link",
          icon: (
            <ShopTwoIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218,165,32,0.2)",
              }}
            />
          ),
        });
        break;
      case "earning":
        setData({
          title: "TITLE",
          isMoney: true,
          link: "Link",
          icon: (
            <MonetizationOnIcon
              className="icon"
              style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
            />
          ),
        });
        break;
      case "balance":
        setData({
          title: "TITLE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletIcon
              className="icon"
              style={{
                color: "purple",
                backgroundColor: "rgba(128,0,128,0.2)",
              }}
            />
          ),
        });
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
