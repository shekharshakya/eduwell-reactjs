import React, { useState } from "react";
import CourseApi from "../api/CourseApi";

const Accordion = () => {
  const [accordionshow, setaccordion] = useState(1);
  const [courseapi, setcourseapi] = useState(CourseApi);

  const Accordionhandler = (id) => {
    setaccordion(id)
  };

  return (
    <div className="accordion">
      {courseapi.map((api) => {
        return (
          <>
            <div
              className="accordion-items" 
              onClick={() => {
                Accordionhandler(api.id);
              }}
            >
              <div className="accordion-heading">
                <h3>{api.coursename}</h3>
                <i class="fa-solid fa-circle-plus"></i>
              </div>
              <div className={accordionshow  === api.id ? "accodion-details show" : " accodion-details" }>
                <p>{api.coursedetails}</p>
                <p>{api.coursedetailstwo}</p>
                <div className="text-center">
                  <span>{api.coursetime}</span>
                  <span>{api.courseweek}</span>
                  <span className="last-span">{api.coursecertificates}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
