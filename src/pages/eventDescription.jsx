import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faClock } from "@fortawesome/free-regular-svg-icons";
import { Button } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import eventData from "../components/data";
export default function EventDescription() {
  const navigate = useNavigate();
  const location = useLocation();
  let { eventinfo: event } = location.state || {};
  const [eventinfo, setEventInfo] = React.useState(event || {});
  const [error, setError] = useState({ error: false, message: "no error" });
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  React.useEffect(() => {
    const fetchCourse = async () => {
      if (id) {
        try {
          console.log(id, "id");
          const result = eventData[0].events.filter((item) => item.id == id);

          setEventInfo(result[0]);
        } catch (err) {
          setError({ error: true, message: err });
        }
      }
    };
    fetchCourse();
  }, [id]);

  return (
    <div className="overflow-hidden" style={{marginLeft: "25vw",padding: "50px"}}>
      <div className="flex flex-col md:flex-row w-full gap-10 mt-5">
        <div className="flex flex-col gap-3 md:w-3/5 w-full">
          <div className="course-box background-img flex gap-4 flex-col">
            <span
              className="md:text-xl text-sm text-poppins text-nowrap"
              style={{ color: "#00B902" }}
            >
              Event made Easy
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-lato text-title text-nowrap">
                {eventinfo.title || "title"}
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-2 text-nowrap">
                <FontAwesomeIcon icon={faBuilding} />
                <span className="text-poppins md:text-lg text-sm text-gray-500">
                  Draper House
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-nowrap">
                <FontAwesomeIcon icon={faClock} />
                <span className="text-poppins md:text-lg text-sm text-gray-500">
                  {eventinfo.date || "date"}
                </span>
              </div>
              <div className="flex flex-row items-center gap-2 text-nowrap">
                <FontAwesomeIcon icon={faChair} />
                <span className="text-poppins md:text-lg text-sm text-gray-500">
                  Available Seats {eventinfo.availableSeats || "date"}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between m-3 gap-2 text-nowrap">
                <div className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon icon={faLocationPin} />
                  <span className="text-poppins md:text-lg text-sm text-gray-500">
                    {/* {eventinfo.location} */} Banglore
                  </span>
                </div>
                <Button
                  onClick={() => {
                    setEventInfo((prevState) => ({
                      ...prevState,
                      availableSeats: eventinfo.availableSeats - 1,
                    }));
                  }}
                  className="text-lato"
                  style={{
                    padding: 10,
                    borderColor: "black",
                    boxShadow: "6px 8px 0px 4px #00B902",
                    width: "30%",
                    height: "100%",
                  }}
                >
                  Register for Event
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
