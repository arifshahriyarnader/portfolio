import React from "react";

const Project = () => {
  return (
    <div>
      <div
        className="bg-[#F0F0F0] p-12 my-20 mx-20 border-solid border-2
      border-custom-[#F0F0F0] rounded-lg"
      >
        <h1 className="text-[#000000] text-3xl font-bold">My Projects:</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-7 pb-7 gap-5 project_container">
          <div
            className="bg-[#fff] p-5 text-center border-solid
             border-1 border-custom-[#ccc] rounded-lg project"
          >
            <h3 className="p-4 text-[#F25836] font-bold">
              Booking Reservation App
            </h3>
            <p className="p-2.5 text-sm">
              This project was final year project at my University.
              <br />
              This is a Full Stack/Mern Stack project.
            </p>
            <a
              href="https://github.com/arifshahriyarnader/booking_reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Github
            </a>
            |
            <a
              href="https://github.com/arifshahriyarnader/booking_reservation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Live Link
            </a>
          </div>
          <div
            className="bg-[#fff] p-5 text-center border-solid
                 border-1 border-custom-[#ccc] rounded-lg project"
          >
            <h3 className="p-4 text-[#F25836] font-bold">
              Restaurant Bill System App
            </h3>
            <p className="p-2.5 text-sm">
              This project was Project 200 at my University.
              <br />
              This is a C Programming project.
            </p>
            <a
              href="https://github.com/arifshahriyarnader/restaurant-bill-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Github
            </a>
            |
            <a
              href="https://github.com/arifshahriyarnader/restaurant-bill-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Live Link
            </a>
          </div>
          <div
            className="bg-[#fff] p-5 text-center border-solid
                     border-1 border-custom-[#ccc] rounded-lg project"
          >
            <h3 className="p-4 text-[#F25836] font-bold">
              Database Management Project
            </h3>
            <p className="p-2.5 text-sm">
              This project was Database Management project at my University.
              <br />
              This is a CRUD Operation Project.
            </p>
            <a
              href="https://github.com/arifshahriyarnader/Laravel_crud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Github
            </a>
            |
            <a
              href="https://github.com/arifshahriyarnader/Laravel_crud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg cursor-pointer"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
