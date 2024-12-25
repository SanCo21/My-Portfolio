import React, { useState } from "react";
import Image from "next/image";
import content from "../../content"; // Assurez-vous que le chemin est correct

const ActivityCard = ({ activity, lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-64 m-4 p-4 bg-blue-100 bg-opacity-80 border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-70" : "opacity-0"
        }`}
      >
        <Image
          src="/images/working.jpg"
          alt="Activity image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div
        className={`absolute inset-0 bg-blue-950 bg-opacity-80 transition-transform duration-300 overlay-slide ${
          isHovered ? "active" : ""
        } `}
      ></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h3 className={`text-2xl font-bold text-blue-900 transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          {lang === "fr" ? activity.name.fr : activity.name.en}
        </h3>
        <p className={`px-4 text-white text-center transition-opacity duration-300 absolute ${isHovered ? "opacity-100" : "opacity-0"}`}>
          {lang === "fr" ? activity.description.fr : activity.description.en}
        </p>
      </div>
    </div>
  );
};

const ActivityCards = ({ lang }) => {
  const activitiesList = content.sectionsData.activities.activitiesList;

  return (
    <div className="activities-section py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          {activitiesList.map((activity, index) => (
            <ActivityCard key={index} activity={activity} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
