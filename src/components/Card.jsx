import React from "react";

const Card = ({bg,icon,name}) => {
  return (
    <div
      className={`flex flex-col  items-center p-6 rounded-lg shadow-lg ${bg} text-white transition-transform transform hover:scale-105`}
    >
      <img src={icon} alt={name} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default Card;
