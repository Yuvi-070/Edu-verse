import React from "react";
import { infoItems } from "@/data/messageBoxItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function MessageBoxes() {
  return (
    <div className="col-lg-6">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Message Boxes</div>

      <div className="row y-gap-20">
        {infoItems.map((elm, i) => (
          <div key={i} className="col-12">
            <div
              className={`d-flex items-center justify-between ${elm.bgClass} pl-30 pr-20 py-30 rounded-8`}
            >
              <div className={`${elm.textClass} lh-1 fw-500`}>
                Info: User pending action
              </div>
              <div className={`${elm.textClass} size-20`}>
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
