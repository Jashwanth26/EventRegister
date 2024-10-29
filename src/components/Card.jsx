import React, { useEffect } from "react";
import "./card.css";
export default function Card({ title, body, bottom, button }) {
  return (
    <>
      <div
        className="flex flex-col card justify-between"
        style={{ width: "100%", height: "264px" }}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">{title || ""}</div>
        </div>
        <div className="flex flex-row items-center">{body || ""}</div>
        <div className="flex flex-row items-center justify-around">
          {bottom || ""}
        </div>
        <div className="flex flex-row items-center">
          <div className="flex justify-center" style={{ width: "100%" }}>
            {button || ""}
          </div>
        </div>
      </div>
    </>
  );
}
