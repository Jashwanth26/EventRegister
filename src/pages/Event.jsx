import React, { useEffect, useState } from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from "../components/shadowButton.jsx";
import Card from "../components/Card.jsx";
import eventData from "../components/data.js";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [itemsPerPage] = useState(3); // Number of items per page
  const [error, setError] = useState({ error: true, message: "no error" });
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvent() {
      try {
        setEvents(eventData);
      } catch (err) {
        setError({ error: true, message: err });
      }
    }
    getEvent();
  }, []);

  const navigateToEventInfo = (eventInfo) => {
    navigate(`/events/description?id=${eventInfo.id}`, {
      state: { eventInfo },
    });
  };

  // Calculate the index of the first and last items on the current page
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;

  // Get current events
  const currentEvents = events.length > 0 ? events[0].events.slice(indexOfFirstEvent, indexOfLastEvent) : [];

  // Total number of pages
  const totalPages = Math.ceil(events.length > 0 ? events[0].events.length / itemsPerPage : 1);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <span className="text-poppins mt-5 md:text-xl text-sm flex flex-row justify-center">
          Events
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {currentEvents.map((event) => (
            <Card
              key={event.id} // Make sure to provide a unique key
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
                  onclick={() => navigateToEventInfo(event)}
                />
              }
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4" style={{marginTop:"100px"}}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 border ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
