import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.link} className={props.className}>
      <div className="flex items-center justify-center">
        <p className="bg-white p-3 font-bold rounded-xl">{props.number}</p>
        <div className="bg-white p-3 rounded-full">
          <FaUserFriends />
        </div>
      </div>
      <h2 className="text-white text-3xl text-center">{props.text}</h2>
    </Link>
  );
};

export default Card;
