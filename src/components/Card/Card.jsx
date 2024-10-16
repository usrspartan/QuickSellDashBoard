import React from "react";
import "./Card.css";

import ToDo from '../../assets/To-do.svg';
import InProgress from '../../assets/in-progress.svg';
import Done from '../../assets/Done.svg';
import Close from '../../assets/Cancelled.svg';
import Urgent from '../../assets/SVG - Urgent Priority grey.svg';
import Backlog from '../../assets/Backlog.svg';
import NoPriorityIcon from '../../assets/No-priority.svg';
import HighPriority from '../../assets/high.svg';
import MediumPriorityIcon from '../../assets/medium.svg';
import LowPriorityIcon from '../../assets/low.svg';


const getImageUrlById = ({id}) => {
  const imageMap = {
    'usr-1': require("../../assets/user2.jpg"),
    'usr-2': require("../../assets/user3.webp"),
    'usr-3': require("../../assets/user3.webp"),
  };
  return imageMap[id] || require("../../assets/user1.avif"); // Default image if id not found
};

const Card = ({ id, title, tag, status, priority }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];
  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };
  return (
    <div className="cardContainer" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={getImageUrlById(id)}
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <img src={Backlog} alt="" />
            )
              : status === "Todo" ? (
                <img src={ToDo} alt="" />
              ) : status === "In progress" ? (
                <img src={InProgress} alt="" />
              ) : status === "Done" ? (
                <img src={Done} alt="" />
              )
                : (
                  <img src={Close} alt="" />
                ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
  <div
    className="tags"
    style={{
      width: "35px",
      height: "30px",
      display: "inline-block",
    }}
  >
    {priority === 1 ? (
      <img src={LowPriorityIcon} alt="Low Priority" />
    ) : priority === 2 ? (
      <img src={MediumPriorityIcon} alt="Medium Priority" />
    ) : priority === 3 ? (
      <img src={HighPriority} alt="High Priority" />
    ) : priority === 4 ? (
      <img src={Urgent} alt="Urgent" />
    ) : (
      <img src={NoPriorityIcon} alt="" />
    )}
  </div>
) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags">
              {" "}
              <span className="dot">•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
