import React from "react";

export default function WelcomeMessage({ tasks }) {
  return (
    <div className="w-screen text-xl font-bold px-3 max-w-[720px] flex flex-col justify-center items-center mt-5">
      {tasks.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <p>No Task assigned</p>
          <p>Enjoy your day</p>
        </div>
      )}
    </div>
  );
}
