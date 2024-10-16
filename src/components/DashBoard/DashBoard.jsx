import { React } from "react";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import Card from "../Card/Card";


        // Importing the icons
import HighPriority from '../../assets/high.svg';
import Urgent from '../../assets/SVG - Urgent Priority colour.svg';
import Backlog from '../../assets/Backlog.svg';
import ToDo from '../../assets/To-do.svg';
import InProgress from '../../assets/in-progress.svg';
import Done from '../../assets/Done.svg';
import Close from '../../assets/Cancelled.svg';
import MediumPriorityIcon from '../../assets/medium.svg';
import LowPriorityIcon from '../../assets/low.svg';
import AddIcon from '../../assets/add.svg';
import CancelIcon from '../../assets/Cancelled.svg';
import DoneIcon from '../../assets/Done.svg';
import NoPriorityIcon from '../../assets/No-priority.svg';
import ThreeDotsIcon from '../../assets/3 dot menu.svg';

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  console.log("rere", user);
  return (
    selectedData && (
      <div
        className="dashContainer"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {selectedData.map((element, index) => {
          const cardWidthPercentage = 18.7;
          return (
            <div
              key={index}
              className="dashCardContainer"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <div className="dashCardHeading">
                <div className="leftView">
                  {user ? (
                    <div
                      className="imageContainer"
                      style={{

                        width: "10px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                    </div>
                  ) : isStatus ? (
                    <div
                      className="cardTitle"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                        fontWeight: 200,
                      }}
                    >
                      {element[index].title === "Backlog" ? (
                        <img src={Backlog} alt="" />
                      )
                        : element[index].title === "Todo" ? (
                          <img src={ToDo} alt="" />
                        ) : element[index].title === "In progress" ? (
                          <img src={InProgress} alt="" />
                        ) : element[index].title === "Done" ? (
                          <img src={Done} alt="" />
                        ) : (
                          <img src={Close} alt="" />
                        )}
                    </div>
                  ) : isPriority ? (
                    <div
                      className="tags"
                      style={{
                        width: "35px",
                        height: "30px",
                        display: "inline-block",
                      }}
                    >
                      {element[index].title === "Low" ? (
                        <img src={LowPriorityIcon} alt="Low Priority" />
                      ) : element[index].title === "Medium" ? (
                        <img src={MediumPriorityIcon} alt="Medium Priority" />
                      ) : element[index].title === "High" ? (
                        <img src={HighPriority} alt="High Priority" />
                      ) : element[index].title === "Urgent" ? (
                        <img src={Urgent} alt="Urgent" />
                      ) : (
                        <img src={NoPriorityIcon} alt="" />
                      )}
                    </div>
                  ) : (
                    <p></p>
                  )}{" "}
                  <span>
                    {element[index]?.title} {element[index].value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <img src={AddIcon} alt=""/>{" "}
                  <img src={ThreeDotsIcon} alt="3 dots" />
                </div>
              </div>
              <div className="dashList">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card
                      id={element.id}
                      title={element.title}
                      tag={element.tag}
                      status={element.status}
                      priority={element.priority}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        {isStatus && (
          <>
            <div className="dashCardHeading">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "90px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "13px",
                    height: "13px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={DoneIcon} alt="Done Icon" />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Done</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img src={AddIcon} alt=""/>{" "}
                <img src={ThreeDotsIcon} alt="3 dots" />
              </div>
            </div>
            <div className="dashCardHeading">
              <div className="leftView" style={{ fontSize: "15px", marginRight: "60px", wordSpacing: "4px" }}>
                <div
                  className="cardTitle"
                  style={{
                    width: "9px",
                    height: "9px",
                    display: "inline-block",
                    fontWeight: 200,
                  }}
                >
                  <img src={CancelIcon} alt="Cancel Icon" />
                </div>{" "}
                <span style={{ fontSize: "13px", fontWeight: "lighter" }}>Canceled</span> <span style={{ fontSize: "13px", color: "#8F9997" }}>0</span>
              </div>
              <div className="rightView">
                <img src={AddIcon} alt=""/>{" "}
                <img src={ThreeDotsIcon} alt="3 dots" />
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
};
export default DashBoard;
