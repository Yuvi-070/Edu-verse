import { eventKeys } from "@/data/calender";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function EventKeys() {
  return (
    <div className="col-12">
      <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
        <h5 className="text-17 fw-500 mb-30">Event Keys</h5>

        <div className="y-gap-10">
          {eventKeys.map((elm, i) => (
            <div key={i} className="d-flex items-center">
              <div
                className={`d-flex items-center justify-center size-25 bg-${elm.color}-light rounded-8`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={`size-12 ${elm.textColor} `}
                >
                  <FontAwesomeIcon
                    className={`size-12 ${elm.textColor}`}
                    icon={faEye}
                  />
                </div>
              </div>
              <div className="text-14 lh-1 ml-10">{elm.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
