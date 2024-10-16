import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../../Actions/DataAction";

import DisplayIcon from "../../assets/Display.svg";
import DownIcon from "../../assets/down.svg";

localStorage.setItem("group", "status");
localStorage.setItem("order", "priority");
const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};
const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};
const NavBar = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());
  const handleGroupValue = (e, valueBool) => {
    if (valueBool) {
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value);
    }
  };
  useEffect(() => {
    if (groupValue === "user") {
      dispatch(
        selectData(
          groupValue,
          {
            allTickets,
            allUser,
          },
          orderValue
        )
      );
    } else {
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);
  return (
    <div className="top-header" style={{ paddingLeft: "13px" }}>
      <div className="displayButton">
        <button
          className="btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img src={DisplayIcon} alt="Display" />
          Display

          <img src={DownIcon} alt="Down" />
        </button>

        {displayOnClick && (
          <div className="dropOnClick">
            <div className="selectGroup">
              <span style={{ fontSize: "14px", color: "#555B5A" }}>Grouping</span>
              <select
                value="status"
                className="selectStyle"
                name="group"
                id="group"
                onChange={(e) => handleGroupValue(e, true)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="selectGroup">
              <span style={{ fontSize: "14px", color: "#555B5A" }}>Ordering</span>
              <select
                value="priority"
                className="selectStyle"
                name="order"
                id="order"
                onChange={(e) => handleGroupValue(e, false)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
