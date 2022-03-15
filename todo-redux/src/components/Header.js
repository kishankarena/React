import React from "react";
import DateShow from "./DateShow";
import Weekday from "./Weekday";

const Header = (props) => {
  const date = new Date();
  return (
    <div className="app-header">
      <div className="app-header__date">
        <DateShow date={date} />
      </div>
      <div className="app-header__day">
        <Weekday date={date} />
      </div>
    </div>
  );
};

export default Header;
