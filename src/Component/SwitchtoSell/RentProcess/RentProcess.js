import { Icon } from "@iconify/react";
import React from "react";
import "./RentProcess.css";


function RentProcess() {
  return (
    <>
     <div className="rentprocess">
        <h4>How to sell your equipment to us</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <ul className="rentprocess-box">
            <li>
                <span><Icon icon="fa6-solid:circle-dollar-to-slot" /></span>
                <h6>Your Price is Guaranteed</h6>
            </li>
            <li>
                <span><Icon icon="mdi:note-check" /></span>
                <h6>Your Sale is Final</h6>
            </li>
            <li>
                <span><Icon icon="healthicons:group-discussion-meetingx3" /></span>
                <h6>You Don't Manage Buyers or the Fulfillment Process</h6>
            </li>
        </ul>
     </div>
    </>
  );
}

export default RentProcess;