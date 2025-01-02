import React from "react";
import Image from "next/image";
import { content } from "../../content";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ActivityCards = ({ lang }) => {
  const activitiesList = content.sectionsData.activities.activitiesList;

  return (
    <div className="activities-section py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          {activitiesList.map((activity, index) => (
            <div key={index} className="relative w-64 h-64 m-4 p-4 card">
              <div className="card-inner">
                <div className="card-front flex flex-col items-center justify-center bg-white rounded-lg shadow-lg">
                  {activity.icon && (
                    <i className={`fas fa-${activity.icon} text-6xl text-accent mb-10`}></i>
                  )}
                  <h3 className="text-2xl font-bold text-primary">
                    {lang === "fr" ? activity.name.fr : activity.name.en}
                  </h3>
                </div>
                <div className="card-back flex flex-col items-center justify-center bg-primary rounded-lg shadow-lg">
                  <Image
                    src="/images/working.jpg"
                    alt="" // alt empty because aria-hidden is set to true
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-lg object-cover opacity-30"
                    aria-hidden="true"
                  />
                  <p className="absolute px-4 text-white text-center">
                    {lang === "fr" ? activity.description.fr : activity.description.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;

