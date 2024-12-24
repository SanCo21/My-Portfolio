import React, { useState } from "react";
import Image from "next/image";
import content from "../../content"; // Assurez-vous que le chemin est correct

const ActivityCard = ({ activity, lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-64 m-4 p-4 bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
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
        className={`absolute inset-0 bg-black bg-opacity-50 transition-transform duration-300 overlay-slide ${
          isHovered ? "active" : ""
        } `}
      ></div>
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full transition-colors duration-300 ${
          isHovered ? "text-white" : "text-blue-900"
        }`}
      >
        <h3 className="text-2xl font-bold">
          {lang === "fr" ? activity.name.fr : activity.name.en}
        </h3>
        <p className="mt-2">
          {lang === "fr" ? activity.description.fr : activity.description.en}
        </p>
      </div>
    </div>
  );
};

const ActivityCards = ({ lang }) => {
  const activitiesList = content.sectionsData.activities.activitiesList;

  return (
    <div className="activities-section py-12 bg-blue-100">
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
