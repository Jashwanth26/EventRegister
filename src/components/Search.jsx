import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/OrderContext";
import { useSelector } from "react-redux";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from "../components/shadowButton.jsx";
import dataJson from "../components/data";
import Card from "./Card";
export default function SearchComponent() {
  const { searchItem, setShow, catag } = useContext(Context);
  const [mappedData, setMappedData] = React.useState([]);
  const [data, setData] = React.useState(dataJson[0].events);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchItem) {
      setShow(true);
      const regex = new RegExp(searchItem, "i");
      console.log(data, "searcjdata");
      const filteredData = data.filter(
        (item) => regex.test(item.title) || regex.test(item.category)
      );
      console.log(filteredData);
      setMappedData(filteredData);
      console.log(filteredData);
    } else {
      setShow(false);
      setMappedData([]);
    }
  }, [searchItem, setShow, catag, data]);

  const navigateToeventntInfo = (eventntinfo) => {
    navigate(`/events/description?id=${eventntinfo.id}`, {
      state: { eventntinfo },
    });
  };

  return (
    <>
      {mappedData.map((event) => (
        <Card
          title={
            <span className="text-lato text-title">
              {event.title || "event title"}
            </span>
          }
          body={
            <div className="flex flex-col gap-5">
              <span className="text-poppins md:text-lg text-sm text-gray-500 flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faClock} /> {event.date || "date"}
              </span>
              <span className="text-lato text-gray-500 flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faLocationPin} />
                {/* {event.location} */}
                Draper House, Banglore
              </span>
            </div>
          }
          button={
            <ShadowButton
              width={"50%"}
              buttonName={"Explore"}
              onclick={() => navigateToeventntInfo(event)}
            />
          }
        />
      ))}
    </>
  );
}
