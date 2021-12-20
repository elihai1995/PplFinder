import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";

const NavBar = ({ }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  let showdate = new Date();
  let date = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
  let time = showdate.getHours()+':'+showdate.getMinutes();
  if (showdate.getMinutes() < 10 && showdate.getHours() < 10)
    time = '0'+showdate.getHours()+':0'+showdate.getMinutes();
  else {
    if (showdate.getHours() < 10)
      time = '0'+showdate.getHours()+':'+showdate.getMinutes();
    else {
      if (showdate.getMinutes() < 10)
        time = showdate.getHours()+':0'+showdate.getMinutes();
      else
        time = showdate.getHours()+':'+showdate.getMinutes();
    }
  }
  const [tine, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <AppBar position="static" style={{ position: "fixed", top: 0 }} color="transparent">
      <Tabs value={value} onChange={handleChange} aria-label="Navigation">
        <Tab label="home" icon={<HomeIcon />} index={0} component={Link} to="/" replace />
        <Tab
          label="Favorites"
          icon={<FavoriteIcon />}
          index={1}
          component={Link}
          to="/favorites"
          replace
        />
        <div style={{marginTop: 25, fontSize: 20, fontFamily: "cursive"}}>{date}, {time}</div>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
